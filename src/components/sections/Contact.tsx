import { Mail, MapPin, Phone } from 'lucide-react'
import { prefersCalm } from '../../sakuga'
import { contact, name, year } from '../../content'
import { Reveal, RevealMask } from '../Reveal'
import { SectionHeader } from '../Section'

const details = [
  { label: 'Phone', value: contact.phone, href: contact.phoneHref, Icon: Phone },
  { label: 'GitHub', value: contact.github, href: contact.githubHref, external: true, Icon: null },
  { label: 'Location', value: `${contact.location} · ${contact.timezone}`, Icon: MapPin },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="tone-light relative overflow-x-clip bg-canvas px-5 pt-28 text-body sm:px-10 sm:pt-52"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader id="contact-title" index="06" title="Contact" aside={contact.location} />

        {/* Navy panel with the same sky gradient as the hero. */}
        <div className="tone-navy relative rounded-[2rem] bg-[linear-gradient(160deg,#0d4f8f_0%,#074183_45%,#04203f_100%)] p-7 text-body shadow-lift sm:p-12 lg:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <div className="blob -right-24 -top-24 h-80 w-80 bg-sky/40" />
            <div className="blob -bottom-24 -left-16 h-72 w-72 bg-[#5b6cff]/30 [animation-delay:-8s]" />
          </div>
          <p className="relative text-[clamp(3rem,10vw,8rem)] font-black leading-[0.95] tracking-[-0.045em] text-white">
            <RevealMask>
              <span className="text-shimmer">Let&rsquo;s talk.</span>
            </RevealMask>
          </p>

          <Reveal delay={150} className="relative mt-8 sm:mt-10">
            <sakuga-button
              class="cta"
              aria-label={`Email ${contact.email}`}
              onClick={(e) => {
                const done = e.currentTarget as HTMLElement & { done?: () => void }
                window.setTimeout(() => {
                  done.done?.()
                  window.location.href = `mailto:${contact.email}`
                }, prefersCalm() ? 0 : 520)
              }}
            >
              <Mail aria-hidden="true" size={20} strokeWidth={2.4} />
              <span className="max-w-[60vw] truncate">{contact.email}</span>
            </sakuga-button>
          </Reveal>

          <dl className="relative mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
            {details.map((item, i) => (
              <Reveal key={item.label} delay={i * 90}>
                <div data-tilt className="spotlight h-full rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm">
                  <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    {item.Icon && <item.Icon aria-hidden="true" size={14} strokeWidth={2.2} />}
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-lg font-bold text-white [overflow-wrap:anywhere]">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="transition-colors duration-300 hover:text-sky"
                        {...(item.external && { target: '_blank', rel: 'noreferrer' })}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pb-6 pt-10 text-sm font-medium sm:pt-14">
          <p className="text-muted">
            &copy; {year} {name.first} {name.last} · Made in Algeria
          </p>
          <sakuga-button
            variant="secondary"
            class="quiet"
            onClick={() => window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), prefersCalm() ? 0 : 260)}
          >
            Back to top ↑
          </sakuga-button>
        </footer>
      </div>

      <div aria-hidden="true" className="-mx-5 overflow-hidden pb-4 sm:-mx-10 sm:pb-6">
        <div
          className="marquee flex w-max whitespace-nowrap text-[20vw] font-black leading-[0.85] tracking-[-0.05em] text-cloud"
          style={{ animationDuration: '45s' }}
        >
          <span className="pr-[6vw]">
            {name.first} {name.last}&nbsp;
          </span>
          <span className="pr-[6vw]">
            {name.first} {name.last}&nbsp;
          </span>
        </div>
      </div>
    </section>
  )
}
