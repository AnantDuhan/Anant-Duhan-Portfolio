export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export const STATS = [
  { value: '1.5+', label: 'Years experience' },
  { value: '1',    label: 'npm package' },
  { value: '44',   label: 'Tests passing' },
  { value: '5+',   label: 'Production systems' },
]

export const ABOUT_CARDS = [
  { icon: '⚡', title: 'Full-Stack',   desc: 'Angular + React frontends, Node.js APIs, database design' },
  { icon: '📦', title: 'Open Source', desc: 'Published on npm, production-grade with full test coverage' },
  { icon: '🔒', title: 'Reliability', desc: 'Atomic operations, clock skew handling, fail-open patterns' },
  { icon: '🚀', title: 'Shipping',    desc: 'From idea to production — CI/CD, Docker, cloud deployment' },
]

export const PROJECTS = [
  {
    featured: true,
    icon: '📦',
    badges: [{ label: 'npm', color: 'red' }, { label: 'open source', color: 'green' }, { label: 'v1.0.0', color: 'default' }],
    name: '@anantduhan/limiter-core',
    desc: 'Production-grade distributed rate limiter for Node.js. Token bucket and sliding window strategies. Memory in development, Redis in production — one config change. Atomic Lua scripts eliminate race conditions across multiple servers.',
    tech: ['TypeScript', 'Node.js', 'Redis', 'Lua', 'Express', 'Fastify', 'Jest'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AnantDuhan/limiter-core' },
      { label: 'npm',    href: 'https://npmjs.com/package/@anantduhan/limiter-core' },
    ],
    code: `const limiter = new RateLimiter({
  rate:    100,
  window:  '1 minute',
  burst:   150,
  backend: 'redis', // ← swap here
  redisClient: redis,
});

const { allowed } =
  await limiter.check('user-123');`,
  },
  {
    icon: '🔔',
    badges: [{ label: 'Bosch', color: 'yellow' }, { label: 'internal', color: 'default' }],
    name: 'FossLens — Vulnerability Notifier',
    desc: 'Automated CVE notification system. Integrates with Dependency-Track to detect vulnerable dependencies and sends SMTP email alerts to engineers.',
    tech: ['Node.js', 'Angular', 'PostgreSQL', 'SMTP', 'Dependency-Track'],
    links: [],
  },
  {
    icon: '📊',
    badges: [{ label: 'Bosch', color: 'yellow' }, { label: 'internal', color: 'default' }],
    name: 'PMT Architecture Reports',
    desc: 'Full-stack architecture reporting platform. Angular frontend, Node.js API, scheduled batch email reports and automation tooling for hundreds of engineers.',
    tech: ['Angular', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    links: [],
  },
  {
    icon: '🛒',
    badges: [{ label: 'side project', color: 'default' }],
    name: 'Order Planning — E-commerce',
    desc: 'Full-stack order management with inventory tracking, order lifecycle management, and an analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    links: [],
  },
]

export const SKILLS = [
  {
    group: 'Languages',
    items: [
      { name: 'TypeScript',  pct: 90 },
      { name: 'JavaScript',  pct: 88 },
      { name: 'Python',      pct: 72 },
      { name: 'SQL',         pct: 78 },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'Angular',          pct: 85 },
      { name: 'React',            pct: 80 },
      { name: 'Node.js',          pct: 88 },
      { name: 'Express / Fastify', pct: 82 },
    ],
  },
]

export const TECH_CHIPS = [
  'PostgreSQL','MongoDB','Redis','Docker','AWS',
  'GitHub Actions','Linux','Jest','Webpack',
  'Tailwind CSS','Next.js','Postman','Lua','Git','CI/CD',
]

export const EXPERIENCE = [
  {
    period:  '2025 — Present',
    role:    'Software Engineer-1',
    company: 'Bosch Global Software Technologies · Coimbatore, India',
    points: [
      'Built FossLens — automated CVE notification system using Dependency-Track + SMTP',
      'Developed and maintained PMT Architecture Reports platform (Angular + Node.js)',
      'Implemented SLM Mailer — scheduled batch email reporting with Node.js cron jobs',
      'Contributed to Unified Desk app across Angular frontend and Node.js backend',
      'Built automation tooling reducing manual reporting overhead significantly',
    ],
  },
  {
    period:  'Sep 2026',
    role:    'Open Source Author',
    company: '@anantduhan/limiter-core · npm',
    points: [
      'Designed and shipped production-grade distributed rate limiter for Node.js',
      'Atomic Redis Lua scripts — zero race conditions under high concurrency',
      '44 tests passing across unit and integration suites',
      'Express and Fastify adapter middleware included out of the box',
    ],
  },
  {
    period:  '2020 — 2024',
    role:    'B.Tech — Computer Science',
    company: 'SRM Institute of Science and Technology · Chennai, India',
    points: [
      'Specialization in full-stack web development and systems programming',
      'Strong foundation in data structures, algorithms, databases and networks',
    ],
  },
]

export const CONTACT_LINKS = [
  { icon: '⚡', label: 'GitHub',   href: 'https://github.com/AnantDuhan' },
  { icon: '📦', label: 'npm',      href: 'https://npmjs.com/~anantduhan' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/anantduhan' },
]
