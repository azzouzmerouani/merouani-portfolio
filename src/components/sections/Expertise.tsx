import { expertise } from '../../content'
import { Reveal } from '../Reveal'
import { Section, SectionHeader } from '../Section'

function Ticker() {
  const line = expertise.ticker.join('  —  ') + '  —  '
  return (
    <div aria-hidden="true" className="-mx-6 mt-24 overflow-hidden border-y border-cream/15 py-5 sm:-mx-10 sm:mt-36 sm:py-7">
      <div
        className="marquee flex w-max whitespace-pre text-[clamp(2.25rem,6vw,5.5rem)] leading-none tracking-[-0.02em]"
        style={{ animationDuration: '60s', animationDirection: 'reverse' }}
      >
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}

export default function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeader id="expertise-title" index="04" title="Expertise" aside="Flutter & Dart" />

      <Reveal>
        <p className="max-w-[22ch] text-[clamp(1.85rem,4.4vw,4.25rem)] leading-[1.06] tracking-[-0.015em]">
          {expertise.statement}
        </p>
      </Reveal>

      <div className="mt-20 grid gap-x-6 gap-y-14 sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 90} className="border-t border-cream/20 pt-5">
            <h3 className="text-xs uppercase tracking-[0.2em] text-cream/50">{group.title}</h3>
            <ul className="mt-6 space-y-1.5 text-xl leading-snug sm:text-2xl">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Ticker />
    </Section>
  )
}
