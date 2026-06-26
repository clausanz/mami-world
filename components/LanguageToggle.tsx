'use client'
import { useLang } from '@/lib/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center gap-1 font-brand text-xs tracking-widest">
      <button
        onClick={() => setLang('it')}
        aria-pressed={lang === 'it'}
        className={`px-2 py-1 transition-colors ${lang === 'it' ? 'text-gold' : 'text-muted hover:text-champagne'}`}
      >
        IT
      </button>
      <span className="text-muted opacity-40">|</span>
      <button
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        className={`px-2 py-1 transition-colors ${lang === 'es' ? 'text-gold' : 'text-muted hover:text-champagne'}`}
      >
        ES
      </button>
    </div>
  )
}
