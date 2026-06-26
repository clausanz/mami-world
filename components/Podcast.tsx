'use client'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { dict, t } from '@/lib/i18n'
import Section from './Section'
import { motion } from 'framer-motion'

export default function Podcast() {
  const { lang } = useLang()
  const p = dict.podcast

  return (
    <Section id="podcast">
      <div className="divider mb-20" />

      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <p className="font-brand text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#FF5FA2' }}>
            {t(p.label, lang)}
          </p>
          <p className="font-brand text-xs uppercase tracking-widest text-muted mb-6">
            {t(p.tag, lang)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne mb-6 leading-tight whitespace-pre-line">
            {t(p.heading, lang)}
          </h2>
          <p className="font-body text-muted text-base leading-relaxed mb-8">
            {t(p.intro, lang)}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/ciaomami.podcast?igsh=MWQzbWRhOW5vcGFocA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-brand text-xs uppercase tracking-widest px-6 py-3 border border-[#FF5FA2]/40 text-[#FF5FA2] hover:bg-[#FF5FA2]/10 hover:border-[#FF5FA2] transition-all duration-300 inline-block"
            >
              {t(p.cta, lang)} · Instagram
            </a>
            <a
              href="https://youtube.com/@ciaomamipodcast?si=rFRE-wt75eUoDeql"
              target="_blank"
              rel="noopener noreferrer"
              className="font-brand text-xs uppercase tracking-widest px-6 py-3 border border-white/10 text-muted hover:border-[#FF5FA2]/40 hover:text-[#FF5FA2] transition-all duration-300 inline-block"
            >
              {t(p.cta_yt, lang)}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/logos/ciao-mami-podcast.png"
            alt="Ciao Mami Podcast logo"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
      </div>

      {/* Topics */}
      <div>
        <p className="font-brand text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#FF5FA2' }}>
          {t(p.topics_label, lang)}
        </p>
        <div className="flex flex-wrap gap-3">
          {p.topics.map((topic, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="font-brand text-xs uppercase tracking-wider px-4 py-2 border border-[#FF5FA2]/20 text-champagne/70 hover:border-[#FF5FA2]/60 hover:text-[#FF5FA2] transition-all duration-200 cursor-default"
            >
              {t(topic, lang)}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  )
}
