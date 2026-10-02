import type { CSSProperties } from 'react'

type Props = {
  open: boolean
  onToggle: () => void
  className?: string
  style?: CSSProperties
}

const BAR = 'absolute left-0 top-1/2 -mt-px h-0.5 w-full bg-current motion-reduce:transition-none'
const EASE = 'ease-[cubic-bezier(0.76,0,0.24,1)]'

// Three bars that fold into an X.
export default function MenuButton({ open, onToggle, className = '', style }: Props) {
  return (
    <button
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className={`relative z-50 flex h-10 w-10 items-center justify-center sm:hidden ${className}`}
      style={style}
    >
      <span className="relative h-4 w-6">
        <span
          className={`${BAR} transition-transform duration-500 ${EASE}`}
          style={{ transform: open ? 'translateY(0) rotate(45deg)' : 'translateY(-7px) rotate(0)' }}
        />
        <span className={`${BAR} transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
        <span
          className={`${BAR} transition-transform duration-500 ${EASE}`}
          style={{ transform: open ? 'translateY(0) rotate(-45deg)' : 'translateY(7px) rotate(0)' }}
        />
      </span>
    </button>
  )
}
