import { CONTACT_LINKS, EMAIL } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 lg:px-16 bg-gray-50 dark:bg-dark-bg2">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          <span className="text-gray-900 dark:text-white">Let's build</span><br />
          <span className="gradient-text">something great.</span>
        </h2>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4 max-w-md mx-auto">
          Open to full-time roles, open source collaborations, and interesting problems.
          Based in India — open to remote.
        </p>
        <a href={`mailto:${EMAIL}`}
          className="inline-block mb-10 font-mono text-sm text-accent hover:underline underline-offset-4">
          {EMAIL}
        </a>

        <div className="flex justify-center gap-4 flex-wrap">
          {CONTACT_LINKS.map(({ icon: Icon, label, href, external }) => (
            <a key={label} href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl
                border border-gray-200 dark:border-dark-border2 bg-white dark:bg-dark-surface
                text-gray-600 dark:text-gray-400 text-sm font-medium
                hover:border-accent hover:text-accent transition-colors">
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
