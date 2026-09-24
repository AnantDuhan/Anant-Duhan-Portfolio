import { useEffect, useState } from 'react'

function initialTheme(): boolean {
  try {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
  } catch { /* storage unavailable */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
}

export function useTheme() {
  const [dark, setDark] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Only remember the theme once the visitor has chosen one,
  // so everyone else keeps following their system setting.
  const toggle = () =>
    setDark(d => {
      const next = !d
      try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* ignore */ }
      return next
    })

  return { dark, toggle }
}
