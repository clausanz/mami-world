'use client'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { dict, t } from '@/lib/i18n'
import { motion } from 'framer-motion'

const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false })

export default function Hero() {
  const { lang } = useLang()
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* 3D particles */}
      {!reducedMotion && (
        <div className="absolute inset-0">
          <ParticleField />
        </div>
      )}

      {/* Fallback gradient for reduced-motion */}
      {reducedMotion && (
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(232,197,107,0.08) 0%, #0A0A0B 70%)' }} />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-brand text-xs uppercase tracking-[0.3em] text-gold mb-6"
        >
          {t(dict.hero.eyebrow, lang)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display leading-none font-black gold-shimmer mb-8"
          style={{ fontSize: 'clamp(6rem, 20vw, 14rem)' }}
        >
          MAMI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-champagne/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t(dict.hero.subtitle, lang)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#studio"
            className="font-brand text-sm uppercase tracking-widest px-8 py-4 bg-gradient-to-r from-gold-deep to-gold text-ink font-bold hover:from-gold hover:to-gold-hi transition-all duration-300"
          >
            {t(dict.hero.cta1, lang)}
          </a>
          <a
            href="#contact"
            className="font-brand text-sm uppercase tracking-widest px-8 py-4 border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            {t(dict.hero.cta2, lang)}
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-brand text-[10px] uppercase tracking-widest text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
