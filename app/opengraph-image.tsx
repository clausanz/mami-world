import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MAMI World — AI Brand · Roma'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0A0B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'serif',
        }}
      >
        {/* Gold radial glow center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(232,197,107,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Top hairline */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: '80px',
            right: '80px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #C99A3B, transparent)',
            opacity: 0.5,
          }}
        />

        {/* Bottom hairline */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '80px',
            right: '80px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #C99A3B, transparent)',
            opacity: 0.5,
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: '14px',
            letterSpacing: '6px',
            color: '#C99A3B',
            textTransform: 'uppercase',
            marginBottom: '24px',
            fontFamily: 'sans-serif',
            fontWeight: 600,
          }}
        >
          ROMA · AI BRAND
        </div>

        {/* MAMI title */}
        <div
          style={{
            fontSize: '160px',
            fontWeight: 900,
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '24px',
            background: 'linear-gradient(105deg, #C99A3B 0%, #E8C56B 30%, #F4E4B0 50%, #E8C56B 70%, #C99A3B 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'serif',
          }}
        >
          MAMI
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '18px',
            color: '#8A8473',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
            marginBottom: '48px',
          }}
        >
          WORLD
        </div>

        {/* Three brands */}
        <div
          style={{
            display: 'flex',
            gap: '0px',
            alignItems: 'center',
          }}
        >
          {/* Creative Studio */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px 40px',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C8F02A', marginBottom: '10px' }} />
            <div style={{ fontSize: '11px', color: '#C8F02A', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'sans-serif', fontWeight: 600 }}>
              Creative Studio
            </div>
          </div>

          {/* Academy */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px 40px',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8C56B', marginBottom: '10px' }} />
            <div style={{ fontSize: '11px', color: '#E8C56B', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'sans-serif', fontWeight: 600 }}>
              AI Academy
            </div>
          </div>

          {/* Podcast */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px 40px',
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5FA2', marginBottom: '10px' }} />
            <div style={{ fontSize: '11px', color: '#FF5FA2', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'sans-serif', fontWeight: 600 }}>
              Ciao Mami Podcast
            </div>
          </div>
        </div>

        {/* URL bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '0',
            right: '0',
            textAlign: 'center',
            fontSize: '12px',
            color: '#3a3a3a',
            letterSpacing: '3px',
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
          }}
        >
          mami-world.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
