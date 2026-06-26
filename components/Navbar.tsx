'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { dict, t } from '@/lib/i18n'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { lang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t(dict.nav.studio, lang),  href: '#studio' },
    { label: t(dict.nav.academy, lang), href: '#academy' },
    { label: t(dict.nav.podcast, lang), href: '#podcast' },
    { label: t(dict.nav.contact, lang), href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/80 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="MAMI home">
          <Image
            src="/logos/mami-ia.png"
            alt="MAMI logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-display text-xl font-bold gold-shimmer">MAMI</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-brand text-xs uppercase tracking-widest text-muted hover:text-champagne transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-champagne transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-champagne transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-champagne transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-md border-t border-gold/10 px-6 py-6">
          <ul className="flex flex-col gap-6" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-brand text-sm uppercase tracking-widest text-champagne"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
