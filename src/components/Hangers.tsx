import { useId } from 'react'
import { useInView } from '../hooks/useInView'

// Mini chibi figures of popular male anime characters, drawn by hand as SVG (not official art),
// hung by rope from the top of each section, in a cluster above the section title.
type HairStyle = 'spiky' | 'swept' | 'wild' | 'bowl' | 'slick'
type Outfit = 'jersey' | 'gakuran' | 'hoodie' | 'tunic' | 'checker' | 'triangles' | 'bare' | 'plain' | 'tabard' | 'jacket'
type Extra = 'blindfold' | 'scarCheek' | 'scarForehead' | 'hanafuda' | 'earringsRed' | 'glasses' | 'eyebags' | 'neckphones' | 'boarMask'

type Character = {
  name: string
  hair: string
  hairStyle: HairStyle
  eyes: string
  skin: string
  outfit: Outfit
  top: string
  accent: string
  pants: string
  number?: string
  shorts?: boolean
  extras?: Extra[]
  smile: 'grin' | 'smirk' | 'calm'
}

const OUTLINE = '#1c1420'

export const characters: Record<string, Character> = {
  hinata: { name: 'Hinata (Haikyuu!!)', hair: '#ff8c1a', hairStyle: 'spiky', eyes: '#8b4a1c', skin: '#ffd9bd', outfit: 'jersey', top: '#1b1b1f', accent: '#ff7a1a', pants: '#1b1b1f', number: '10', smile: 'grin' },
  kageyama: { name: 'Kageyama (Haikyuu!!)', hair: '#15151f', hairStyle: 'bowl', eyes: '#2b4a9a', skin: '#f6d2b8', outfit: 'jersey', top: '#1b1b1f', accent: '#ff7a1a', pants: '#1b1b1f', number: '9', smile: 'calm' },
  tsukishima: { name: 'Tsukishima (Haikyuu!!)', hair: '#e9d27a', hairStyle: 'swept', eyes: '#c58a2b', skin: '#f6d2b8', outfit: 'jersey', top: '#1b1b1f', accent: '#ff7a1a', pants: '#1b1b1f', number: '11', extras: ['glasses', 'neckphones'], smile: 'calm' },
  gon: { name: 'Gon (Hunter x Hunter)', hair: '#151a15', hairStyle: 'spiky', eyes: '#c58a2b', skin: '#e9b98f', outfit: 'jacket', top: '#2f9e44', accent: '#f4d35e', pants: '#2f9e44', shorts: true, smile: 'grin' },
  killua: { name: 'Killua (Hunter x Hunter)', hair: '#f1f5f9', hairStyle: 'wild', eyes: '#38bdf8', skin: '#f6d2b8', outfit: 'plain', top: '#e5e7eb', accent: '#6d28d9', pants: '#3f3f5a', smile: 'smirk' },
  kurapika: { name: 'Kurapika (Hunter x Hunter)', hair: '#f0d878', hairStyle: 'bowl', eyes: '#6b4a2a', skin: '#f9d5bd', outfit: 'tabard', top: '#2563eb', accent: '#f4c542', pants: '#1f2937', extras: ['earringsRed'], smile: 'calm' },
  light: { name: 'Light Yagami (Death Note)', hair: '#7a4a24', hairStyle: 'swept', eyes: '#e0912a', skin: '#f6d2b8', outfit: 'plain', top: '#f8fafc', accent: '#cbd5e1', pants: '#1f2937', smile: 'smirk' },
  l: { name: 'L (Death Note)', hair: '#101018', hairStyle: 'wild', eyes: '#111111', skin: '#f6d9c4', outfit: 'plain', top: '#f1f5f9', accent: '#94a3b8', pants: '#3b5a8a', extras: ['eyebags'], smile: 'calm' },
  thorfinn: { name: 'Thorfinn (Vinland Saga)', hair: '#e3c565', hairStyle: 'slick', eyes: '#4b5563', skin: '#e9b98f', outfit: 'tunic', top: '#7c5a3a', accent: '#d6b88a', pants: '#4a3a2a', extras: ['scarCheek'], smile: 'calm' },
  gojo: { name: 'Satoru Gojo (Jujutsu Kaisen)', hair: '#f8fafc', hairStyle: 'wild', eyes: '#38bdf8', skin: '#fde0cc', outfit: 'gakuran', top: '#14141c', accent: '#94a3b8', pants: '#14141c', extras: ['blindfold'], smile: 'smirk' },
  itadori: { name: 'Yuji Itadori (Jujutsu Kaisen)', hair: '#f08a8a', hairStyle: 'spiky', eyes: '#a05a2a', skin: '#ffd9bd', outfit: 'hoodie', top: '#1e2a4a', accent: '#d62839', pants: '#1e2a4a', smile: 'grin' },
  fushiguro: { name: 'Megumi Fushiguro (Jujutsu Kaisen)', hair: '#14141c', hairStyle: 'wild', eyes: '#1f6a5a', skin: '#f3cfb5', outfit: 'gakuran', top: '#1e2a4a', accent: '#d1d5db', pants: '#1e2a4a', smile: 'calm' },
  tanjiro: { name: 'Tanjiro (Demon Slayer)', hair: '#5a1f22', hairStyle: 'spiky', eyes: '#a8322d', skin: '#f6d2b8', outfit: 'checker', top: '#1f6b43', accent: '#111111', pants: '#1a1a22', extras: ['scarForehead', 'hanafuda'], smile: 'calm' },
  zenitsu: { name: 'Zenitsu (Demon Slayer)', hair: '#f5c518', hairStyle: 'swept', eyes: '#d98a1c', skin: '#ffdcc2', outfit: 'triangles', top: '#f5c518', accent: '#e8841a', pants: '#4a4a55', smile: 'grin' },
  inosuke: { name: 'Inosuke (Demon Slayer)', hair: '#2a2a35', hairStyle: 'bowl', eyes: '#111111', skin: '#e0ac84', outfit: 'bare', top: '#e0ac84', accent: '#b8b8c0', pants: '#4a5a78', extras: ['boarMask'], smile: 'grin' },
}

