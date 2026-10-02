import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Props = {
  children?: ReactNode
  className?: string
  delay?: number
}

// Reveal owns opacity and transform, so never put opacity-* or translate-* classes on it —
// put them on a child instead or the reveal will override them.
export function Reveal({ children, className = '', delay = 0 }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// A hairline that draws itself from the left.
export function RevealLine({ className = '', delay = 0 }: Omit<Props, 'children'>) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`reveal-line ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    />
  )
}

// Text that rises out of a mask, for the big display lines.
export function RevealMask({ children, className = '', delay = 0 }: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>()
  return (
    <span ref={ref} className={`-mb-[0.12em] block overflow-hidden pb-[0.12em] ${className}`}>
      <span
        className={`reveal-mask block ${inView ? 'is-visible' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  )
}
