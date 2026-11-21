import type { MouseEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { impact } from '../../sakuga'
import { projects, type Project } from '../../content'
import { Reveal } from '../Reveal'
import { Section, SectionHeader } from '../Section'

// Tall gradient tiles in the spirit of volz.app's "Top trips" cards.
const tileGradients = [
  'bg-[linear-gradient(165deg,#3aa8ec_0%,#074183_100%)]',
  'bg-[linear-gradient(165deg,#f5a623_0%,#8a4a1e_100%)]',
  'bg-[linear-gradient(165deg,#1b3fa8_0%,#04203f_100%)]',
  'bg-[linear-gradient(165deg,#3cc6c0_0%,#0d4f6f_100%)]',
  'bg-[linear-gradient(165deg,#7f8cff_0%,#1f2a7a_100%)]',
  'bg-[linear-gradient(165deg,#00b2ff_0%,#0a2470_100%)]',
]

// Play the anime impact on the tile, then open the store page once it has landed.
function openWithImpact(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
  if (!window.SakugaFX || window.SakugaFX.calm) return
  e.preventDefault()
  impact(e.currentTarget, 'don')
  window.setTimeout(() => window.open(href, '_blank', 'noopener'), 420)
}

function Tile({ project, index }: { project: Project; index: number }) {
  const body = (
    <>
      <span className="absolute left-5 top-5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md">
        {String(index + 1).padStart(2, '0')}
      </span>
      {project.href && (
        <span className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2} />
        </span>
      )}

      {project.logo && (
        <img
          src={project.logo}
          alt=""
          width={512}
          height={512}
          loading="lazy"
          className="absolute left-1/2 top-[40%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] object-cover shadow-lift transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:h-28 sm:w-28"
        />
      )}

      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent p-5 pt-16 sm:p-6 sm:pt-20">
        <span className="block text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold leading-tight tracking-[-0.02em] text-white">
          {project.name}
        </span>
        {project.description && (
          <span className="mt-1 block text-sm font-medium leading-snug text-white/80">{project.description}</span>
        )}
      </span>
    </>
  )

  const tileClass = `spotlight shine group relative block aspect-[4/5] overflow-hidden rounded-card shadow-card hover:shadow-lift ${
    tileGradients[index % tileGradients.length]
  }`

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      data-tilt
      onClick={(e) => openWithImpact(e, project.href!)}
      aria-label={`${project.name} — open in the app store`}
      className={tileClass}
    >
      {body}
    </a>
  ) : (
    <div className={tileClass}>{body}</div>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        id="projects-title"
        index="03"
        title="Selected Projects"
        aside={`${String(projects.length).padStart(2, '0')} apps`}
      />

      <ol className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.name}>
            <Reveal delay={(i % 3) * 90}>
              <Tile project={project} index={i} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
