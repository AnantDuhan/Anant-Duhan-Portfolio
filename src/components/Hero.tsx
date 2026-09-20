import profilePhoto from '../assets/profile'
import { STATS } from '../data'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-6 lg:px-16 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,106,247,0.12), transparent)' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="animate-[fade-up_0.6s_ease_forwards]">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium
              text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] mb-6">
              <span className="text-gray-900 dark:text-white">Software</span><br/>
              <span className="gradient-text">Engineer.</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mb-8">
              I build full-stack systems at Bosch and ship open source on the side.
              Angular, React, Node.js — and a published npm package with 44 passing tests.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#projects"
                className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm
                  hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25
                  transition-all flex items-center gap-2">
                View my work <span>↓</span>
              </a>
              <a href="https://github.com/AnantDuhan" target="_blank" rel="noopener"
                className="px-6 py-3 rounded-xl border border-gray-200 dark:border-dark-border2
                  text-gray-600 dark:text-gray-400 font-medium text-sm
                  hover:border-accent hover:text-accent hover:bg-accent/5
                  transition-all flex items-center gap-2">
                GitHub <span>↗</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100 dark:border-dark-border">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 lg:w-80 lg:h-96">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-3xl p-px"
                style={{ background: 'linear-gradient(135deg, #7C6AF7, transparent 60%)' }}>
                <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-100 dark:bg-dark-surface">
                  <img src={profilePhoto} alt="Anant Duhan"
                    className="w-full h-full object-cover object-top" />
                </div>
              </div>
              {/* Glow under photo */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full
                bg-accent/30 blur-2xl pointer-events-none" />
              {/* Badge */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl
                bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border2
                shadow-xl text-sm font-semibold text-gray-800 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to work
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
