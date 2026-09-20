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
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    text-gray-500 dark:text-gray-400
                    hover:text-accent
                    transition-colors duration-200
                  "
                >
                  <Icon size={17} />
                  <span>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
