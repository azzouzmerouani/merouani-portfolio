import type { CSSProperties } from 'react'
import { brand, images, location, name, nav, roles, social, year, type Link } from '../content'
import MenuButton from './MenuButton'

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` })

// The animation sits on the <li> so it can't override the link's hover opacity.
function LinkStack({ links, startDelay, label }: { links: Link[]; startDelay: number; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-col gap-0.5 text-sm">
      {links.map((link, i) => (
        <li key={link.label} className="anim-fade-up" style={delay(startDelay + i * 80)}>
          <a
            href={link.href}
            className="transition-opacity duration-300 hover:opacity-60"
            {...(link.external && { target: '_blank', rel: 'noreferrer' })}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

type Props = {
  menuOpen: boolean
  onToggleMenu: () => void
}

export default function Hero({ menuOpen, onToggleMenu }: Props) {
  return (
    <section id="top" className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <h1 className="sr-only">
        {name.first} {name.last} — {roles.join(', ')}
      </h1>

      {images.background && (
        <img
          src={images.background}
          alt=""
          className="anim-fade-in absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden="true"
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]"
        style={delay(500)}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-cream sm:text-[26vh]">
          <span className="pr-[6vw]">
            {name.first} {name.last}&nbsp;
          </span>
          <span className="pr-[6vw]">
            {name.first} {name.last}&nbsp;
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28"
        style={delay(1200)}
      />

      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:px-10 lg:z-10 sm:pb-8 sm:text-sm">
        <p className="anim-fade-up" style={delay(1400)}>
          {roles.map((role) => (
            <span key={role} className="block">
              {role}
            </span>
          ))}
        </p>
        <p className="anim-fade-up text-right" style={delay(1550)}>
          <span className="block">{location.label}</span>
          <span className="block">{location.place}</span>
        </p>
      </footer>

      {/* Portrait photo: fills the screen on phones; on wider screens the whole figure stands on the bottom edge. */}
      <img
        src={images.portrait}
        alt={`${name.first} ${name.last}`}
        fetchPriority="high"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover object-top sm:object-contain sm:object-bottom"
        style={delay(300)}
      />

      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 text-cream sm:px-10 sm:pt-8">
        <a href="#top" className="anim-fade-up font-hn text-lg tracking-wide" style={delay(800)}>
          {brand}
        </a>

        <div className="hidden items-start gap-16 font-hn sm:flex lg:gap-24">
          <span className="anim-fade-up text-sm" style={delay(900)}>
            {year}
          </span>
          <nav aria-label="Primary">
            <LinkStack links={nav} startDelay={1000} label="Site index" />
          </nav>
          <LinkStack links={social} startDelay={1150} label="Find me" />
        </div>

        <MenuButton open={menuOpen} onToggle={onToggleMenu} className="anim-fade-up" style={delay(900)} />
      </header>
    </section>
  )
}
