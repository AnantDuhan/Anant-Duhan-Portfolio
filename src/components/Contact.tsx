import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { CONTACT_LINKS } from '../data'

export default function Contact() {
  const { ref, inView } = useInView(0.3)

  return (
    <section id="contact" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center" ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.h2
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            <span className="text-gray-900 dark:text-white">Let's build</span><br/>
            <span className="gradient-text">something great.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto">
            Open to full-time roles, open source collaborations, and interesting problems.
            Based in India — open to remote.
          </motion.p>

          <div className="flex justify-center gap-5 flex-wrap">
            {CONTACT_LINKS.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.92 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-4 rounded-xl
                    border border-gray-200 dark:border-dark-border2
                    bg-white dark:bg-dark-surface
                    text-gray-600 dark:text-gray-400 text-sm font-medium
                    hover:border-accent hover:text-accent hover:bg-accent/5
                    transition-colors duration-200 shadow-sm hover:shadow-md">
                  <Icon size={17} />
                  <span>{link.label}</span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
