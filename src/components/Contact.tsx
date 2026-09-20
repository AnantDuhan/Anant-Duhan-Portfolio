import { useInView } from '../hooks/useInView'
import { CONTACT_LINKS } from '../data'

export default function Contact() {
  const { ref, inView } = useInView(0.3)

  return (
    <section id="contact" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center" ref={ref}>
          <h2 className={`text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6
            transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gray-900 dark:text-white">Let's build</span><br/>
            <span className="gradient-text">something great.</span>
          </h2>

          <p className={`text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto
            transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            Open to full-time roles, open source collaborations, and interesting problems.
            Based in India — open to remote.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {CONTACT_LINKS.map((l, i) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener"
                className={`flex items-center gap-2 px-5 py-3 rounded-xl
                  border border-gray-200 dark:border-dark-border2
                  bg-white dark:bg-dark-surface
                  text-gray-600 dark:text-gray-400 text-sm font-medium
                  hover:border-accent hover:text-accent hover:bg-accent/5
                  hover:-translate-y-1 transition-all duration-200
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${200 + i * 80}ms`, transitionDuration: '600ms' }}>
                <span>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
