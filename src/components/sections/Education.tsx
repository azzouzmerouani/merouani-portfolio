import { education, languages } from '../../content'
import { Reveal } from '../Reveal'
import { Section, SectionHeader } from '../Section'

export default function Education() {
  return (
    <Section id="education" tone="light">
      <SectionHeader
        id="education-title"
        index="05"
        title="Education"
        aside="Computer Science — Cyber Security"
      />

      <ol>
        {education.map((entry, i) => (
          <li key={entry.program}>
            <Reveal delay={i * 70}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-ink/15 py-8 sm:py-10">
                <p className="col-span-12 flex items-center gap-3 self-start text-sm md:col-span-3 md:pt-3">
                  {entry.current && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink" />}
                  <span className="text-ink/60">
                    {entry.level}
                    {entry.current && ' — In progress'}
                  </span>
                </p>
                <h3 className="col-span-12 text-[clamp(1.85rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-0.015em] md:col-span-6">
                  {entry.program}
                </h3>
                <div className="col-span-12 flex items-center gap-3 text-sm text-ink/60 md:col-span-3 md:justify-end md:pt-1 md:text-right">
                  {entry.logo && (
                    <img
                      src={entry.logo}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                      className="h-14 w-auto shrink-0 rounded-xl bg-white object-contain p-1.5 sm:h-16 md:order-2"
                    />
                  )}
                  <p>{entry.school}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <SectionHeader id="languages-title" title="Languages" as="h3" className="mt-28 sm:mt-40" />

      <ul className="grid gap-y-12 sm:grid-cols-3 sm:gap-x-6">
        {languages.map((language, i) => (
          <li key={language.name}>
            <Reveal delay={i * 90}>
              <p className="text-[clamp(2.75rem,5.5vw,5rem)] leading-none tracking-[-0.025em]">{language.name}</p>
              <p className="mt-3 text-sm text-ink/60">{language.level}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
