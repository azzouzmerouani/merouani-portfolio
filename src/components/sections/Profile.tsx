import { profile } from '../../content'
import { Reveal } from '../Reveal'
import { Section, SectionHeader } from '../Section'

export default function Profile() {
  return (
    <Section id="profile">
      <SectionHeader id="profile-title" index="01" title="Profile" aside="Since 2021" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <Reveal className="lg:col-span-11">
          <p className="text-[clamp(1.85rem,4.4vw,4.25rem)] leading-[1.06] tracking-[-0.015em]">
            {profile.statement}
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:col-span-7 lg:col-start-6 lg:mt-8">
          {profile.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 120}>
              <p className="text-base leading-relaxed text-cream/70 sm:text-[17px]">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <dl className="mt-24 grid grid-cols-2 gap-x-6 gap-y-14 sm:mt-36 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="flex flex-col-reverse justify-end border-t border-cream/20 pt-5">
            <dt className="mt-3 max-w-[16ch] text-sm leading-snug text-cream/60">{stat.label}</dt>
            <dd className="text-[clamp(3.25rem,8vw,7.5rem)] leading-none tracking-[-0.03em]">{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
