import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">// work history</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">Experience</h2>

        <ol className="relative pl-8 border-l border-gray-200 dark:border-dark-border2">
          {EXPERIENCE.map((item) => (
            <li key={`${item.role}-${item.company}`} className="relative mb-16 last:mb-0">
              <span aria-hidden="true"
                className="absolute -left-[2.4rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-dark-bg" />
              <span className="font-mono text-xs font-medium text-accent block mb-1">{item.period}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
              <p className="text-sm text-gray-500 mb-5">{item.company}</p>
              <ul className="space-y-2 max-w-3xl">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="text-accent text-xs mt-[3px] flex-shrink-0" aria-hidden="true">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
