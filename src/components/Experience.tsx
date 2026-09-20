import { useInView } from '../hooks/useInView'
import { EXPERIENCE } from '../data'

export default function Experience() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="experience" className="py-28 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">// work history</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">
          Experience
        </h2>

        <div className="relative pl-8 border-l-2 border-gray-100 dark:border-dark-border2" ref={ref}>
          {EXPERIENCE.map((item, i) => (
            <div key={item.role}
              className={`relative mb-14 last:mb-0 transition-all duration-700
                ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              style={{ transitionDelay: `${i * 150}ms` }}>

              {/* Dot */}
              <div className="absolute -left-[2.45rem] top-1.5 w-3 h-3 rounded-full bg-accent
                ring-4 ring-white dark:ring-dark-bg shadow-md shadow-accent/40" />

              <span className="font-mono text-xs font-medium text-accent block mb-1">{item.period}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">{item.company}</p>

              <ul className="space-y-2">
                {item.points.map(p => (
                  <li key={p} className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="text-accent text-xs mt-[3px] flex-shrink-0">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
