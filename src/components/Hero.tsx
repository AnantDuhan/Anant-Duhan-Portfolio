import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import profilePhoto from '../assets/profile'
import { STATS } from '../data'

function MagneticPhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.08)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.08)
  }
  function onMouseLeave() { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative w-72 h-80 lg:w-80 lg:h-96">
      <div className="absolute inset-0 rounded-3xl p-px"
        style={{ background: 'linear-gradient(135deg, #7C6AF7, transparent 60%)' }}>
        <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-100 dark:bg-dark-surface">
          <img src={profilePhoto} alt="Anant Duhan" className="w-full h-full object-cover object-top" />
        </div>
      </div>
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full bg-accent/30 blur-2xl pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
        className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl
          bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border2
          shadow-xl text-sm font-semibold text-gray-800 dark:text-white">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Open to work
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,106,247,0.12), transparent)' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium
                text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] mb-6">
              <span className="text-gray-900 dark:text-white">Software</span><br/>
              <span className="gradient-text">Engineer.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mb-8">
              Building full-stack systems at Bosch by day, and shipping real products on the side.
              Creator of <strong className="text-gray-700 dark:text-gray-300">MAISON</strong> — a live
              e-commerce platform with AI recommendations and real-time order tracking.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-wrap gap-3 mb-12">
              <motion.a href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm
                  hover:shadow-lg hover:shadow-accent/25 transition-shadow flex items-center gap-2">
                See my work ↓
              </motion.a>
              <motion.a href="https://maisonorderplanning.in" target="_blank" rel="noopener"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl border border-gray-200 dark:border-dark-border2
                  text-gray-600 dark:text-gray-400 font-medium text-sm
                  hover:border-accent hover:text-accent hover:bg-accent/5 transition-all flex items-center gap-2">
                MAISON ↗
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-100 dark:border-dark-border">
              {STATS.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.08, duration: 0.4 }}>
                  <div className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="flex justify-center lg:justify-end">
            <MagneticPhoto />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
