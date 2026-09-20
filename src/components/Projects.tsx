import { useInView } from '../hooks/useInView'
import { PROJECTS } from '../data'

const badgeColors: Record<string, string> = {
  red:     'text-red-400 bg-red-400/10 border-red-400/30',
  green:   'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  yellow:  'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  default: 'text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-bg3 border-gray-200 dark:border-dark-border',
}

export default function Projects() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="projects" className="py-28 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">// selected work</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl">Things I've built — open source and at Bosch.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <div key={p.name}
              className={`rounded-2xl p-6 bg-white dark:bg-dark-surface
                border border-gray-100 dark:border-dark-border
                hover:border-gray-200 dark:hover:border-dark-border2
                hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/30
                transition-all duration-300 flex flex-col gap-4
                ${p.featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8' : ''}
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms`, transitionDuration: '600ms' }}>

              {/* Main content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20
                    flex items-center justify-center text-xl flex-shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {p.badges.map(b => (
                      <span key={b.label}
                        className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded-full border ${badgeColors[b.color]}`}>
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md
                      bg-gray-100 dark:bg-dark-bg3 text-gray-500 dark:text-gray-400
                      border border-gray-200 dark:border-dark-border">
                      {t}
                    </span>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="flex gap-4 mt-auto pt-2">
                    {p.links.map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener"
                        className="text-xs font-medium text-gray-400 dark:text-gray-500
                          hover:text-accent transition-colors flex items-center gap-1">
                        ↗ {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Featured code block */}
              {p.featured && p.code && (
                <div className="rounded-xl bg-gray-50 dark:bg-dark-bg3
                  border border-gray-100 dark:border-dark-border
                  p-4 font-mono text-xs leading-relaxed
                  text-gray-600 dark:text-gray-400 self-start
                  hidden lg:block whitespace-pre">
                  {p.code}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
