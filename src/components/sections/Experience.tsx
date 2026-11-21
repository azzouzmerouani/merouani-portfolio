import { experience } from '../../content'
import { Reveal } from '../Reveal'
import { Chip, Section, SectionHeader } from '../Section'

export default function Experience() {
  return (
    <Section id="experience" tone="mist">
      <SectionHeader id="experience-title" index="02" title="Experience" aside="2021 — Now" />

      <ol className="grid gap-4 sm:gap-5">
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal delay={i * 70}>
              <article className="flex flex-col gap-5 spotlight rounded-card border border-line bg-surface p-5 shadow-card transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lift sm:p-7 md:flex-row md:items-center md:gap-8">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt=""
                      width={512}
                      height={512}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-2xl border border-line object-cover sm:h-16 sm:w-16"
                    />
                  )}
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.4rem,2.6vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-heading">
                      {job.company}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-muted sm:text-base">{job.role}</p>
                  </div>
                </div>

                <ul aria-label="Tech stack" className="flex flex-wrap gap-1.5 md:max-w-[22rem] md:justify-end">
                  {job.stack.map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>

                <p className="shrink-0 md:w-44 md:text-right">
                  <Chip accent={job.current}>
                    {job.current && <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-white" />}
                    {job.period}
                  </Chip>
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
