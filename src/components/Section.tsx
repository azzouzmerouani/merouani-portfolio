import type { ReactNode } from 'react'
import { Hangers } from './Hangers'
import { Reveal, RevealLine } from './Reveal'

type SectionProps = {
  id: string
  tone?: 'dark' | 'light'
  className?: string
  children: ReactNode
}

export function Section({ id, tone = 'dark', className = '', children }: SectionProps) {
  const toneClass = tone === 'light' ? 'bg-cream text-ink' : 'bg-black text-cream'
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative px-6 pb-24 pt-28 sm:px-10 sm:pb-36 sm:pt-52 ${toneClass} ${className}`}
    >
      <Hangers id={id} />
      {children}
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

// "(01) Profile ........................ aside" with a hairline underneath.
export function SectionHeader({ id, index, title, aside, as: Heading = 'h2', className = '' }: HeaderProps) {
  return (
    <div className={`relative mb-14 flex items-baseline justify-between gap-6 pb-4 text-xs uppercase tracking-[0.2em] sm:mb-20 ${className}`}>
      <Reveal className="flex items-baseline gap-5">
        {index && <span className="opacity-50">({index})</span>}
        <Heading id={id}>{title}</Heading>
      </Reveal>
      {aside && (
        <Reveal delay={120} className="hidden text-right sm:block">
          <span className="opacity-50">{aside}</span>
        </Reveal>
      )}
      <div className="absolute inset-x-0 bottom-0 opacity-25">
        <RevealLine className="h-px bg-current" delay={150} />
      </div>
    </div>
  )
}
