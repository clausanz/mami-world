'use client'
import { useLang } from '@/lib/LanguageContext'
import { dict, t } from '@/lib/i18n'
import Section from './Section'

export default function Contact() {
  const { lang } = useLang()
  const c = dict.contact

  return (
    <Section id="contact" className="text-center">
      <div className="divider mb-20" />
      <p className="font-brand text-xs uppercase tracking-[0.3em] text-gold mb-6">
        {t(c.location, lang)}
      </p>
      <h2 className="font-display text-4xl md:text-6xl text-champagne mb-6 leading-tight max-w-3xl mx-auto">
        {t(c.heading, lang)}
      </h2>
      <p className="font-body text-muted text-lg mb-12 max-w-xl mx-auto leading-relaxed">
        {t(c.sub, lang)}
      </p>
      <a
        href="mailto:ciao@mamiworld.it"
        className="font-brand text-sm uppercase tracking-widest px-10 py-5 bg-gradient-to-r from-gold-deep to-gold text-ink font-bold inline-block hover:from-gold hover:to-gold-hi transition-all duration-300"
      >
        {t(c.cta, lang)}
      </a>
    </Section>
  )
}