const BACK_HAIR: Record<HairStyle, string> = {
  spiky: 'M31 60 L25 40 L36 43 L36 22 L48 32 L58 10 L68 32 L82 18 L84 43 L95 38 L89 62 Q60 38 31 60Z',
  swept: 'M30 62 C26 24 94 20 90 62 C86 44 34 44 30 62Z',
  wild: 'M30 62 L20 46 L33 46 L24 28 L40 36 L40 14 L53 30 L62 6 L70 30 L86 12 L84 36 L100 30 L90 48 L100 56 L90 62 Q60 40 30 62Z',
  bowl: 'M29 70 C22 24 98 24 91 70 L84 52 Q60 40 36 52Z',
  slick: 'M31 60 C28 26 92 22 89 60 C84 46 36 46 31 60Z',
}

const FRONT_HAIR: Record<HairStyle, string> = {
  spiky: 'M33 58 C33 30 87 30 87 58 L83 44 L77 58 L70 42 L62 57 L55 42 L47 58 L41 44Z',
  swept: 'M33 60 C30 28 90 24 87 56 C80 46 68 38 50 45 C42 49 37 54 35 62Z',
  wild: 'M32 60 C30 30 90 30 88 60 L84 42 L78 58 L72 38 L64 56 L57 36 L50 57 L43 40 L38 58Z',
  bowl: 'M32 62 C30 30 90 30 88 62 L84 50 L74 52 L66 46 L56 52 L46 46 L38 52Z',
  slick: 'M33 58 C33 30 87 30 87 58 C84 46 70 36 60 36 C50 36 36 46 33 58Z',
}

const has = (c: Character, e: Extra) => c.extras?.includes(e)

