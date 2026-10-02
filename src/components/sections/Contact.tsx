import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { contact, name, year } from '../../content'
import { Reveal, RevealLine, RevealMask } from '../Reveal'
import { Hangers } from '../Hangers'
import { SectionHeader } from '../Section'

const details = [
  { label: 'Phone', value: contact.phone, href: contact.phoneHref },
  { label: 'GitHub', value: contact.github, href: contact.githubHref, external: true },
  { label: 'Location', value: `${contact.location} — ${contact.timezone}` },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-black px-6 pt-28 text-cream sm:px-10 sm:pt-52"
    >
      <Hangers id="contact" />
      <SectionHeader id="contact-title" index="06" title="Contact" aside={contact.location} />

      <p className="text-[clamp(4rem,15vw,15rem)] leading-[0.88] tracking-[-0.045em]">
        <RevealMask>Let&rsquo;s talk.</RevealMask>
      </p>

      <Reveal delay={150} className="mt-10 sm:mt-14">
        <a
          href={`mailto:${contact.email}`}
          className="group relative inline-flex items-center gap-3 pb-2 text-[clamp(1.4rem,4.6vw,4.25rem)] leading-tight tracking-[-0.02em] sm:gap-5"
        >
          {contact.email}
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={1.25}
            className="h-[0.8em] w-[0.8em] shrink-0 transition-transform duration-500 group-hover:rotate-45"
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:origin-right group-hover:scale-x-0"
          />
        </a>
      </Reveal>

      <dl className="mt-20 grid gap-x-6 gap-y-10 sm:mt-28 sm:grid-cols-3">
        {details.map((item, i) => (
          <Reveal key={item.label} delay={i * 90} className="border-t border-cream/20 pt-5">
            <dt className="text-xs uppercase tracking-[0.2em] text-cream/50">{item.label}</dt>
            <dd className="mt-4 text-lg sm:text-xl">
              {item.href ? (
                <a
                  href={item.href}
                  className="transition-opacity duration-300 hover:opacity-60"
                  {...(item.external && { target: '_blank', rel: 'noreferrer' })}
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </Reveal>
        ))}
      </dl>

      <footer className="relative mt-28 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-xs sm:mt-40 sm:text-sm">
        <div className="absolute inset-x-0 top-0 opacity-25">
          <RevealLine className="h-px bg-current" />
        </div>
        <p className="text-cream/60">
          &copy; {year} {name.first} {name.last}
        </p>
        <a href="#top" className="group inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-60">
          Back to top
          <ArrowUp aria-hidden="true" size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-translate-y-1" />
        </a>
      </footer>

      <div aria-hidden="true" className="-mx-6 overflow-hidden pb-6 sm:-mx-10 sm:pb-10">
        <div
          className="marquee flex w-max whitespace-nowrap text-[22vw] leading-[0.82] tracking-[-0.04em]"
          style={{ animationDuration: '45s' }}
        >
          <span className="pr-[6vw]">
            {name.first} &mdash; {name.last}&nbsp;
          </span>
          <span className="pr-[6vw]">
            {name.first} &mdash; {name.last}&nbsp;
          </span>
        </div>
      </div>
    </section>
  )
}
