'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logos/mami-ia.png" alt="MAMI" width={28} height={28} className="object-contain" />
          <span className="font-display text-lg font-bold gold-shimmer">MAMI</span>
        </div>
        <ul className="flex flex-wrap gap-6 justify-center font-brand text-xs uppercase tracking-widest text-muted">
          <li>MAMI Creative Studio</li>
          <li>MAMI IA Academy</li>
          <li>Ciao Mami Podcast</li>
        </ul>
        <p className="font-body text-xs text-muted/60">
          © {new Date().getFullYear()} MAMI World. Roma, Italia.
        </p>
      </div>
    </footer>
  )
}
