import { useEffect, useRef, type CSSProperties } from 'react'
import { X } from 'lucide-react'
import { siteIndex, social } from '../content'

type Props = {
  open: boolean
  onClose: () => void
}

const EASE_DRAWER = 'ease-[cubic-bezier(0.76,0,0.24,1)]'
const EASE_REVEAL = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

export default function MobileMenu({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    // Either the hero or the sticky bar can open the drawer; hand focus back to whichever did.
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus({ preventScroll: true })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      opener?.focus({ preventScroll: true })
    }
  }, [open, onClose])

  // Stagger only on the way in; everything leaves together.
  const reveal = (ms: number): CSSProperties => ({
    transitionDelay: open ? `${ms}ms` : '0ms',
  })

  const shown = open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'

  return (
    <div className="sm:hidden">
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 motion-reduce:transition-none ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-40 flex w-[80%] max-w-sm flex-col bg-[#141414] px-8 py-10 font-hn text-cream transition-transform duration-[600ms] motion-reduce:transition-none ${EASE_DRAWER} ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          style={reveal(300)}
          className={`absolute right-6 top-6 transition-[transform,opacity] duration-500 motion-reduce:transition-none ${EASE_DRAWER} ${
            open ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          }`}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <nav aria-label="Site index" className="mt-16">
          <p
            style={reveal(250)}
            className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition duration-700 motion-reduce:transition-none ${EASE_REVEAL} ${shown}`}
          >
            Site Index
          </p>
          <ul className="mt-6 flex flex-col gap-1.5">
            {siteIndex.map((link, i) => (
              <li
                key={link.label}
                style={reveal(300 + i * 80)}
                className={`text-4xl transition duration-700 motion-reduce:transition-none ${EASE_REVEAL} ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <a href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <p
            style={reveal(500)}
            className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition duration-700 motion-reduce:transition-none ${EASE_REVEAL} ${shown}`}
          >
            Find Me
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {social.map((link, i) => (
              <li
                key={link.label}
                style={reveal(550 + i * 60)}
                className={`transition duration-700 motion-reduce:transition-none ${EASE_REVEAL} ${shown}`}
              >
                <a
                  href={link.href}
                  {...(link.external && { target: '_blank', rel: 'noreferrer' })}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
