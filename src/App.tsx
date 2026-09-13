import { useEffect } from 'react'
import { CircuitBackground } from './components/CircuitBackground'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Ecosystem } from './components/Ecosystem'
import { FeaturedCases } from './components/FeaturedCases'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Laboratory } from './components/Laboratory'
import { Offer } from './components/Offer'
import { OpenSource } from './components/OpenSource'
import { Principles } from './components/Principles'
import { Problems } from './components/Problems'
import { TopBar } from './components/TopBar'
import { Track } from './components/Track'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WorkModes } from './components/WorkModes'
import { useTheme } from './useTheme'

export default function App() {
  const { toggle } = useTheme()

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        '.problem-card, .case-card, .work-card, .lab-card, .ecosystem-card, .os, .fig, .legacy-card',
      ) as HTMLElement | null
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
      <Problems />
      <FeaturedCases />
      <WorkModes />
      <Track />
      <Ecosystem />
      <Principles />
      <Laboratory />
      <OpenSource />
      <Education />
      <Offer />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
