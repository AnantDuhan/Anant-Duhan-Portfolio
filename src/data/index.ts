import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import {
  Mail, Shield, Server, Network, ShieldCheck, Layers,
  ShoppingBag, Gauge, BellRing, BarChart3,
  type LucideIcon,
} from 'lucide-react'
import type { IconType } from 'react-icons'

export const EMAIL = 'aanantduhan@gmail.com'
export const RESUME_URL = '/resume.pdf'

export const NAV_LINKS = [
  { label: 'About',      href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects',   href: '/#projects' },
  { label: 'Skills',     href: '/#skills' },
  { label: 'Contact',    href: '/#contact' },
]

export const STATS = [
  { value: '2.5+',       label: 'Years Engineering' },
  { value: '25s → 2–3s', label: 'Startup Time' },
  { value: '90%',        label: 'Testing Reduced' },
  { value: '30%',        label: 'Fewer Defects' },
]

export const ABOUT_CARDS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Server,
    title: 'Backend Systems',
    desc: 'Node.js, Express, Java, Spring Boot, REST APIs, service design and backend architecture.',
  },
  {
    icon: Network,
    title: 'Event-Driven Systems',
    desc: 'Kafka, Redis, Elasticsearch, WebSockets, background jobs, caching and rate limiting.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Reliability',
    desc: 'Azure AD SSO, JWT, TOTP 2FA, API security and graceful failure handling.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Delivery',
    desc: 'Angular and React frontends on Node.js APIs, shipped with Docker and CI/CD.',
  },
]

export type ProjectLink = { label: string; href: string; external?: boolean }

export type Project = {
  featured?: boolean
  icon: LucideIcon
  badges: { label: string; color: string }[]
  name: string
  summary: string
  problem?: string
  approach?: string
  result?: string
  tech: string[]
  links: ProjectLink[]
  code?: string
  codeLabel?: string
}

export const PROJECTS: Project[] = [
  {
    featured: true,
    icon: ShoppingBag,
    badges: [
      { label: 'featured', color: 'green' },
      { label: 'live', color: 'default' },
      { label: 'full-stack', color: 'default' },
    ],
    name: 'MAISON — E-Commerce Platform',
    summary:
      'Full-stack e-commerce platform: authentication with TOTP 2FA, product search, Cashfree payments, orders, returns and refunds, real-time order updates, background jobs, AI review summaries and admin analytics.',
    problem:
      'Running more than one backend instance broke the in-process cache: an invalidation on one instance never reached the others, so users could see stale data.',
    approach:
      'Moved caching to a shared Redis layer. Every cache call is wrapped so a Redis failure degrades to a cache miss instead of failing the request, and TTLs let a missed invalidation heal itself.',
    result:
      'Cache deletes now reach every instance, and a Redis outage slows requests down instead of taking them down.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Elasticsearch', 'Socket.IO', 'BullMQ', 'Cashfree', 'AWS S3', 'Gemini AI', 'JWT', 'TOTP 2FA'],
    links: [
      { label: 'Live Demo', href: 'https://maisonorderplanning.in', external: true },
      { label: 'GitHub', href: 'https://github.com/AnantDuhan/MAISON-Order-Planning', external: true },
    ],
    codeLabel: 'backend/utils/cache.js',
    code: `// Shared across all instances; a Redis
// hiccup becomes a cache miss, not a 500.
async function getJSON(key) {
  try {
    const raw = await redis.get(key);
    if (raw === null || raw === undefined) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  } catch (err) {
    console.error(\`cache.getJSON(\${key}) failed:\`, err.message);
    return null; // treat as a miss
  }
}`,
  },
  {
    featured: true,
    icon: Gauge,
    badges: [
      { label: 'open source', color: 'green' },
      { label: 'npm coming soon', color: 'default' },
    ],
    name: '@anantduhan/limiter-core',
    summary:
      'TypeScript rate-limiting library for Node.js with token-bucket and sliding-window strategies, memory and Redis backends, and Express/Fastify adapters.',
    problem:
      'A rate limit is only correct if every server agrees on the count. Read-then-write from several Node processes races, and each server has its own clock.',
    approach:
      'Each check runs as a single Redis Lua script, so read, refill and decrement are atomic. Time comes from Redis TIME rather than Date.now(), so all servers share one clock. The memory backend exposes the same API for local development.',
    result:
      'Moving from a single process to a distributed deployment is a one-line backend change, and Retry-After is calculated for every rejected request.',
    tech: ['TypeScript', 'Node.js', 'Redis', 'Lua', 'Express', 'Fastify', 'Jest'],
    links: [
      { label: 'Docs & Demo', href: 'https://anantduhan.github.io/limiter-core/', external: true },
      { label: 'GitHub', href: 'https://github.com/AnantDuhan/limiter-core', external: true },
    ],
    codeLabel: 'src/backends/RedisBackend.ts (Lua)',
    code: `if tokens >= 1 then
  tokens  = tokens - 1
  allowed = 1
else
  local needed = 1 - tokens
  retryAfter   = math.ceil((needed * windowMs / rate) / 1000)
end

redis.call('HSET', key, 'tokens', tokens, 'lastRefill', lastRefill)
redis.call('EXPIRE', key, ttlSec)`,
  },
  {
    icon: BellRing,
    badges: [
      { label: 'Bosch', color: 'yellow' },
      { label: 'internal', color: 'default' },
    ],
    name: 'FossLens — Vulnerability Automation',
    summary:
      'Onboarded 1,500+ GitHub repositories into Dependency-Track scanning, and built the notification pipeline that emails each project owner only the findings that are new since the last run.',
    tech: ['Node.js', 'Dependency-Track', 'GitHub', 'Handlebars', 'SMTP', 'YAML'],
    links: [{ label: 'Read case study', href: '/case-studies/fosslens' }],
  },
  {
    icon: BarChart3,
    badges: [
      { label: 'Bosch', color: 'yellow' },
      { label: 'internal', color: 'default' },
    ],
    name: 'PMT Architecture & Reporting Platform',
    summary:
      'Enterprise reporting and automation platform supporting architecture, application lifecycle and compliance reporting across internal engineering teams.',
    tech: ['Angular', 'Node.js', 'TypeScript', 'REST APIs', 'Docker'],
    links: [],
  },
]

export const SKILL_GROUPS = [
  { group: 'Languages',          items: ['TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { group: 'Backend',            items: ['Node.js', 'Express', 'Spring Boot', 'REST APIs', 'Kafka'] },
  { group: 'Data',               items: ['MongoDB', 'Redis', 'Elasticsearch'] },
  { group: 'Frontend',           items: ['Angular', 'React'] },
  { group: 'Security',           items: ['Azure AD SSO', 'JWT', 'TOTP 2FA'] },
  { group: 'Delivery & testing', items: ['Docker', 'GitHub Actions', 'Playwright', 'SWTBot'] },
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
]

export const CONTACT_LINKS: { icon: LucideIcon | IconType; label: string; href: string; external: boolean }[] = [
  { icon: Mail,       label: 'Email',        href: `mailto:${EMAIL}`,                             external: false },
  { icon: FaLinkedin, label: 'LinkedIn',     href: 'https://linkedin.com/in/anantduhan',          external: true },
  { icon: FaGithub,   label: 'GitHub',       href: 'https://github.com/AnantDuhan',               external: true },
  { icon: Shield,     label: 'limiter-core', href: 'https://anantduhan.github.io/limiter-core/',  external: true },
  { icon: SiLeetcode, label: 'LeetCode',     href: 'https://leetcode.com/u/AnantDuhan_',          external: true },
]
