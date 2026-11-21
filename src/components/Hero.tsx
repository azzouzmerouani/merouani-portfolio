import { useEffect, useState, type CSSProperties } from 'react'
import { ArrowDown, ArrowUpRight, Mail, Phone, Plus } from 'lucide-react'
import { brand, contact, expertise, name, profile, roles, siteIndex } from '../content'
import { pop } from '../sakuga'
import { CountUp } from './Reveal'
import MenuButton from './MenuButton'

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` })
const depth = (d: number): CSSProperties => ({ '--d': d } as CSSProperties)

const PORTRAIT = '/images/merouani-bust.webp'
const HEX = 'polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)'
const years = String(Number(new Date().getFullYear()) - Number(profile.stats[0].value)).padStart(2, '0')

function GitHubMark({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

// Types each role out, holds, deletes it and moves to the next.
function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const calm = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (calm) return
    const word = words[i % words.length]
    const done = !deleting && text === word
    const empty = deleting && text === ''
    const wait = done ? 1600 : empty ? 300 : deleting ? 28 : 60
    const t = window.setTimeout(() => {
      if (done) setDeleting(true)
      else if (empty) {
        setDeleting(false)
        setI((n) => n + 1)
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, wait)
    return () => window.clearTimeout(t)
  }, [text, deleting, i, words, calm])

  return (
    <span aria-label={words.join(', ')}>
      <span aria-hidden="true">{calm ? words[0] : text}</span>
      <span aria-hidden="true" className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-sky" />
    </span>
  )
}

// Words of the headline rise one after another on load.
function Words({ text, start, className = '' }: { text: string; start: number; className?: string }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
          <span className={`anim-word inline-block ${className}`} style={delay(start + i * 90)}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </>
  )
}

// A rotating ring of text around a round button (the "scroll" badge in the reference).
function SpinBadge() {
  const label = 'FLUTTER DEVELOPER • MOBILE TEAM LEAD • '
  return (
    <a
      href="#profile"
      aria-label="Scroll to profile"
      data-magnetic
      className="anim-pop group relative flex h-28 w-28 items-center justify-center rounded-full bg-white/80 shadow-float backdrop-blur-md sm:h-32 sm:w-32"
      style={delay(1500)}
    >
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full text-navy" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <text className="fill-current text-[8.6px] font-bold tracking-[0.18em]">
          <textPath href="#badge-circle">{label}</textPath>
        </text>
      </svg>
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-sky">
        <ArrowDown aria-hidden="true" size={18} strokeWidth={2.4} className="bob" />
      </span>
    </a>
  )
}

type Props = {
  menuOpen: boolean
  onToggleMenu: () => void
}

export default function Hero({ menuOpen, onToggleMenu }: Props) {
  const chips = expertise.ticker.slice(0, 6)

  return (
    <section
      id="top"
      data-hero
      className="tone-light relative min-h-[100dvh] w-full overflow-hidden bg-mist text-body"
    >
      {/* Backdrop: dot grid and drifting colour. */}
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="blob -left-32 top-20 h-96 w-96 bg-sky/20" />
      <div aria-hidden="true" className="blob -right-20 bottom-0 h-[28rem] w-[28rem] bg-sun/15 [animation-delay:-9s]" />

      {/* ---------- Top bar ---------- */}
      <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-5 pt-5 sm:px-10 sm:pt-7">
        <a href="#top" className="anim-fade-up flex items-center gap-2.5 text-lg font-black text-navy" style={delay(100)}>
          <span aria-hidden="true" className="logo-mark spin-slow relative h-7 w-7 rounded-full" />
          {brand.toLowerCase()}
          <span className="-ml-2 text-sky">.</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-bold text-navy/60">
            <li className="anim-fade-up" style={delay(200)}>
              <a href="#top" aria-current="page" className="nav-link is-active text-navy">
                Home
              </a>
            </li>
            {siteIndex.slice(0, 4).map((link, i) => (
              <li key={link.label} className="anim-fade-up" style={delay(260 + i * 60)}>
                <a href={link.href} className="nav-link transition-colors duration-300 hover:text-navy">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-magnetic
            className="anim-fade-up hidden rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white shadow-float transition-colors duration-300 hover:bg-sky sm:block"
            style={delay(500)}
          >
            Contact me
          </a>
          <MenuButton open={menuOpen} onToggle={onToggleMenu} tone="solid" className="anim-fade-up lg:hidden" style={delay(400)} />
        </div>
      </header>

      {/* ---------- Body ---------- */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-10 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-20">
        {/* Left: copy */}
        <div>
          <p className="flex items-center gap-3 text-sm font-bold text-navy">
            <span aria-hidden="true" className="anim-line inline-block h-0.5 w-10 bg-sky" style={delay(500)} />
            <span className="anim-fade-up" style={delay(600)}>
              <Typewriter words={roles} />
            </span>
          </p>

          <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.9rem)] font-black leading-[1.02] tracking-[-0.035em] text-navy">
            <Words text="Hello, I'm" start={650} />
            <span className="relative inline-block">
              <Words text={name.first} start={830} className="text-sky" />
              <svg
                aria-hidden="true"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-[92%] text-sun"
              >
                <path d="M4 14 C 60 4, 120 4, 170 10 S 260 16, 296 6" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="draw" style={delay(1300)} />
              </svg>
            </span>
            <br />
            <Words text="I build Flutter apps." start={960} />
          </h1>

          <p className="anim-fade-up mt-6 max-w-md text-base font-medium leading-relaxed text-body/75 sm:text-[17px]" style={delay(1250)}>
            {profile.statement}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              data-magnetic
              onClick={(e) => pop(e.currentTarget, 'pon')}
              className="anim-pop group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-navy bg-sky px-6 py-3 text-sm font-bold text-white shadow-[4px_5px_0_#074183] transition-[box-shadow,transform] duration-300 hover:shadow-[2px_2px_0_#074183]"
              style={delay(1400)}
            >
              <span className="relative z-10">Let&rsquo;s talk with me</span>
              <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />
            </a>
            <a
              href="#projects"
              className="anim-fade-up group inline-flex items-center gap-2 text-sm font-bold text-navy"
              style={delay(1500)}
            >
              Projects
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-navy text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={2.4} />
              </span>
            </a>
          </div>

          <dl className="mt-12 flex gap-12">
            {[
              { value: `${years}`, suffix: '+', label: 'Years of experience' },
              { value: profile.stats[2].value, suffix: '', label: 'Projects shipped' },
              { value: profile.stats[1].value, suffix: '', label: 'Roles held' },
            ].map((s, i) => (
              <div key={s.label} className="anim-fade-up" style={delay(1600 + i * 120)}>
                <dd className="text-3xl font-black tracking-[-0.03em] text-navy sm:text-4xl">
                  <CountUp value={s.value} />
                  {s.suffix}
                </dd>
                <dt className="mt-1 text-xs font-bold text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>

          <svg aria-hidden="true" viewBox="0 0 240 24" className="mt-5 h-5 w-56 overflow-visible text-navy/40">
            <path
              className="squiggle"
              d="M0 12 q 10 -10 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Right: hexagon portrait */}
        <div className="relative mx-auto w-full max-w-[460px]">
          <p
            className="anim-fade-up absolute -top-2 right-0 z-20 max-w-[11rem] text-right text-xs font-bold italic leading-snug text-navy/60"
            style={delay(1700)}
          >
            &ldquo;Clean architecture is a feature users can feel.&rdquo;
          </p>

          <div className="relative aspect-square">
            {/* Rotating dashed outline */}
            <div aria-hidden="true" className="depth absolute inset-[2%]" style={depth(10)}>
              <svg viewBox="0 0 100 100" className="spin-rev h-full w-full text-navy/25">
                <polygon points="25,3 75,3 100,50 75,97 25,97 0,50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2.5" />
              </svg>
            </div>

            {/* Sky hexagon */}
            <div className="depth absolute inset-[10%]" style={depth(18)}>
              <div
                aria-hidden="true"
                className="hex-in h-full w-full bg-[linear-gradient(150deg,#4db8f5_0%,#00b2ff_45%,#074183_100%)]"
                style={{ clipPath: HEX, ...delay(300) }}
              />
            </div>

            {/* Portrait, overflowing the top of the hexagon */}
            <div className="depth absolute inset-x-[14%] bottom-[10%] top-[-2%]" style={depth(32)}>
              <div
                className="anim-rise-in h-full w-full"
                style={{ clipPath: 'polygon(-20% -20%, 120% -20%, 120% 76%, 86% 100%, 14% 100%, -20% 76%)', ...delay(700) }}
              >
                <img
                  src={PORTRAIT}
                  alt={`${name.first} ${name.last}`}
                  fetchPriority="high"
                  className="float-soft h-full w-full object-contain object-bottom drop-shadow-[0_20px_30px_rgb(4_32_63/0.35)]"
                />
              </div>
            </div>

            {/* Scribbles */}
            <svg aria-hidden="true" viewBox="0 0 80 80" className="absolute bottom-[14%] right-[2%] h-16 w-16 text-navy">
              <path d="M10 70 L40 20 M24 72 L58 14 M40 74 L70 26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="draw" style={delay(1800)} />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 60 60" className="anim-pop absolute left-[8%] top-[6%] h-10 w-10 text-sun" style={delay(1900)}>
              <path d="M30 4 L34 26 L56 30 L34 34 L30 56 L26 34 L4 30 L26 26 Z" fill="currentColor" className="twinkle-star" />
            </svg>

            {/* Floating tech chips */}
            {[
              { label: 'Flutter', pos: 'right-[-2%] top-[22%]', d: 46, t: 2000 },
              { label: 'Dart', pos: 'left-[-4%] bottom-[18%]', d: 40, t: 2150 },
              { label: 'BLoC', pos: 'right-[6%] bottom-[2%]', d: 52, t: 2300 },
            ].map((c, i) => (
              <div key={c.label} className={`depth absolute z-20 ${c.pos}`} style={depth(c.d)}>
                <span className="anim-pop block" style={delay(c.t)}>
                  <span
                    className="float flex items-center gap-1.5 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-bold text-navy shadow-float backdrop-blur-md"
                    style={{ animationDelay: `${i * -1.4}s` }}
                  >
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sky" />
                    {c.label}
                  </span>
                </span>
              </div>
            ))}

            {/* Spinning scroll badge */}
            <div className="depth absolute left-[1%] top-[36%] z-20 sm:left-[-10%]" style={depth(24)}>
              <SpinBadge />
            </div>
          </div>

          {/* Socials + skills panel */}
          <div className="relative z-20 -mt-2">
            <div className="anim-fade-up flex items-center justify-center gap-3 text-xs font-bold text-navy" style={delay(2000)}>
              Check and follow me
              <span aria-hidden="true" className="anim-line inline-block h-px w-10 bg-navy/40" style={delay(2100)} />
              {[
                { href: contact.githubHref, label: 'GitHub', icon: <GitHubMark size={14} />, ext: true },
                { href: `mailto:${contact.email}`, label: 'Email', icon: <Mail size={14} strokeWidth={2.2} /> },
                { href: contact.phoneHref, label: 'Phone', icon: <Phone size={14} strokeWidth={2.2} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  data-magnetic
                  {...(s.ext && { target: '_blank', rel: 'noreferrer' })}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 hover:bg-sky"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="anim-pop relative mx-auto mt-5 max-w-sm rounded-2xl bg-navy-ink p-3 shadow-lift" style={delay(2150)}>
              <button
                type="button"
                aria-label="See all skills"
                onClick={(e) => {
                  pop(e.currentTarget, 'kachi')
                  window.setTimeout(() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' }), 250)
                }}
                className="absolute -left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-navy-ink bg-sun text-navy-ink shadow-float transition-transform duration-500 hover:rotate-90 hover:scale-110"
              >
                <Plus aria-hidden="true" size={18} strokeWidth={3} />
              </button>
              <ul className="grid grid-cols-3 gap-2">
                {chips.map((chip, i) => (
                  <li
                    key={chip}
                    className="anim-pop rounded-lg bg-white/10 px-2 py-2 text-center text-[11px] font-bold text-white transition-colors duration-300 hover:bg-sky"
                    style={delay(2300 + i * 70)}
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
