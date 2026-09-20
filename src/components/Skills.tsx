import { useInView } from '../hooks/useInView'
import { SKILLS, TECH_CHIPS } from '../data'

function SkillBar({ name, pct, inView, delay }: { name: string; pct: number; inView: boolean; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="font-mono text-xs text-gray-400">{pct}%</span>
      </div>
      <div className="h-[3px] bg-gray-100 dark:bg-dark-border2 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-[1200ms] ease-out"
          style={{
            width: inView ? `${pct}%` : '0%',
            transitionDelay: `${delay}ms`,
            background: 'linear-gradient(90deg, #7C6AF7, #A78BFA)',
          }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="skills" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">// technical skills</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">
          What I work with
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bars */}
          <div className={`space-y-10 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            {SKILLS.map((group, gi) => (
              <div key={group.group}>
                <div className="font-mono text-[10px] text-accent tracking-widest mb-4 uppercase">{group.group}</div>
                {group.items.map((s, si) => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} inView={inView} delay={gi * 200 + si * 100} />
                ))}
              </div>
            ))}
          </div>

          {/* Chip cloud */}
          <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="font-mono text-[10px] text-accent tracking-widest mb-4 uppercase">Full Stack</div>
            <div className="flex flex-wrap gap-2.5">
              {TECH_CHIPS.map(chip => (
                <span key={chip}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium
                    border border-gray-200 dark:border-dark-border2
                    bg-white dark:bg-dark-surface
                    text-gray-600 dark:text-gray-400
                    hover:border-accent hover:text-accent hover:bg-accent/5
                    transition-all duration-200 cursor-default">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
