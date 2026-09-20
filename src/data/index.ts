import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Shield } from 'lucide-react'

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
        label: 'Live Demo',
        href: 'https://anantduhan.github.io/limiter-core/',
      },
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
    group: 'Backend Engineering',
    items: [
      { name: 'Java', pct: 88 },
      { name: 'Spring Boot', pct: 85 },
      { name: 'Node.js', pct: 90 },
      { name: 'Express', pct: 88 },
      { name: 'REST APIs', pct: 92 },
      { name: 'Microservices', pct: 82 },
      { name: 'Event-Driven Architecture', pct: 78 },
      { name: 'API Design', pct: 88 },
    ],
  },

  {
    group: 'Distributed Systems',
    items: [
      { name: 'Redis', pct: 85 },
      { name: 'Kafka', pct: 72 },
      { name: 'Socket.IO / WebSockets', pct: 84 },
      { name: 'BullMQ / Background Jobs', pct: 78 },
      { name: 'Elasticsearch', pct: 78 },
      { name: 'Rate Limiting', pct: 88 },
      { name: 'Caching', pct: 88 },
      { name: 'Horizontal Scaling', pct: 72 },
    ],
  },

  {
    group: 'Databases',
    items: [
      { name: 'MongoDB', pct: 88 },
      { name: 'Oracle', pct: 78 },
      { name: 'SQL', pct: 82 },
      { name: 'Database Indexing', pct: 82 },
      { name: 'Query Optimization', pct: 75 },
      { name: 'Data Modeling', pct: 82 },
    ],
  },

  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'AWS', pct: 75 },
      { name: 'Docker', pct: 84 },
      { name: 'GitHub Actions', pct: 85 },
      { name: 'CI/CD', pct: 85 },
      { name: 'Linux', pct: 78 },
      { name: 'Cloud Deployment', pct: 78 },
    ],
  },

  {
    group: 'Security & Reliability',
    items: [
      { name: 'JWT Authentication', pct: 85 },
      { name: 'OAuth 2.0', pct: 78 },
      { name: 'TOTP 2FA', pct: 82 },
      { name: 'API Rate Limiting', pct: 88 },
      { name: 'HTTP Security', pct: 78 },
      { name: 'Fault Tolerance', pct: 70 },
    ],
  },

  {
    group: 'Frontend',
    items: [
      { name: 'Angular', pct: 85 },
      { name: 'React', pct: 82 },
      { name: 'TypeScript', pct: 90 },
      { name: 'Redux', pct: 78 },
      { name: 'Tailwind CSS', pct: 78 },
    ],
  },
]

export const TECH_CHIPS = [
  // Languages
  'Java',
  'TypeScript',
  'JavaScript',
  'Python',
  'SQL',

  // Backend
  'Spring Boot',
  'Node.js',
  'Express',
  'REST APIs',
  'Microservices',
  'Event-Driven Architecture',
  'API Design',

  // Distributed Systems
  'Redis',
  'Kafka',
  'Elasticsearch',
  'Socket.IO',
  'WebSockets',
  'BullMQ',
  'Caching',
  'Rate Limiting',
  'Background Jobs',
  'Horizontal Scaling',

  // Databases
  'MongoDB',
  'Oracle',
  'Database Indexing',
  'Query Optimization',
  'Data Modeling',

  // Cloud / DevOps
  'AWS',
  'Docker',
  'GitHub Actions',
  'CI/CD',
  'Linux',
  'Cloud Deployment',

  // Security
  'JWT',
  'OAuth 2.0',
  'TOTP 2FA',
  'API Security',

  // Frontend
  'React',
  'Angular',
  'Redux',
  'Tailwind CSS',

  // Engineering
  'Git',
  'System Design',
  'Testing',
  'Automation',
]

export const EXPERIENCE = [
  {
    period: 'Jan 2024 — Present',
    role: 'Software Engineer I',
    company: 'Bosch Global Software Technologies · Bangalore, India',
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
    period: 'Jun 2022 — Jul 2022',
    role: 'Software Engineer Intern',
    company: 'Hestabit Technologies Pvt. Ltd. · Noida, India',
    points: [
      'Developed a monolithic Node.js backend and refactored it into scalable microservices using Moleculer.js to improve maintainability and address API bottlenecks',
      'Built low-latency real-time communication between server and client using WebSockets, enabling continuous data flow',
      'Developed REST APIs and integrated backend services with React-based frontend applications',
      'Worked with Node.js, Moleculer.js, React, JavaScript, REST APIs and WebSockets',
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
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/AnantDuhan',
  },
  {
    icon: Shield,
    label: 'limiter-core',
    href: 'https://anantduhan.github.io/limiter-core/',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anantduhan',
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/AnantDuhan_',
  },
]