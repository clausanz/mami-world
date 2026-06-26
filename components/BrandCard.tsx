'use client'
import { motion } from 'framer-motion'

interface BrandCardProps {
  title: string
  desc: string
  accent?: string
  index?: number
}

export default function BrandCard({ title, desc, accent = '#E8C56B', index = 0 }: BrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6"
    >
      <div
        className="w-8 h-px mb-4 transition-all duration-300 group-hover:w-12"
        style={{ backgroundColor: accent }}
      />
      <h3 className="font-brand text-sm uppercase tracking-widest text-champagne mb-3">{title}</h3>
      <p className="font-body text-muted text-sm leading-relaxed">{desc}</p>
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </motion.div>
  )
}
