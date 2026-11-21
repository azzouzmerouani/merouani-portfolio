import { Database, Layers, Smartphone, Workflow, type LucideIcon } from 'lucide-react'
import { expertise } from '../../content'
import { Reveal } from '../Reveal'
import { Section, SectionHeader } from '../Section'

// One icon per skill group, in content order.
const groupIcons: LucideIcon[] = [Layers, Workflow, Database, Smartphone]

function Ticker() {
  return (
    <div aria-hidden="true" className="-mx-5 mt-20 overflow-hidden border-y border-white/15 py-5 sm:-mx-10 sm:mt-28 sm:py-6">
      <div
        className="marquee flex w-max whitespace-nowrap text-[clamp(1.9rem,5vw,4.25rem)] font-black leading-none tracking-[-0.03em] text-white"
        style={{ animationDuration: '60s', animationDirection: 'reverse' }}
      >
        {[0, 1].map((copy) => (
          <span key={copy} className="flex items-center">
            {expertise.ticker.map((item) => (
              <span key={item} className="flex items-center">
                {item}
                <span className="mx-[0.45em] text-sky">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Expertise() {
  return (
    <Section id="expertise" tone="navy" className="overflow-hidden">
      <div aria-hidden="true" className="blob -left-20 top-10 h-80 w-80 bg-sky/30" />
      <div aria-hidden="true" className="blob -right-24 top-1/3 h-96 w-96 bg-[#5b6cff]/25 [animation-delay:-6s]" />
      <div aria-hidden="true" className="blob bottom-0 left-1/3 h-72 w-72 bg-sun/15 [animation-delay:-12s]" />
      <SectionHeader id="expertise-title" index="04" title="Expertise" aside="Flutter & Dart" />

      <Reveal>
        <p className="max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold leading-[1.18] tracking-[-0.02em] text-heading">
          {expertise.statement}
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {expertise.groups.map((group, i) => {
          const Icon = groupIcons[i % groupIcons.length]
          return (
            <Reveal key={group.title} delay={i * 90}>
              <div data-tilt className="spotlight h-full rounded-card border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm">
                <span className="float flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-white shadow-[0_0_24px_rgb(0_178_255/0.6)]">
                  <Icon aria-hidden="true" size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-muted">{group.title}</h3>
                <ul className="mt-3 space-y-1.5 text-lg font-bold leading-snug text-white">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Ticker />
    </Section>
  )
}
