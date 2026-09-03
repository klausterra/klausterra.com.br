import { useEffect } from 'react'
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

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest('.prod, .os, .fig, .org, .layer') as HTMLElement | null
      if (target) {
        const rect = target.getBoundingClientRect()
        target.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
        target.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
      }
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

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
