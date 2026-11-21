import { brand, siteIndex } from '../content'
import MenuButton from './MenuButton'

type Props = {
  visible: boolean
  active: string | null
  menuOpen: boolean
  onToggleMenu: () => void
}

// A floating frosted-white bar that slides in once the hero is gone.
export default function StickyNav({ visible, active, menuOpen, onToggleMenu }: Props) {
  return (
    <div className="pointer-events-none fixed inset-x-3 top-3 z-30 flex justify-center sm:inset-x-6">
      <header
        inert={!visible}
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/60 bg-white/85 py-1.5 pl-5 pr-1.5 text-navy shadow-float backdrop-blur-xl transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none sm:pl-6 sm:pr-2 ${
          visible ? 'translate-y-0' : '-translate-y-[150%]'
        }`}
      >
        <a href="#top" className="text-lg font-black uppercase tracking-[0.06em]">
          {brand}
          <span className="text-sky">.</span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex text-sm font-bold">
            {siteIndex.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block rounded-full px-3 py-2 transition-colors duration-300 lg:px-4 ${
                      isActive ? 'bg-navy text-white' : 'text-navy/60 hover:bg-cloud hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <MenuButton open={menuOpen} onToggle={onToggleMenu} tone="solid" className="lg:hidden" />
      </header>
    </div>
  )
}
