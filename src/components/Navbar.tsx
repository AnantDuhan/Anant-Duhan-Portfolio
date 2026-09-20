import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { NAV_LINKS } from '../data'

interface Props { dark: boolean; toggle: () => void }

export default function Navbar({ dark, toggle }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 lg:px-16 transition-all duration-300
      ${scrolled
        ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-gray-200 dark:border-dark-border'
        : 'bg-transparent'}`}>

      <a href="#hero" className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">
        Anant<span className="text-accent">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button onClick={toggle}
          className="w-9 h-9 rounded-lg border border-gray-200 dark:border-dark-border2 bg-white dark:bg-dark-surface
            flex items-center justify-center text-gray-500 dark:text-gray-400
            hover:border-accent hover:text-accent transition-all">
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <a href="#contact"
          className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold
            hover:opacity-90 hover:-translate-y-px transition-all">
          Let's talk
        </a>
      </div>
    </nav>
  )
}
