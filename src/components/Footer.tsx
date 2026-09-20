import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Footer() {
  const { ref, inView } = useInView(0.5)
  return (
    <motion.footer
      ref={ref as React.RefObject<HTMLElement>}
      initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-6 px-6 lg:px-16 border-t border-gray-100 dark:border-dark-border
        flex flex-col sm:flex-row justify-between items-center gap-2
        text-xs text-gray-400 dark:text-gray-600">
      <span>© 2026 Anant Duhan</span>
      <span>Built with React + Tailwind CSS + Framer Motion</span>
    </motion.footer>
  )
}
