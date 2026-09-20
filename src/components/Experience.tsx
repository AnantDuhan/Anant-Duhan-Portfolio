import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { EXPERIENCE } from '../data'

export default function Experience() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="experience" className="py-28 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">
          // work history
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">
          Experience
        </motion.h2>

        <div className="relative pl-8" ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Animated timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100 dark:bg-dark-border2 overflow-hidden">
            <motion.div className="w-full bg-accent"
              initial={{ height: '0%' }}
              animate={inView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }} />
          </div>

          {EXPERIENCE.map((item, i) => (
            <motion.div key={item.role}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              className="relative mb-14 last:mb-0">

              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 300 }}
                className="absolute -left-[2.45rem] top-1.5 w-3 h-3 rounded-full bg-accent
                  ring-4 ring-white dark:ring-dark-bg shadow-md shadow-accent/40" />

              <span className="font-mono text-xs font-medium text-accent block mb-1">{item.period}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">{item.company}</p>

              <ul className="space-y-2">
                {item.points.map((p, pi) => (
                  <motion.li key={p}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.15 + pi * 0.05 }}
                    className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="text-accent text-xs mt-[3px] flex-shrink-0">→</span>
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
