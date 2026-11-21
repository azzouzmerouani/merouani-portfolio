import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
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

// Splits text into letters that flip up one after another when scrolled into view.
export function SplitText({ text, className = '' }: { text: string; className?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>()
  let i = 0
  return (
    <span ref={ref} aria-label={text} className={`${inView ? 'is-visible' : ''} ${className}`}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden="true">
          <span className="split-word">
            {[...word].map((ch) => (
              <span key={i} className="split-char" style={{ '--i': i++ } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
          {' '}
        </span>
      ))}
    </span>
  )
}

// Counts up from zero once visible, keeping leading zeros ("06").
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const [ref, inView] = useInView<HTMLSpanElement>()
  const target = Number.parseInt(value, 10)
  const [n, setN] = useState(0)
  const calm = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  useEffect(() => {
    if (!inView || Number.isNaN(target)) return
    if (calm) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(target * (1 - Math.pow(1 - p, 4))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, calm])
  if (Number.isNaN(target)) return <span>{value}</span>
  return <span ref={ref}>{String(calm ? target : n).padStart(value.length, '0')}</span>
}
