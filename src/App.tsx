import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { OpenSource } from './components/OpenSource'
import { Orgs } from './components/Orgs'
import { Principles } from './components/Principles'
import { Products } from './components/Products'
import { TopBar } from './components/TopBar'
import { useTheme } from './useTheme'

export default function App() {
  const { toggle } = useTheme()
  return (
    <>
      <TopBar onToggleTheme={toggle} />
      <Hero />
      <Products />
      <Principles />
      <Orgs />
      <OpenSource />
      <Contact />
      <Footer />
    </>
  )
}
