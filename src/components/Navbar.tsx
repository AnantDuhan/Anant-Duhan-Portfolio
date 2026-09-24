import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

interface Props { dark: boolean; toggle: () => void }

export default function Navbar({ dark, toggle }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 lg:px-16 transition-all duration-300
          ${scrolled
            ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-gray-200 dark:border-dark-border'
            : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <a href="#hero" className="font-bold text-lg tracking-tight text-gray-900 dark:text-white shrink-0">
          Anant<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg border border-gray-200 dark:border-dark-border2
              bg-white dark:bg-dark-surface
              flex items-center justify-center
              text-gray-500 dark:text-gray-400
              hover:border-accent hover:text-accent transition-colors"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={dark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Let's talk
          </motion.a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg
              border border-gray-200 dark:border-dark-border2
              bg-white dark:bg-dark-surface
              text-gray-500 dark:text-gray-400
              hover:border-accent hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — full dropdown below nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 inset-x-0 z-40 md:hidden
              bg-white dark:bg-dark-bg
              border-b border-gray-200 dark:border-dark-border
              shadow-lg dark:shadow-black/30"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium text-gray-700 dark:text-gray-300
                    hover:text-accent dark:hover:text-accent transition-colors
                    border-b border-gray-100 dark:border-dark-border last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold text-center
                  hover:opacity-90 transition-opacity"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
