// One global listener set drives every pointer/scroll effect:
// [data-tilt] 3D tilt, .spotlight cursor light, [data-magnetic] pull, [data-parallax] depth,
// plus --scroll (0–1) on <html> for the progress bar.
export function initFx() {
  const root = document.documentElement
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let frame = 0

  const onScroll = () => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      const max = root.scrollHeight - innerHeight
      root.style.setProperty('--scroll', String(max > 0 ? scrollY / max : 0))
      if (reduced) return
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.2
        const rect = el.parentElement!.getBoundingClientRect()
        const offset = rect.top + rect.height / 2 - innerHeight / 2
        el.style.setProperty('--py', `${(-offset * speed).toFixed(1)}px`)
      })
    })
  }

  const onMove = (e: PointerEvent) => {
    if (reduced || e.pointerType === 'touch') return
    const target = e.target as Element | null
    const spot = target?.closest<HTMLElement>('.spotlight')
    if (spot) {
      const r = spot.getBoundingClientRect()
      spot.style.setProperty('--mx', `${e.clientX - r.left}px`)
      spot.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    const hero = target?.closest<HTMLElement>('[data-hero]')
    if (hero) {
      const r = hero.getBoundingClientRect()
      hero.style.setProperty('--hx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
      hero.style.setProperty('--hy', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
    }
    const tilt = target?.closest<HTMLElement>('[data-tilt]')
    if (tilt) {
      const r = tilt.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      tilt.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`)
      tilt.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`)
    }
    const mag = target?.closest<HTMLElement>('[data-magnetic]')
    if (mag) {
      const r = mag.getBoundingClientRect()
      mag.style.setProperty('--tx', `${((e.clientX - r.left - r.width / 2) * 0.3).toFixed(1)}px`)
      mag.style.setProperty('--ty', `${((e.clientY - r.top - r.height / 2) * 0.4).toFixed(1)}px`)
    }
  }

  const onOut = (e: PointerEvent) => {
    const from = e.target as Element | null
    const to = e.relatedTarget as Node | null
    for (const sel of ['[data-tilt]', '[data-magnetic]']) {
      const el = from?.closest<HTMLElement>(sel)
      if (el && !(to && el.contains(to))) {
        ;['--rx', '--ry', '--tx', '--ty'].forEach((p) => el.style.removeProperty(p))
      }
    }
  }

  onScroll()
  addEventListener('scroll', onScroll, { passive: true })
  addEventListener('resize', onScroll)
  document.addEventListener('pointermove', onMove, { passive: true })
  document.addEventListener('pointerout', onOut)
  return () => {
    removeEventListener('scroll', onScroll)
    removeEventListener('resize', onScroll)
    document.removeEventListener('pointermove', onMove)
    document.removeEventListener('pointerout', onOut)
  }
}
