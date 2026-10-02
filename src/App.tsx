import { useCallback, useState } from 'react'
import { siteIndex } from './content'
import { useScrollState } from './hooks/useScrollState'
import Hero from './components/Hero'
import MobileMenu from './components/MobileMenu'
import StickyNav from './components/StickyNav'
import Profile from './components/sections/Profile'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Expertise from './components/sections/Expertise'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

const sectionIds = siteIndex.map((link) => link.href.slice(1))

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const { pastHero, active } = useScrollState('top', sectionIds)

  return (
    <>
      <StickyNav visible={pastHero} active={active} menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <main>
        <Hero menuOpen={menuOpen} onToggleMenu={toggleMenu} />
        <Profile />
        <Experience />
        <Projects />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  )
}
