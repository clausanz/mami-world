import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import CreativeStudio from '@/components/CreativeStudio'
import Academy from '@/components/Academy'
import Podcast from '@/components/Podcast'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifesto />
      <CreativeStudio />
      <Academy />
      <Podcast />
      <Contact />
      <Footer />
    </main>
  )
}
