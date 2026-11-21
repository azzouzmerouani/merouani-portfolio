import { profile } from '../../content'
import { Reveal, CountUp } from '../Reveal'
import { Section, SectionHeader } from '../Section'

// The gradients of volz.app's promo cards: navy, copper, sky and deep blue.
const statGradients = [
  'bg-[linear-gradient(160deg,#1b3fa8_0%,#0a2470_100%)]',
  'bg-[linear-gradient(160deg,#d08a4c_0%,#7a3f17_100%)]',
  'bg-[linear-gradient(160deg,#39b3f2_0%,#0b67bd_100%)]',
  'bg-[linear-gradient(160deg,#0d4f8f_0%,#04203f_100%)]',
]

export default function Profile() {
  return (
    <Section id="profile">
      <SectionHeader id="profile-title" index="01" title="Profile" aside="Since 2021" />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <p className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold leading-[1.18] tracking-[-0.02em] text-heading">
            {profile.statement}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:col-span-5">
          {profile.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 120}>
              <p className="text-base leading-relaxed text-body/80 sm:text-[17px]">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-3 sm:mt-24 sm:gap-5 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div
              data-tilt
              className={`spotlight relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-card p-5 text-white shadow-card sm:aspect-[5/6] sm:p-6 ${
                statGradients[i % statGradients.length]
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-4 select-none text-[9rem] font-black leading-none tracking-[-0.06em] text-white/10 sm:text-[11rem]"
              >
                {stat.value}
              </span>
              <dd className="relative text-[clamp(2.4rem,5vw,3.75rem)] font-black leading-none tracking-[-0.03em]">
                <CountUp value={stat.value} />
              </dd>
              <dt className="relative mt-2 text-sm font-medium leading-snug text-white/80">{stat.label}</dt>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
