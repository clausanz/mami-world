'use client'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { dict, t } from '@/lib/i18n'
import Section from './Section'
import { motion } from 'framer-motion'

export default function Academy() {
  const { lang } = useLang()
  const a = dict.academy
  const points = a.points[lang]

  return (
    <Section id="academy" className="bg-white/[0.01]">
      <div className="divider mb-20" />

      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/logos/mami-ia.png"
            alt="MAMI AI Academy logo"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="font-brand text-xs uppercase tracking-[0.3em] text-gold mb-2">
            {t(a.label, lang)}
          </p>
          <p className="font-brand text-xs uppercase tracking-widest text-muted mb-6">
            {t(a.tag, lang)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne mb-6 leading-tight whitespace-pre-line">
            {t(a.heading, lang)}
          </h2>
          <p className="font-body text-muted text-base leading-relaxed mb-8">
            {t(a.intro, lang)}
          </p>
          <ul className="space-y-3 mb-8">
            {points.map((pt: string, i: number) => (
              <li key={i} className="flex items-center gap-3 font-body text-champagne/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {pt}
              </li>
            ))}
          </ul>
          <a
            href="http://mamiiaacademy.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-brand text-xs uppercase tracking-widest px-6 py-3 bg-gradient-to-r from-gold-deep to-gold text-ink font-bold inline-block hover:from-gold hover:to-gold-hi transition-all duration-300"
          >
            {t(a.cta, lang)}
          </a>
        </div>
      </div>

      {/* Topics grid */}
      <div>
        <p className="font-brand text-xs uppercase tracking-[0.3em] text-gold mb-8">
          {t(a.topics_label, lang)}
        </p>
        <div className="flex flex-wrap gap-3">
          {a.topics.map((topic, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="font-brand text-xs uppercase tracking-wider px-4 py-2 border border-gold/20 text-champagne/70 hover:border-gold/60 hover:text-gold transition-all duration-200 cursor-default"
            >
              {t(topic, lang)}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  )
}
