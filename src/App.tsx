import { CircuitBackground } from './components/CircuitBackground'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Offer } from './components/Offer'
import { OpenSource } from './components/OpenSource'
import { Orgs } from './components/Orgs'
import { Principles } from './components/Principles'
import { Products } from './components/Products'
import { Track } from './components/Track'
import { TopBar } from './components/TopBar'
import { WhatsAppButton } from './components/WhatsAppButton'
import { useTheme } from './useTheme'

export default function App() {
  const { toggle } = useTheme()
  return (
    <>
      <CircuitBackground />
      <TopBar onToggleTheme={toggle} />
      <Hero />
      <Products />
      <Principles />
      <Track />
      <Education />
      <Orgs />
      <OpenSource />
      <Offer />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
