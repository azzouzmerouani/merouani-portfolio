import type { CSSProperties } from 'react'

type Props = {
  open: boolean
  onToggle: () => void
  // "glass" for over the hero sky, "solid" for the white sticky bar.
  tone?: 'glass' | 'solid'
  className?: string
  style?: CSSProperties
}

const BAR = 'absolute left-0 top-1/2 -mt-px h-0.5 rounded-full bg-current motion-reduce:transition-none'
const EASE = 'ease-[cubic-bezier(0.76,0,0.24,1)]'

// A round button whose three bars fold into an X.
export default function MenuButton({ open, onToggle, tone = 'glass', className = '', style }: Props) {
  const toneClass = tone === 'glass' ? 'glass text-white' : 'bg-cloud text-navy'
  return (
    <button
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full ${toneClass} ${className}`}
      style={style}
    >
      <span className="relative h-4 w-5">
        <span
          className={`${BAR} w-full transition-transform duration-500 ${EASE}`}
          style={{ transform: open ? 'translateY(0) rotate(45deg)' : 'translateY(-6px) rotate(0)' }}
        />
        <span className={`${BAR} left-auto right-0 w-3/5 transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
        <span
          className={`${BAR} w-full transition-transform duration-500 ${EASE}`}
          style={{ transform: open ? 'translateY(0) rotate(-45deg)' : 'translateY(6px) rotate(0)' }}
        />
      </span>
    </button>
  )
}
