import { ArrowLeft } from 'lucide-react'

function Box({ x, y, w, title, sub, accent = false }: {
  x: number; y: number; w: number; title: string; sub: string; accent?: boolean
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={64} rx={12}
        className={accent ? 'fill-accent/10 stroke-accent' : 'fill-white dark:fill-dark-surface stroke-gray-300 dark:stroke-dark-border2'}
        strokeWidth={1.5} />
      <text x={x + w / 2} y={y + 28} textAnchor="middle"
        className="fill-gray-900 dark:fill-white text-[14px] font-semibold">{title}</text>
      <text x={x + w / 2} y={y + 47} textAnchor="middle"
        className="fill-gray-500 dark:fill-gray-400 text-[11px]">{sub}</text>
    </g>
  )
}

function Arrow({ d, label, lx, ly }: { d: string; label?: string; lx?: number; ly?: number }) {
  return (
    <g>
      <path d={d} fill="none" className="stroke-gray-400 dark:stroke-gray-500" strokeWidth={1.5} markerEnd="url(#arrow)" />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" className="fill-gray-500 dark:fill-gray-400 text-[11px]">{label}</text>
      )}
    </g>
  )
}

function Diagram() {
  return (
    <figure className="my-12">
      <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-dark-border bg-gray-50 dark:bg-dark-bg2 p-4">
        <svg viewBox="0 0 860 290" className="min-w-[720px] w-full h-auto font-sans" role="img"
          aria-labelledby="fl-title fl-desc">
          <title id="fl-title">FossLens architecture</title>
          <desc id="fl-desc">
            GitHub repositories are onboarded into Dependency-Track and scanned. FossLens fetches projects and findings,
            stores a dated snapshot, diffs it against the previous one, and emails new findings to each project's owner.
          </desc>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-gray-400 dark:fill-gray-500" />
            </marker>
          </defs>

          <Box x={20}  y={50}  w={170} title="GitHub" sub="1,500+ repositories" />
          <Box x={250} y={50}  w={180} title="Dependency-Track" sub="scans · findings" />
          <Box x={490} y={50}  w={180} title="FossLens" sub="Node.js service" accent />
          <Box x={490} y={200} w={180} title="Snapshot + diff" sub="dated JSON · new findings only" />
          <Box x={720} y={50}  w={120} title="Owners" sub="per-project SPOCs" />
          <Box x={250} y={200} w={180} title="Config" sub="fosslens.yml · SPOC mapping" />

          <Arrow d="M190 82 L246 82" label="onboard + scan" lx={218} ly={42} />
          <Arrow d="M430 82 L486 82" label="REST API" lx={460} ly={42} />
          <Arrow d="M565 114 L565 196" />
          <Arrow d="M595 196 L595 118" />
          <Arrow d="M430 232 L486 120" />
          <Arrow d="M670 82 L716 82" label="email" lx={695} ly={42} />
          <text x={612} y={156} className="fill-gray-500 dark:fill-gray-400 text-[11px]">compare</text>
        </svg>
      </div>
      <figcaption className="text-xs text-gray-500 mt-3">
        Simplified architecture. Internal hostnames and service names are omitted.
      </figcaption>
    </figure>
  )
}

export default function FossLensCaseStudy() {
  return (
    <main className="px-6 lg:px-16 pt-32 pb-24">
      <article className="max-w-3xl mx-auto">
        <a href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-accent transition-colors mb-10">
          <ArrowLeft size={15} aria-hidden="true" /> Back to projects
        </a>

        <p className="font-mono text-xs text-accent tracking-widest mb-3">// case study · Bosch internal</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
          FossLens: getting new vulnerabilities to the people who own the code
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          Dependency-Track can scan every project for known vulnerabilities, but a finding only matters once
          the team that owns the code hears about it. FossLens closes that loop: it gets repositories into
          scanning, then tells each owner what is new since the last run.
        </p>

        <Diagram />

        <div className="space-y-10 text-gray-600 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Onboarding at scale</h2>
            <p>
              I built the onboarding automation that brought 1,500+ GitHub repositories into Dependency-Track and
              triggers their scans, so coverage doesn't depend on each team setting it up by hand.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Only what's new</h2>
            <p>
              The notifier fetches project and finding data from Dependency-Track and stores it as a dated JSON
              snapshot. Each run diffs the latest snapshot against the previous one, so owners get only the
              findings that appeared since the last run instead of the full backlog every time. Recipients come
              from a standalone project-to-owner mapping, and runtime settings live in a <code className="font-mono text-sm">fosslens.yml</code> file.
              Alerts are rendered from Handlebars templates and sent over SMTP.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The hard part: the corporate network</h2>
            <p className="mb-4">
              The service had to run behind a corporate proxy that uses NTLM authentication, which Node's HTTP
              stack doesn't speak natively. I routed traffic through a local authenticating proxy instead of
              connecting directly.
            </p>
            <p>
              The proxy also performs TLS inspection and re-signs traffic with an internal certificate authority,
              so every HTTPS call failed certificate validation. Rather than turning verification off, I exported
              the internal CA chain and supplied it through <code className="font-mono text-sm">NODE_EXTRA_CA_CERTS</code>,
              which keeps TLS verification on while trusting the corporate CA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Dependency-Track', 'GitHub', 'Handlebars', 'SMTP', 'YAML'].map(t => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-dark-bg3
                  text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-dark-border">{t}</span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
