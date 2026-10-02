import { brand, siteIndex } from '../content'
import MenuButton from './MenuButton'

type Props = {
  visible: boolean
  active: string | null
  menuOpen: boolean
  onToggleMenu: () => void
}

// Slides in once the hero is gone.
export default function StickyNav({ visible, active, menuOpen, onToggleMenu }: Props) {
  return (
    <header
      inert={!visible}
      className={`fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-cream/10 bg-black/85 px-6 py-3 text-cream backdrop-blur-md transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none sm:px-10 sm:py-5 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <a href="#top" className="text-lg tracking-wide">
        {brand}
      </a>

      <nav aria-label="Sections" className="hidden sm:block">
        <ul className="flex gap-6 text-sm lg:gap-9">
          {siteIndex.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`transition-opacity duration-300 hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-50'}`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <MenuButton open={menuOpen} onToggle={onToggleMenu} />
    </header>
  )
}
