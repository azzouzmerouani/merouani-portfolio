import { education, languages } from '../../content'
import { Reveal } from '../Reveal'
import { Chip, Section, SectionHeader } from '../Section'

export default function Education() {
  return (
    <Section id="education" tone="mist">
      <SectionHeader
        id="education-title"
        index="05"
        title="Education"
        aside="Computer Science — Cyber Security"
      />

      <ol className="grid gap-4 sm:gap-5">
        {education.map((entry, i) => (
          <li key={entry.program}>
            <Reveal delay={i * 70}>
              <div className="flex flex-col gap-4 spotlight rounded-card border border-line bg-surface p-5 shadow-card sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                {entry.logo && (
                  <img
                    src={entry.logo}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                    className="h-16 w-16 shrink-0 rounded-2xl border border-line bg-white object-contain p-1.5"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[clamp(1.35rem,2.4vw,1.85rem)] font-bold leading-tight tracking-[-0.02em] text-heading">
                    {entry.program}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted sm:text-base">{entry.school}</p>
                </div>
                <p className="shrink-0">
                  <Chip accent={entry.current}>
                    {entry.current && <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-white" />}
                    {entry.level}
                    {entry.current && ' · In progress'}
                  </Chip>
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <SectionHeader id="languages-title" title="Languages" as="h3" className="mt-20 sm:mt-28" />

      <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        {languages.map((language, i) => (
          <li key={language.name}>
            <Reveal delay={i * 90}>
              <div className="flex items-center justify-between gap-4 spotlight rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
                <p className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-none tracking-[-0.02em] text-heading">
                  {language.name}
                </p>
                <Chip accent={language.level === 'Native'}>{language.level}</Chip>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
