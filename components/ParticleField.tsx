'use client'
import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Points>(null)
  const COUNT = 5000

  const { geo, mat } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    const col = new Float32Array(COUNT * 3)
    const goldColors = [
      new THREE.Color('#E8C56B'),
      new THREE.Color('#C99A3B'),
      new THREE.Color('#F4E4B0'),
      new THREE.Color('#D4A94A'),
    ]
    for (let i = 0; i < COUNT; i++) {
      const r = Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      const c = goldColors[Math.floor(Math.random() * goldColors.length)]
      col[i * 3]     = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    })
    return { geo: geometry, mat: material }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const elapsed = state.clock.elapsedTime * 0.05
    meshRef.current.rotation.y = elapsed + (mouse.current?.x ?? 0) * 0.1
    meshRef.current.rotation.x = elapsed * 0.3 + (mouse.current?.y ?? 0) * 0.05
  })

  return <points ref={meshRef} geometry={geo} material={mat} />
}

export default function ParticleField() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
      gl={{ antialias: false }}
    >
      <Particles mouse={mouse} />
    </Canvas>
  )
}
