import { experience } from '../../content'
import { Reveal } from '../Reveal'
import { Section, SectionHeader } from '../Section'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader id="experience-title" index="02" title="Experience" aside="2021 — Now" />

      <ol>
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal delay={i * 70}>
              <article className="group grid grid-cols-12 gap-x-6 gap-y-3 border-b border-cream/15 py-8 sm:py-10">
                <p className="col-span-12 flex items-center gap-3 self-start text-sm md:col-span-3 md:pt-3">
                  {job.current && (
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cream" />
                  )}
                  <span className="text-cream/60">{job.period}</span>
                </p>

                <div className="col-span-12 md:col-span-5">
                  <div className="flex items-center gap-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-x-3">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt=""
                        width={512}
                        height={512}
                        loading="lazy"
                        className="h-12 w-12 shrink-0 rounded-xl object-cover sm:h-14 sm:w-14"
                      />
                    )}
                    <h3 className="text-[clamp(1.85rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-0.015em]">
                      {job.company}
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-cream/60">{job.role}</p>
                </div>

                <p className="col-span-12 text-sm leading-relaxed text-cream/70 md:col-span-4 md:pt-3 md:text-right">
                  {job.stack.join(' / ')}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
