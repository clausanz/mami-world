import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: {
    default: 'MAMI World — AI Brand · Roma',
    template: '%s | MAMI World',
  },
  description:
    'MAMI World: infrastruttura AI, formazione e podcast per attività locali. Creative Studio, MAMI AI Academy e Ciao Mami Podcast. Roma, Italia.',
  keywords: [
    'MAMI World',
    'MAMI Creative Studio',
    'MAMI AI Academy',
    'Ciao Mami Podcast',
    'intelligenza artificiale',
    'inteligencia artificial',
    'AI per attività locali',
    'formazione AI italiano',
    'chatbot WhatsApp',
    'automazioni AI',
    'marketing digitale Roma',
    'podcast latina Italia',
    'AI academy italiano spagnolo',
  ],
  authors: [{ name: 'MAMI World', url: 'https://mami-world.vercel.app' }],
  creator: 'MAMI World',
  metadataBase: new URL('https://mami-world.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: 'es_ES',
    url: 'https://mami-world.vercel.app',
    siteName: 'MAMI World',
    title: 'MAMI World — AI Brand · Roma',
    description:
      'Infrastruttura AI, formazione e podcast per attività locali. Tre mondi, un\'unica visione. Roma, Italia.',
    images: [
      {
        url: '/logos/mami-ia.png',
        width: 1200,
        height: 630,
        alt: 'MAMI World — AI Brand Roma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAMI World — AI Brand · Roma',
    description:
      'Infrastruttura AI, formazione e podcast per attività locali. Tre mondi, un\'unica visione.',
    images: ['/logos/mami-ia.png'],
  },
  verification: {
    google: 'BoMl2NyYX-ZNZA66gVDxC60qexks1k-beuFZKzJCuvA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logos/mami-ia.png',
    shortcut: '/logos/mami-ia.png',
    apple: '/logos/mami-ia.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
