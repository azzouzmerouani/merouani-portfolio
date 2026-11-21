import type { ReactNode } from 'react'
import { Reveal, SplitText } from './Reveal'

export type Tone = 'light' | 'mist' | 'navy'

type SectionProps = {
  id: string
  tone?: Tone
  className?: string
  children: ReactNode
}

// Every section picks a tone; components inside use the semantic colours
// (heading, body, muted, line, surface, chip) so they adapt automatically.
export function Section({ id, tone = 'light', className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`tone-${tone} relative bg-canvas px-5 pb-24 pt-28 text-body sm:px-10 sm:pb-32 sm:pt-52 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

type HeaderProps = {
  id?: string
  index?: string
  title: string
  aside?: string
  as?: 'h2' | 'h3'
  className?: string
}

// A sky index chip and a muted note, then the big bold title (volz.app's section headings).
export function SectionHeader({ id, index, title, aside, as: Heading = 'h2', className = '' }: HeaderProps) {
  const big = Heading === 'h2'
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
      {(index || aside) && (
        <Reveal className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
          {index && <span className="rounded-full bg-sky/15 px-2.5 py-1 text-sky">{index}</span>}
          {aside && <span className="text-muted">{aside}</span>}
        </Reveal>
      )}
      <Heading
          id={id}
          className={`mt-4 font-bold leading-[1.05] text-heading ${
            big ? 'text-[clamp(2.25rem,5vw,3.75rem)] tracking-[-0.03em]' : 'text-[clamp(1.6rem,3vw,2.25rem)] tracking-[-0.025em]'
          }`}
        >
          <SplitText text={title} />
        </Heading>
    </div>
  )
}

// Small rounded label, e.g. a date or a tech-stack item.
export function Chip({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        accent ? 'bg-sky text-white' : 'bg-chip text-heading'
      }`}
    >
      {children}
    </span>
  )
}