function BoarHead({ c }: { c: Character }) {
  return (
    <g>
      <path d="M30 58 L22 34 L42 40Z M90 58 L98 34 L78 40Z" fill="#5d6c8a" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M26 62 C20 70 22 86 30 92 L34 70Z M94 62 C100 70 98 86 90 92 L86 70Z" fill={c.hair} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="60" cy="58" rx="29" ry="29" fill="#7d8fb3" stroke={OUTLINE} strokeWidth="2" />
      <path d="M40 40 Q60 28 80 40" fill="none" stroke="#5d6c8a" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="47" cy="56" rx="6.5" ry="5" fill="#fff" stroke={OUTLINE} strokeWidth="1.6" />
      <ellipse cx="73" cy="56" rx="6.5" ry="5" fill="#fff" stroke={OUTLINE} strokeWidth="1.6" />
      <ellipse cx="47" cy="56.5" rx="2.4" ry="3.4" fill={OUTLINE} />
      <ellipse cx="73" cy="56.5" rx="2.4" ry="3.4" fill={OUTLINE} />
      <path d="M41 49 L54 53 M79 49 L66 53" stroke={OUTLINE} strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="60" cy="74" rx="14" ry="10" fill="#aab6d0" stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="55" cy="74" rx="2" ry="3" fill={OUTLINE} />
      <ellipse cx="65" cy="74" rx="2" ry="3" fill={OUTLINE} />
      <path d="M50 82 L48 90 M70 82 L72 90" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </g>
  )
}

