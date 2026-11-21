import type { CSSProperties } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { brand, contact, images, location, name, nav, roles } from '../content'
import MenuButton from './MenuButton'

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` })

// Lucide no longer ships brand marks, so the GitHub logo is drawn here.
function GitHubMark({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

type Props = {
  menuOpen: boolean
  onToggleMenu: () => void
}

export default function Hero({ menuOpen, onToggleMenu }: Props) {
  return (
    <section id="top" className="sky-backdrop relative h-[100dvh] w-full overflow-hidden">
      <h1 className="sr-only">
        {name.first} {name.last} — {roles.join(', ')}
      </h1>

      {images.background && (
        <img src={images.background} alt="" className="anim-fade-in absolute inset-0 h-full w-full object-cover" />
      )}

      <div
        aria-hidden="true"
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[15vh]"
        style={delay(500)}
      >
        <div data-parallax="-0.35">
        <div className="marquee flex w-max whitespace-nowrap text-[15vh] font-black leading-none tracking-[-0.04em] text-white sm:text-[24vh]">
          <span className="pr-[6vw]">
            {name.first} {name.last}&nbsp;
          </span>
          <span className="pr-[6vw]">
            {name.first} {name.last}&nbsp;
          </span>
        </div>
        </div>
      </div>

      {/* Twinkling sparkles in the sky. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
        {[[8,22,0],[18,62,1.2],[30,12,2.1],[44,38,0.6],[62,18,1.6],[74,52,2.6],[86,28,0.9],[92,70,1.9],[12,80,2.4],[54,72,0.3]].map(([x,y,d]) => (
          <span key={`${x}-${y}`} className="twinkle" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }} />
        ))}
      </div>

      {/* Portrait photo: fills the screen on phones; on wider screens the whole figure stands on the bottom edge. */}
      <div data-parallax="0.18" className="pointer-events-none absolute inset-0 z-20">
      <img
        src={images.portrait}
        alt={`${name.first} ${name.last}`}
        fetchPriority="high"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover object-top sm:object-contain sm:object-bottom"
        style={delay(300)}
      />
      </div>

      {/* Glass chips along the bottom, like volz.app's feature row. */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-wrap items-end justify-between gap-3 px-5 pb-5 sm:px-10 sm:pb-8">
        <ul className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap">
          {roles.map((role, i) => (
            <li
              key={role}
              className="anim-fade-up glass rounded-2xl px-3.5 py-2 text-xs font-bold text-white sm:px-4 sm:py-2.5 sm:text-sm"
              style={delay(1400 + i * 90)}
            >
              {role}
            </li>
          ))}
        </ul>
        <p
          className="anim-fade-up glass inline-flex items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-bold text-white sm:px-4 sm:py-2.5 sm:text-sm"
          style={delay(1700)}
        >
          <MapPin aria-hidden="true" size={16} strokeWidth={2} />
          {location.place}
        </p>
      </div>

      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 pt-5 text-white sm:px-10 sm:pt-7">
        <a href="#top" className="anim-fade-up text-xl font-black uppercase tracking-[0.06em]" style={delay(800)}>
          {brand}
          <span className="text-sky">.</span>
        </a>

        <div className="hidden items-center gap-3 sm:flex">
          {/* Segmented glass tabs, like volz.app's Flights / Stays / Umrah switch. */}
          <nav aria-label="Primary" className="anim-fade-up glass rounded-full p-1" style={delay(950)}>
            <ul className="flex text-sm font-bold">
              {nav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block rounded-full px-4 py-2 transition-colors duration-300 hover:bg-white hover:text-navy lg:px-5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="anim-fade-up glass flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-white hover:text-navy"
            style={delay(1050)}
          >
            <Mail size={18} strokeWidth={2} />
          </a>
          <a
            href={contact.githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="anim-fade-up glass flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-white hover:text-navy"
            style={delay(1130)}
          >
            <GitHubMark />
          </a>
        </div>

        <MenuButton open={menuOpen} onToggle={onToggleMenu} className="anim-fade-up sm:hidden" style={delay(900)} />
      </header>
    </section>
  )
}
