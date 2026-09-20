import { useInView } from '../hooks/useInView'
import { ABOUT_CARDS } from '../data'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start" ref={ref}>

          {/* Left */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-4">// about me</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-8
              text-gray-900 dark:text-white">
              Building things<br/>that scale.
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a <strong className="text-gray-900 dark:text-white font-semibold">Software Engineer at Bosch Global Software Technologies</strong>,
                working on the PMT Architecture Reports platform — Angular frontend,
                Node.js API, and automation tooling used by hundreds of engineers.
              </p>
              <p>
                Outside work I build in the open. My latest:{' '}
                <strong className="text-gray-900 dark:text-white font-semibold">@anantduhan/limiter-core</strong>
                {' '}— a production-grade distributed rate limiter that swaps between
                memory and Redis with a single config change.
              </p>
              <p>
                B.Tech Computer Science from{' '}
                <strong className="text-gray-900 dark:text-white font-semibold">SRM Institute of Science & Technology</strong>.
                Based in Coimbatore, India — open to remote.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-150
            ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            {ABOUT_CARDS.map((card, i) => (
              <div key={card.title}
                className="p-5 rounded-2xl bg-white dark:bg-dark-surface
                  border border-gray-100 dark:border-dark-border
                  hover:border-gray-200 dark:hover:border-dark-border2
                  hover:-translate-y-1 transition-all duration-200 group"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{card.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
