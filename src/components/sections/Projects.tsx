import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../../content'
import { Reveal } from '../Reveal'
import { Section, SectionHeader } from '../Section'

function Row({ project, index }: { project: Project; index: number }) {
  const body = (
    <>
      <span className="w-8 shrink-0 text-xs text-ink/50 sm:w-16 sm:text-sm">
        {String(index + 1).padStart(2, '0')}
      </span>
      {project.logo && (
        <img
          src={project.logo}
          alt=""
          width={512}
          height={512}
          loading="lazy"
          className="h-10 w-10 shrink-0 self-center rounded-xl object-cover sm:h-16 sm:w-16 md:h-20 md:w-20"
        />
      )}
      <span className="min-w-0 flex-1">
        <span className="block text-[clamp(2.25rem,8.5vw,8.5rem)] leading-[0.95] tracking-[-0.03em] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover/row:translate-x-4">
          {project.name}
        </span>
        {project.description && (
          <span className="mt-3 block max-w-md text-sm leading-relaxed text-ink/60">{project.description}</span>
        )}
      </span>
      {project.href && (
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={1.25}
          className="h-8 w-8 shrink-0 self-center transition-transform duration-500 group-hover/row:rotate-45 sm:h-14 sm:w-14"
        />
      )}
    </>
  )

  const rowClass =
    'group/row flex items-baseline gap-4 border-b border-ink/15 py-4 transition-opacity duration-500 sm:gap-10 sm:py-6 md:group-hover/list:opacity-25 md:hover:!opacity-100'

  return project.href ? (
    <a href={project.href} target="_blank" rel="noreferrer" className={rowClass}>
      {body}
    </a>
  ) : (
    <div className={rowClass}>{body}</div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" tone="light">
      <SectionHeader
        id="projects-title"
        index="03"
        title="Selected Projects"
        aside={`${String(projects.length).padStart(2, '0')} apps`}
      />

      <ol className="group/list">
        {projects.map((project, i) => (
          <li key={project.name}>
            <Reveal delay={i * 70}>
              <Row project={project} index={i} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
