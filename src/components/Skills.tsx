import { SKILL_GROUPS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-3">// technical skills</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">
          What I work with
        </h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {SKILL_GROUPS.map(({ group, items }) => (
            <div key={group}>
              <dt className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{group}</dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item}
                    className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 dark:border-dark-border2
                      bg-white dark:bg-dark-surface text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