function Head({ c }: { c: Character }) {
  if (has(c, 'boarMask')) return <BoarHead c={c} />

  const eye = (cx: number) => (
    <g>
      <ellipse cx={cx} cy="64" rx="6" ry="7.6" fill="#fff" stroke={OUTLINE} strokeWidth="1.4" />
      <ellipse cx={cx} cy="65" rx="4.5" ry="6.2" fill={c.eyes} />
      <ellipse cx={cx} cy="65.6" rx="2.2" ry="3.6" fill={OUTLINE} />
      <circle cx={cx - 1.8} cy="62" r="1.8" fill="#fff" />
      <circle cx={cx + 1.6} cy="68" r="0.9" fill="#fff" opacity=".9" />
      <path d={`M${cx - 7} 59.5 Q${cx} 55.5 ${cx + 7} 59.5`} fill="none" stroke={OUTLINE} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  )

  const mouth =
    c.smile === 'grin' ? (
      <>
        <path d="M52 77 Q60 85 68 77Z" fill="#7a1f2b" stroke={OUTLINE} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M54 78 Q60 80.5 66 78" fill="none" stroke="#fff" strokeWidth="1.6" />
      </>
    ) : c.smile === 'smirk' ? (
      <path d="M53 78 Q60 81 68 75" fill="none" stroke={OUTLINE} strokeWidth="1.8" strokeLinecap="round" />
    ) : (
      <path d="M55 78 Q60 80 65 78" fill="none" stroke={OUTLINE} strokeWidth="1.8" strokeLinecap="round" />
    )

  return (
    <>
      <path d={BACK_HAIR[c.hairStyle]} fill={c.hair} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="60" cy="58" rx="27" ry="28" fill={c.skin} stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="33.5" cy="62" rx="3.4" ry="5" fill={c.skin} stroke={OUTLINE} strokeWidth="1.6" />
      <ellipse cx="86.5" cy="62" rx="3.4" ry="5" fill={c.skin} stroke={OUTLINE} strokeWidth="1.6" />
      <ellipse cx="42" cy="73" rx="4.5" ry="2.4" fill="#ff7a8a" opacity=".35" />
      <ellipse cx="78" cy="73" rx="4.5" ry="2.4" fill="#ff7a8a" opacity=".35" />
      {eye(48)}
      {eye(72)}
      {has(c, 'eyebags') && (
        <g fill="none" stroke="#6b5a78" strokeWidth="2" strokeLinecap="round" opacity=".8">
          <path d="M42 72 Q48 75 54 72" />
          <path d="M66 72 Q72 75 78 72" />
        </g>
      )}
      <path d="M44 53 L53 55" stroke={c.hair} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M76 53 L67 55" stroke={c.hair} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M60 70 L58.5 73.5 L61.5 73.5" fill="none" stroke={OUTLINE} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {mouth}
      {has(c, 'blindfold') && (
        <g>
          <rect x="31" y="55" width="58" height="18" rx="4" fill="#0c0c12" stroke={OUTLINE} strokeWidth="1.6" />
          <path d="M34 59 H86" stroke="#2a2a38" strokeWidth="1.4" />
        </g>
      )}
      {has(c, 'scarCheek') && <path d="M36 66 L47 78" stroke="#c0605a" strokeWidth="2.6" strokeLinecap="round" />}
      {has(c, 'hanafuda') && (
        <g stroke={OUTLINE} strokeWidth="1.2">
          <rect x="29" y="68" width="5" height="12" rx="1" fill="#fff" />
          <rect x="29" y="72" width="5" height="5" fill="#d62839" />
          <rect x="86" y="68" width="5" height="12" rx="1" fill="#fff" />
          <rect x="86" y="72" width="5" height="5" fill="#d62839" />
        </g>
      )}
      {has(c, 'earringsRed') && (
        <g stroke={OUTLINE} strokeWidth="1.2" fill="#d62839">
          <circle cx="31" cy="72" r="2.4" />
          <circle cx="89" cy="72" r="2.4" />
          <path d="M31 74 V82 M89 74 V82" stroke="#d62839" strokeWidth="2" />
        </g>
      )}
      <path d={FRONT_HAIR[c.hairStyle]} fill={c.hair} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {has(c, 'scarForehead') && <path d="M40 47 Q45 52 42 59" fill="none" stroke="#b3342d" strokeWidth="3" strokeLinecap="round" />}
      <path d="M44 38 Q52 33 62 35" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" opacity=".45" />
      {has(c, 'glasses') && (
        <g fill="rgba(255,255,255,.18)" stroke={OUTLINE} strokeWidth="2">
          <rect x="38" y="57" width="20" height="16" rx="5" />
          <rect x="62" y="57" width="20" height="16" rx="5" />
          <path d="M58 64 H62" fill="none" />
        </g>
      )}
    </>
  )
}

