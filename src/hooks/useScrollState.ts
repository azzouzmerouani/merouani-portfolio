import { useEffect, useState } from 'react'

// Whether the hero has scrolled away, and which section sits under the upper third of the viewport.
export function useScrollState(heroId: string, sectionIds: string[]) {
  const [pastHero, setPastHero] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const key = sectionIds.join(',')

  useEffect(() => {
    const ids = key.split(',')
    let frame = 0

    const update = () => {
      frame = 0
      const hero = document.getElementById(heroId)
      if (hero) setPastHero(hero.getBoundingClientRect().bottom <= 80)

      const line = window.innerHeight * 0.35
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [heroId, key])

  return { pastHero, active }
}
