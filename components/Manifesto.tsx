'use client'
import { useLang } from '@/lib/LanguageContext'
import { dict, t } from '@/lib/i18n'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Manifesto() {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="py-20 px-6 bg-white/[0.02] border-y border-gold/10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="font-display text-xl md:text-3xl lg:text-4xl text-champagne/90 text-center max-w-4xl mx-auto leading-relaxed"
      >
        {t(dict.manifesto.line, lang)}
      </motion.p>
    </div>
  )
}
