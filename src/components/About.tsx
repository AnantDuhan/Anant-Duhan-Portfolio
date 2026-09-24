import { ABOUT_CARDS } from '../data'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <span className="font-mono text-xs font-medium text-accent tracking-widest block mb-4">// about me</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-8 text-gray-900 dark:text-white">
            Platforms other<br />engineers rely on.
          </h2>
          <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
            <p>
              I'm a <strong className="text-gray-900 dark:text-white font-semibold">Software Engineer at Bosch Global Software Technologies</strong>,
              working on the PMT Architecture Reports platform — Angular frontend, Node.js API, and automation tooling used by hundreds of engineers.
            </p>
            <p>
              Outside work I build in the open. My latest is <strong className="text-gray-900 dark:text-white font-semibold">MAISON</strong>, a full-stack
              e-commerce platform with payments, real-time order tracking and AI review summaries.
            </p>
            <p>
              B.Tech Computer Science from <strong className="text-gray-900 dark:text-white font-semibold">SRM Institute of Science & Technology</strong>.
              Based in Bangalore, India — open to remote.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ABOUT_CARDS.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border">
              <Icon size={20} className="text-accent mb-3" aria-hidden="true" />
              <div className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
