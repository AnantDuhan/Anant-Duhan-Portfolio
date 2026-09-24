import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, type ProjectLink } from '../data'

const badgeColors: Record<string, string> = {
  green:   'text-emerald-600 dark:text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  yellow:  'text-yellow-700 dark:text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  default: 'text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-bg3 border-gray-200 dark:border-dark-border',
}

function LinkOut({ link, className, children }: { link: ProjectLink; className: string; children: React.ReactNode }) {
  return (
    <a href={link.href} className={className}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">// selected work</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl">
          Deployed products, open-source infrastructure, and internal work at Bosch.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {PROJECTS.map((p) => {
            const Icon = p.icon
            const primary = p.links[0]
            return (
              <article key={p.name}
                className={`rounded-2xl p-6 bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border
                  flex flex-col gap-5 ${p.featured ? 'lg:col-span-6 lg:grid lg:grid-cols-2 lg:gap-10' : 'lg:col-span-2'}`}>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-accent" aria-hidden="true" />
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {p.badges.map(b => (
                        <span key={b.label}
                          className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded-full border ${badgeColors[b.color] ?? badgeColors.default}`}>
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {primary ? (
                        <LinkOut link={primary} className="hover:text-accent transition-colors">{p.name}</LinkOut>
                      ) : p.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-gray-100 dark:bg-dark-bg3
                        text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-dark-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.links.length > 0 && (
                    <div className="flex gap-5 mt-auto pt-1">
                      {p.links.map(l => (
                        <LinkOut key={l.label} link={l}
                          className="text-sm font-medium text-accent hover:underline underline-offset-4 flex items-center gap-1">
                          {l.label}<ArrowUpRight size={14} aria-hidden="true" />
                        </LinkOut>
                      ))}
                    </div>
                  )}
                </div>

                {p.featured && p.code && (
                  <figure className="self-start w-full min-w-0">
                    {p.codeLabel && (
                      <figcaption className="font-mono text-[11px] text-gray-500 mb-2">{p.codeLabel}</figcaption>
                    )}
                    <pre className="rounded-xl bg-gray-50 dark:bg-dark-bg3 border border-gray-100 dark:border-dark-border
                      p-4 font-mono text-xs leading-relaxed text-gray-700 dark:text-gray-300 overflow-x-auto"><code>{p.code}</code></pre>
                  </figure>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