function Body({ c, pid }: { c: Character; pid: string }) {
  const arm = c.outfit === 'bare' ? c.skin : c.outfit === 'checker' ? '#1f6b43' : c.top
  const torsoFill = c.outfit === 'checker' ? `url(#${pid})` : c.top
  const trim = c.outfit === 'jersey' ? c.accent : OUTLINE
  return (
    <>
      <defs>
        <pattern id={pid} width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill={c.top} />
          <rect width="5" height="5" fill={c.accent} />
          <rect x="5" y="5" width="5" height="5" fill={c.accent} />
        </pattern>
      </defs>

      {/* the rope ties to this stick */}
      <rect x="2" y="14" width="116" height="7" rx="3.5" fill="#9a7440" stroke={OUTLINE} strokeWidth="2" />

      {/* arms reach up to the stick */}
      <g strokeLinecap="round">
        <path d="M44 120 L14 22" stroke={OUTLINE} strokeWidth="14" />
        <path d="M44 120 L14 22" stroke={arm} strokeWidth="10" />
        <path d="M76 120 L106 22" stroke={OUTLINE} strokeWidth="14" />
        <path d="M76 120 L106 22" stroke={arm} strokeWidth="10" />
      </g>
      <g fill={c.skin} stroke={OUTLINE} strokeWidth="1.8">
        <rect x="6" y="11" width="16" height="13" rx="6" />
        <rect x="98" y="11" width="16" height="13" rx="6" />
        <path d="M10 11 V18 M14.5 11 V18 M19 11 V18" fill="none" strokeWidth="1.1" />
        <path d="M102 11 V18 M106.5 11 V18 M111 11 V18" fill="none" strokeWidth="1.1" />
      </g>

      {/* legs */}
      <g className="hang-leg-l">
        <rect x="44" y="138" width="13" height="26" rx="5" fill={c.shorts ? c.skin : c.pants} stroke={OUTLINE} strokeWidth="2" />
        {c.shorts && <rect x="44" y="138" width="13" height="12" rx="4" fill={c.pants} stroke={OUTLINE} strokeWidth="2" />}
        <path d="M42 160 H58 V167 Q58 171 53 171 H44 Q40 171 40 168Z" fill="#f8fafc" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      </g>
      <g className="hang-leg-r">
        <rect x="63" y="138" width="13" height="26" rx="5" fill={c.shorts ? c.skin : c.pants} stroke={OUTLINE} strokeWidth="2" />
        {c.shorts && <rect x="63" y="138" width="13" height="12" rx="4" fill={c.pants} stroke={OUTLINE} strokeWidth="2" />}
        <path d="M61 160 H77 V167 Q77 171 72 171 H63 Q59 171 59 168Z" fill="#f8fafc" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      </g>

      {/* torso */}
      {has(c, 'neckphones') && (
        <path d="M36 108 Q60 128 84 108" fill="none" stroke="#2b2f3a" strokeWidth="5" strokeLinecap="round" />
      )}
      <path d="M40 112 Q60 106 80 112 L82 146 Q60 151 38 146Z" fill={torsoFill} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {c.outfit === 'jersey' && (
        <>
          <path d="M48 110 Q60 120 72 110" fill="none" stroke={trim} strokeWidth="3" strokeLinecap="round" />
          <path d="M40 140 H81" stroke={trim} strokeWidth="2.4" />
          <text x="60" y="134" textAnchor="middle" fontSize="15" fontWeight="700" fontFamily="Arial, sans-serif" fill={c.accent}>
            {c.number}
          </text>
        </>
      )}
      {c.outfit === 'gakuran' && (
        <>
          <path d="M60 112 V148" stroke={OUTLINE} strokeWidth="1.5" />
          {[120, 130, 140].map((y) => (
            <circle key={y} cx="60" cy={y} r="2" fill={c.accent} stroke={OUTLINE} strokeWidth="1" />
          ))}
          <path d="M50 108 L60 118 L70 108 V104 H50Z" fill={c.top} stroke={OUTLINE} strokeWidth="1.6" strokeLinejoin="round" />
        </>
      )}
      {c.outfit === 'hoodie' && (
        <>
          <path d="M42 112 Q60 128 78 112 Q60 104 42 112Z" fill={c.accent} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
          <path d="M60 120 V148" stroke={OUTLINE} strokeWidth="1.5" />
        </>
      )}
      {c.outfit === 'jacket' && (
        <>
          <path d="M60 110 V148" stroke={OUTLINE} strokeWidth="1.6" />
          <path d="M40 126 H80" stroke={c.accent} strokeWidth="3" />
          <path d="M50 108 L60 120 L52 112Z M70 108 L60 120 L68 112Z" fill="#fff" stroke={OUTLINE} strokeWidth="1.2" />
        </>
      )}
      {c.outfit === 'tunic' && (
        <>
          <path d="M40 130 H81" stroke="#3a2a1a" strokeWidth="4" />
          <rect x="56" y="127" width="8" height="7" rx="1.5" fill={c.accent} stroke={OUTLINE} strokeWidth="1.2" />
          <path d="M50 108 Q60 118 70 108" fill="none" stroke={c.accent} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {c.outfit === 'tabard' && (
        <>
          <path d="M50 110 L60 148 L70 110Z" fill="#f8fafc" stroke={OUTLINE} strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M40 112 L50 148 M80 112 L70 148" stroke={c.accent} strokeWidth="3" />
          <path d="M60 118 V140 M54 128 H66" stroke={OUTLINE} strokeWidth="1.6" />
        </>
      )}
      {c.outfit === 'triangles' && (
        <path d="M38 146 L44 136 L50 146 L56 136 L62 146 L68 136 L74 146 L80 136 L82 146Z" fill={c.accent} stroke={OUTLINE} strokeWidth="1.4" strokeLinejoin="round" />
      )}
      {c.outfit === 'bare' && (
        <>
          <path d="M44 118 Q60 124 76 118 M46 128 Q60 134 74 128" fill="none" stroke="#b9855f" strokeWidth="2" strokeLinecap="round" />
          <path d="M38 138 Q60 134 82 138 L82 148 Q60 152 38 148Z" fill={c.accent} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
        </>
      )}
      {c.outfit === 'plain' && c.accent === '#6d28d9' && <path d="M40 130 H81" stroke={c.accent} strokeWidth="3" />}
    </>
  )
}

function Mini({ c }: { c: Character }) {
  const pid = useId().replace(/:/g, '')
  return (
    <>
      <Body c={c} pid={pid} />
      <g transform="translate(60 74) scale(1.32) translate(-60 -58)">
        <Head c={c} />
      </g>
    </>
  )
}

type HangerProps = {
  id: keyof typeof characters
  rope: number
  seed: number
}

function Hanger({ id, rope, seed }: HangerProps) {
  const c = characters[id]
  const [ref, inView] = useInView<HTMLDivElement>()
  const dur = 3.2 + ((seed * 7) % 5) * 0.4

  return (
    <div
      ref={ref}
      title={c.name}
      className="hanger relative -mx-1 sm:-mx-2"
      style={{ '--rope': `${rope}px`, perspective: '420px' } as React.CSSProperties}
    >
      <div className={`hang-drop ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: `${150 + seed * 140}ms` }}>
        <div
          className="hang-sway flex flex-col items-center"
          style={{
            animationDuration: `${dur}s`,
            animationDelay: `-${(seed * 0.8) % dur}s`,
            transformOrigin: '50% 0',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="hang-rope" />
          <svg viewBox="0 0 120 172" className="hanger-svg overflow-visible" aria-hidden="true">
            <Mini c={c} />
          </svg>
        </div>
      </div>
    </div>
  )
}

type Cluster = { left: (keyof typeof characters)[]; right: (keyof typeof characters)[] }

const CLUSTERS: Record<string, Cluster> = {
  profile: { left: ['hinata', 'kageyama'], right: ['tsukishima', 'gon'] },
  experience: { left: ['killua', 'kurapika'], right: ['light', 'l'] },
  projects: { left: ['thorfinn', 'gojo'], right: ['itadori', 'fushiguro'] },
  expertise: { left: ['tanjiro', 'zenitsu'], right: ['inosuke', 'hinata'] },
  education: { left: ['killua', 'gon'], right: ['fushiguro', 'itadori'] },
  contact: { left: ['gojo', 'tanjiro'], right: ['inosuke', 'zenitsu'] },
}

// "here and there": each figure hangs on a different length of rope.
const ROPES = [34, 6, 48, 18]

export function Hangers({ id }: { id: string }) {
  const cluster = CLUSTERS[id]
  if (!cluster) return null
  const row = (ids: (keyof typeof characters)[], offset: number) =>
    ids.map((cid, i) => <Hanger key={`${cid}-${i}`} id={cid} rope={ROPES[(i + offset) % ROPES.length]} seed={i + offset + id.length} />)

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-6 top-0 z-20 flex items-start justify-between sm:inset-x-10">
      <div className="flex items-start">{row(cluster.left, 0)}</div>
      <div className="flex items-start">{row(cluster.right, 2)}</div>
    </div>
  )
}
