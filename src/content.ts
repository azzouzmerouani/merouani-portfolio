// All copy comes from the CV (Merouani Azzouz). Edit here, not in the components.

export type Link = {
  label: string
  href: string
  external?: boolean
}

export const name = {
  first: 'Merouani',
  last: 'Azzouz',
}

export const brand = name.first
export const year = '2026'

export const contact = {
  email: 'azzouzmerw@gmail.com',
  phone: '+213 562 41 39 35',
  phoneHref: 'tel:+213562413935',
  github: 'github.com/azzouzin',
  githubHref: 'https://github.com/azzouzin',
  location: 'Setif, Algeria',
  timezone: 'GMT+1',
}

// Hero column — kept to three, as in the original composition.
export const nav: Link[] = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

// Full index for the sticky bar and the mobile drawer.
export const siteIndex: Link[] = [
  ...nav,
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const social: Link[] = [
  { label: 'GitHub', href: contact.githubHref, external: true },
  { label: 'Email', href: `mailto:${contact.email}` },
  { label: 'Phone', href: contact.phoneHref },
]

export const roles = [
  'Flutter Developer',
  'Mobile Team Lead at Mizaniya Pay',
  'PhD Student in Cyber Security',
]

export const location = {
  label: 'Based in',
  place: contact.location,
}

// `portrait` must have a transparent background so the scrolling name shows behind it.
// `background` is optional; without one the hero is plain black, matching the photo.
export const images: { portrait: string; background?: string } = {
  portrait: '/images/merouani.webp',
}

export const profile = {
  statement:
    'Flutter Developer with a deep focus on Clean Architecture and robust state management using Cubit/BLoC.',
  body: [
    'Expert in designing scalable mobile infrastructures using MVVM and Dependency Injection (GetIt) to ensure decoupled, testable codebases. Proven track record of optimizing app performance through custom rendering strategies and efficient data layer management (Dio, Hive, Isar).',
    'Passionate about functional programming principles and building modular applications that are easy to maintain and scale. My goal is to elevate the tech landscape in Algeria by applying my expertise in real-world applications and contributing to both academic and industry advancement.',
  ],
  stats: [
    { value: '2021', label: 'Building with Flutter since' },
    { value: '05', label: 'Roles, from freelance to team lead' },
    { value: '06', label: 'Selected projects' },
    { value: '03', label: 'Languages spoken' },
  ],
}

export type Job = {
  company: string
  logo?: string
  role: string
  period: string
  current?: boolean
  stack: string[]
}

export const experience: Job[] = [
  {
    company: 'Mizaniya Pay',
    logo: '/images/logos/mizaniyapay.webp',
    role: 'Mobile Team Lead',
    period: 'Sep 2025 — Now',
    current: true,
    stack: ['Flutter', 'Dart', 'REST API', 'Cubit', 'Biometrics'],
  },
  {
    company: 'Futuriva',
    logo: '/images/logos/futuriva.webp',
    role: 'Flutter Developer',
    period: 'Mar 2024 — Jan 2025',
    stack: ['Flutter', 'Dart', 'REST API', 'GetX', 'Provider'],
  },
  {
    company: 'ADHprotecleans',
    logo: '/images/logos/adhprotecleans.webp',
    role: 'Flutter Developer',
    period: 'Aug 2023 — May 2025',
    stack: ['Flutter', 'Dart', 'REST API', 'GetX', 'BLoC', 'Cubit', 'Maps'],
  },
  {
    company: 'KhotwaTech',
    logo: '/images/logos/khotwatech.webp',
    role: 'Flutter Developer',
    period: 'Jul 2023 — Aug 2023',
    stack: ['Flutter', 'Dart', 'FCM', 'REST API', 'Provider'],
  },
  {
    company: 'Freelance',
    role: 'Flutter Developer',
    period: '2021 — 2023',
    stack: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  },
]

// Add `description` and/or `href` to any project and the row picks it up.
export type Project = {
  name: string
  logo?: string
  description?: string
  href?: string
}

export const projects: Project[] = [
  { name: 'Animo360', logo: '/images/logos/animo360.webp' },
  { name: 'MizaniyaPay', logo: '/images/logos/mizaniyapay.webp' },
  { name: 'Amwalflow', logo: '/images/logos/amwalflow.webp' },
  { name: 'Dwaya', logo: '/images/logos/dwaya.webp' },
  { name: 'Digihealth', logo: '/images/logos/digihealth.webp' },
  { name: 'My TuniClaim', logo: '/images/logos/tuniclaim.webp' },
]

export const expertise = {
  statement: 'Building modular applications that are easy to maintain and scale.',
  groups: [
    {
      title: 'Architecture',
      items: ['Clean Architecture', 'MVVM', 'Dependency Injection (GetIt)', 'Functional programming'],
    },
    {
      title: 'State management',
      items: ['Cubit / BLoC', 'GetX', 'Provider'],
    },
    {
      title: 'Data & networking',
      items: ['REST APIs', 'Dio', 'Hive', 'Isar', 'Firebase'],
    },
    {
      title: 'Platform',
      items: ['Push notifications (FCM)', 'Maps', 'Biometrics', 'Custom rendering'],
    },
  ],
  ticker: [
    'Flutter',
    'Dart',
    'Clean Architecture',
    'Cubit / BLoC',
    'MVVM',
    'GetIt',
    'Dio',
    'Hive',
    'Isar',
    'Firebase',
    'REST APIs',
    'Biometrics',
  ],
}

const university = 'Ferhat Abbas University Setif 1'
const universityLogo = '/images/logos/setif1.webp'

export const education = [
  {
    level: 'Doctorate',
    current: true,
    program: 'PhD in Cyber Security',
    school: university,
    logo: universityLogo,
  },
  {
    level: 'Master',
    program: "Master's degree in Computer Science",
    school: university,
    logo: universityLogo,
  },
  {
    level: 'Bachelor',
    program: "Bachelor's degree in Computer Science",
    school: university,
    logo: universityLogo,
  },
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Excellent' },
  { name: 'French', level: 'Intermediate' },
]
