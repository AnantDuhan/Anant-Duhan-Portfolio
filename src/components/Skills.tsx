import { motion } from 'framer-motion'
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
        <motion.div className="h-full rounded-full"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${pct}%` } : { width: '0%' }}
          transition={{ duration: 1.2, delay: delay / 1000, ease: "easeOut" }}
          style={{ background: 'linear-gradient(90deg, #7C6AF7, #A78BFA)' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="skills" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto" ref={ref as React.RefObject<HTMLDivElement>}>
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">
          // technical skills
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">
          What I work with
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="space-y-10">
            {SKILLS.map((group, gi) => (
              <div key={group.group}>
                <div className="font-mono text-[10px] text-accent tracking-widest mb-4 uppercase">{group.group}</div>
                {group.items.map((s, si) => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} inView={inView} delay={gi * 200 + si * 100} />
                ))}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}>
            <div className="font-mono text-[10px] text-accent tracking-widest mb-4 uppercase">Full Stack</div>
            <div className="flex flex-wrap gap-2.5">
              {TECH_CHIPS.map((chip, i) => (
                <motion.span key={chip}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.25 + i * 0.035, duration: 0.35, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium
                    border border-gray-200 dark:border-dark-border2
                    bg-white dark:bg-dark-surface text-gray-600 dark:text-gray-400
                    hover:border-accent hover:text-accent hover:bg-accent/5
                    transition-colors duration-200 cursor-default">
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
