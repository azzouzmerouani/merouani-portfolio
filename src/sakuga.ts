// Bridge to Sakuga VFX (public/sakuga-vfx/button.js, MIT, github.com/finktheartist/sakuga-vfx).
// The script defines <sakuga-button> and window.SakugaFX, the shared effects canvas we reuse for card impacts.
import type { DetailedHTMLProps, HTMLAttributes as Attrs } from 'react'

type Fx = {
  P: { fill: string; shade: string; line: string; accent: string; ink: string; sfx: string[] }
  calm: boolean
  at: (el: Element, fx?: number, fy?: number) => { x: number; y: number; w: number; h: number }
  rnd: (a: number, b?: number) => number
  burst: (x: number, y: number, o?: Record<string, unknown>) => void
  shards: (x: number, y: number, o?: Record<string, unknown>) => void
  puff: (x: number, y: number, o?: Record<string, unknown>) => void
  slash: (x: number, y: number, o?: Record<string, unknown>) => void
  ticks: (x: number, y: number, o?: Record<string, unknown>) => void
  kira: (x: number, y: number, o?: Record<string, unknown>) => void
  donut: (x: number, y: number, o?: Record<string, unknown>) => void
  sfx: (word: SfxWord, x: number, y: number, o?: Record<string, unknown>) => void
}
export type SfxWord = 'don' | 'gogo' | 'kachi' | 'pon' | 'shu' | 'zuza'

declare global {
  interface Window {
    SakugaFX?: Fx
  }
}
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sakuga-button': DetailedHTMLProps<Attrs<HTMLElement>, HTMLElement> & { variant?: 'secondary'; class?: string }
    }
  }
}

let themed = false
function fx(): Fx | undefined {
  const f = window.SakugaFX
  if (f && !themed) {
    // Recolour the drawn effects from lavender/pink to the site's navy and sky.
    Object.assign(f.P, { fill: '#ffffff', shade: '#8ccaf2', line: '#074183', accent: '#00b2ff', ink: '#04203f' })
    f.P.sfx = ['#04203f', '#ffffff']
    themed = true
  }
  return f
}

// A full anime impact on an element: burst, crystals, smoke, a slash and a sound-effect word.
export function impact(el: Element, word: SfxWord = 'don') {
  const f = fx()
  if (!f || f.calm) return
  const c = f.at(el)
  f.burst(c.x, c.y, { r: Math.min(140, c.w * 0.45), spikes: 19, life: 0.5 })
  f.shards(c.x, c.y, { n: 14, speed: 320, size: 10, life: 1, arc: 6.28, grav: 320 })
  for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    f.puff(c.x + dx * (c.w / 2), c.y + dy * (c.h / 2.4), { size: f.rnd(14, 19), n: 5, vx: dx * 60, vy: dy * 36 - 8, life: f.rnd(0.8, 1.1) })
  }
  f.slash(c.x, c.y, { len: c.w * 1.1, ang: -0.55, life: 0.42, thick: 16 })
  f.sfx(word, c.x + c.w * 0.18, c.y - c.h * 0.42, { size: Math.min(190, c.w * 0.75), rot: -0.14, life: 1.05 })
}

// A small pop for lighter clicks.
export function pop(el: Element, word: SfxWord = 'pon') {
  const f = fx()
  if (!f || f.calm) return
  const c = f.at(el)
  f.ticks(c.x + c.w / 2, c.y - c.h / 2, { dir: -0.9, n: 3, r: 8, len: 16 })
  f.puff(c.x - c.w / 2, c.y, { size: 12, n: 4, vx: -40, vy: -10 })
  f.puff(c.x + c.w / 2, c.y, { size: 12, n: 4, vx: 40, vy: -10 })
  f.kira(c.x + c.w / 2 - 8, c.y - c.h / 2, { r: 14, life: 0.8 })
  f.sfx(word, c.x, c.y - c.h - 20, { size: 110, rot: -0.1, life: 0.9, col: '#ffffff', edge: '#074183' })
}

export const prefersCalm = () => !window.SakugaFX || window.SakugaFX.calm
