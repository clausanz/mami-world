import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:       '#050505',
        obsidian:  '#0A0A0B',
        gold:      '#E8C56B',
        'gold-deep': '#C99A3B',
        'gold-hi': '#F4E4B0',
        champagne: '#EDE3CE',
        muted:     '#8A8473',
        lime:      '#C8F02A',
        pink:      '#FF5FA2',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        brand:   ['Syne', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
