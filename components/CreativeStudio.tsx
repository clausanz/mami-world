'use client'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { dict, t } from '@/lib/i18n'
import Section from './Section'
import BrandCard from './BrandCard'
import { motion } from 'framer-motion'

export default function CreativeStudio() {
  const { lang } = useLang()
  const s = dict.studio

  return (
    <Section id="studio">
      <div className="divider mb-20" />

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <p className="font-brand text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#C8F02A' }}>
            {t(s.label, lang)}
          </p>
          <p className="font-brand text-xs uppercase tracking-widest text-muted mb-6">
            {t(s.tag, lang)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-champagne mb-6 leading-tight whitespace-pre-line">
            {t(s.heading, lang)}
          </h2>
          <p className="font-body text-muted text-base leading-relaxed mb-8">
            {t(s.intro, lang)}
          </p>
          <a
            href="https://mamistudio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-brand text-xs uppercase tracking-widest px-6 py-3 border text-[#C8F02A] border-[#C8F02A]/40 hover:bg-[#C8F02A]/10 hover:border-[#C8F02A] transition-all duration-300 inline-block"
          >
            {t(s.cta, lang)}
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src="/logos/creative-studio.png"
            alt="MAMI Creative Studio logo"
            width={260}
            height={260}
            className="object-contain opacity-90"
          />
        </div>
      </div>

      {/* Servicios */}
      <div className="mb-16">
        <p className="font-brand text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#C8F02A' }}>
          {t(s.services_label, lang)}
        </p>
        <div className="flex flex-wrap gap-3">
          {s.services.map((srv, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="font-brand text-xs uppercase tracking-wider px-4 py-2 border border-[#C8F02A]/20 text-champagne/70 hover:border-[#C8F02A]/60 hover:text-[#C8F02A] transition-all duration-200 cursor-default"
            >
              {t(srv, lang)}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Clientes */}
      <div className="mb-16">
        <p className="font-brand text-xs uppercase tracking-[0.3em] text-muted mb-6">
          {t(s.clients_label, lang)}
        </p>
        <div className="flex flex-wrap gap-2">
          {s.clients.map((c, i) => (
            <span
              key={i}
              className="font-body text-sm text-muted/60 px-3 py-1 border border-white/5"
            >
              {t(c, lang)}
            </span>
          ))}
        </div>
      </div>

      {/* Productos destacados */}
      <div className="divider mb-12" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {s.products.map((p, i) => (
          <BrandCard
            key={i}
            title={t(p.title, lang)}
            desc={t(p.desc, lang)}
            accent="#C8F02A"
            index={i}
          />
        ))}
      </div>
    </Section>
  )
}
