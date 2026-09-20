export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

export const STATS = [
  { value: '2.5+', label: 'Years experience' },
  { value: '1100+', label: 'LeetCode problems solved' },
  { value: '2',    label: 'Featured projects' },
  { value: '3+',   label: 'Production systems' },
]

export const ABOUT_CARDS = [
  {
    icon: '⚡',
    title: 'Backend Engineering',
    desc: 'Java, Spring Boot, Node.js, REST APIs, microservices and event-driven systems',
  },
  {
    icon: '🌐',
    title: 'Full-Stack',
    desc: 'React and Angular applications backed by scalable Node.js and Spring Boot services',
  },
  {
    icon: '🔄',
    title: 'Distributed Systems',
    desc: 'Redis, Elasticsearch, Socket.IO, background jobs, caching and distributed rate limiting',
  },
  {
    icon: '🚀',
    title: 'Production',
    desc: 'Docker, AWS, GitHub Actions, CI/CD, authentication, monitoring and cloud deployments',
  },
]

export const PROJECTS = [
  {
    featured: true,
    icon: '🛒',
    badges: [
      { label: 'featured', color: 'green' },
      { label: 'live', color: 'default' },
      { label: 'full-stack', color: 'default' },
    ],
    name: 'MAISON — E-Commerce Platform',
    desc: 'Production-oriented full-stack e-commerce platform covering authentication, TOTP 2FA, product discovery, payments, orders, returns, refunds, real-time updates, Redis caching, Elasticsearch search, background jobs, AWS S3, AI-powered review summaries and administrative analytics.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'Socket.IO',
      'Cashfree',
      'AWS S3',
      'Gemini AI',
      'JWT',
      '2FA',
      'BullMQ',
    ],
    links: [
      {
        label: 'Live Demo',
        href: 'https://maisonorderplanning.in',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/AnantDuhan/MAISON-Order-Planning',
      },
    ],
    code: `// Real-time order updates

socket.on('orderStatusUpdated', (order) => {
  dispatch(updateOrder(order));
});

// Redis-backed infrastructure
// Elasticsearch product search
// Cashfree payments
// TOTP 2FA`,
  },

  {
    featured: true,
    icon: '🛡️',
    badges: [
      { label: 'open source', color: 'green' },
      { label: 'npm coming soon', color: 'default' },
    ],
    name: '@anantduhan/limiter-core',
    desc: 'TypeScript rate-limiting library for Node.js with token-bucket and sliding-window strategies, in-memory and Redis backends, and Express/Fastify integrations. Designed to provide a consistent API across local development and distributed production environments.',
    tech: [
      'TypeScript',
      'Node.js',
      'Redis',
      'Lua',
      'Express',
      'Fastify',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/AnantDuhan/limiter-core',
      },
    ],
    code: `const limiter = new RateLimiter({
  rate: 100,
  window: '1 minute',
  burst: 150,
  backend: 'redis',
  redisClient: redis,
});

const { allowed } =
  await limiter.check('user-123');`,
  },

  {
    icon: '🔔',
    badges: [
      { label: 'Bosch', color: 'yellow' },
      { label: 'internal', color: 'default' },
    ],
    name: 'FossLens — Vulnerability Automation',
    desc: 'Automation platform for software vulnerability and compliance workflows, integrating GitHub, Dependency-Track and enterprise services to automate application onboarding, scanning and notification workflows.',
    tech: [
      'Node.js',
      'GitHub Actions',
      'Dependency-Track',
      'REST APIs',
      'YAML',
      'Automation',
    ],
    links: [],
  },

  {
    icon: '📊',
    badges: [
      { label: 'Bosch', color: 'yellow' },
      { label: 'internal', color: 'default' },
    ],
    name: 'PMT Architecture & Reporting Platform',
    desc: 'Enterprise reporting and automation platform supporting architecture, application lifecycle and compliance-related reporting workflows across internal engineering teams.',
    tech: [
      'Angular',
      'Node.js',
      'TypeScript',
      'REST APIs',
      'Docker',
      'Automation',
    ],
    links: [],
  },
]

export const SKILLS = [
  {
    group: 'Languages',
    items: [
      { name: 'Java',       pct: 88 },
      { name: 'TypeScript', pct: 90 },
      { name: 'JavaScript', pct: 88 },
      { name: 'Python',    pct: 70 },
      { name: 'SQL',       pct: 78 },
    ],
  },

  {
    group: 'Backend',
    items: [
      { name: 'Spring Boot', pct: 85 },
      { name: 'Node.js',     pct: 90 },
      { name: 'Express',     pct: 88 },
      { name: 'REST APIs',   pct: 90 },
    ],
  },

  {
    group: 'Frontend',
    items: [
      { name: 'Angular',    pct: 85 },
      { name: 'React',      pct: 82 },
      { name: 'TypeScript', pct: 90 },
      { name: 'Redux',      pct: 78 },
    ],
  },

  {
    group: 'Distributed Systems',
    items: [
      { name: 'Redis',         pct: 85 },
      { name: 'Elasticsearch', pct: 78 },
      { name: 'Socket.IO',     pct: 82 },
      { name: 'Docker',        pct: 82 },
    ],
  },
]

export const TECH_CHIPS = [
  'Java',
  'Spring Boot',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'React',
  'Angular',
  'MongoDB',
  'Oracle',
  'Redis',
  'Elasticsearch',
  'Kafka',
  'Socket.IO',
  'BullMQ',
  'Docker',
  'AWS',
  'GitHub Actions',
  'REST APIs',
  'JWT',
  'OAuth',
  'TOTP 2FA',
  'Git',
  'CI/CD',
]

export const EXPERIENCE = [
  {
    period: 'Jan 2024 — Present',
    role: 'Software Engineer I',
    company: 'Bosch Global Software Technologies · Coimbatore, India',
    points: [
      'Develop enterprise software using Java, Spring Boot, Node.js, Angular and TypeScript',
      'Built automation and backend services for application lifecycle, reporting and compliance workflows',
      'Developed FossLens automation integrating GitHub, Dependency-Track and enterprise APIs',
      'Worked on PMT architecture and reporting systems used across internal engineering workflows',
      'Built and maintained enterprise Angular applications and REST-based backend services',
      'Automated testing and engineering workflows using Playwright, SWTBot and CI/CD pipelines',
      'Improved application startup performance from approximately 25 seconds to 2–3 seconds',
      'Reduced post-release defects by approximately 30% through automated validation and tooling',
      'Reduced manual testing effort by approximately 90% through test automation',
    ],
  },

  {
    period: 'Open Source',
    role: 'Open Source Developer',
    company: '@anantduhan/limiter-core · GitHub',
    points: [
      'Designed a TypeScript rate-limiting library for Node.js applications',
      'Implemented token-bucket and sliding-window rate-limiting strategies',
      'Implemented memory and Redis-backed storage for development and distributed deployments',
      'Added Express and Fastify integrations for application-level rate limiting',
      'Designed the library around distributed-system concerns such as concurrency and atomic operations',
      'npm publication is planned; the project is currently available through GitHub',
    ],
  },
]

export const CONTACT_LINKS = [
  {
    icon: '⚡',
    label: 'GitHub',
    href: 'https://github.com/AnantDuhan',
  },
  {
    icon: '📦',
    label: 'limiter-core',
    href: 'https://github.com/AnantDuhan/limiter-core',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anantduhan',
  },
]