import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'

export function CaseStudyLayout({ eyebrow, title, intro, stack, next, children }: {
  eyebrow: string
  title: string
  intro: ReactNode
  stack: string[]
  next?: { label: string; href: string }
  children: ReactNode
}) {
  return (
    <main className="px-6 lg:px-16 pt-32 pb-24">
      <article className="max-w-3xl mx-auto">
        <a href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-accent transition-colors mb-10">
          <ArrowLeft size={15} aria-hidden="true" /> Back to projects
        </a>

        <p className="font-mono text-xs text-accent tracking-widest mb-3">{eyebrow}</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
          {title}
        </h1>
        <div className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{intro}</div>

        <div className="mt-12 space-y-12 text-gray-600 dark:text-gray-300 leading-relaxed">
          {children}

          <Section title="Stack">
            <div className="flex flex-wrap gap-2">
              {stack.map(t => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-dark-bg3
                  text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-dark-border">{t}</span>
              ))}
            </div>
          </Section>
        </div>

        {next && (
          <a href={next.href}
            className="mt-16 block rounded-2xl border border-gray-100 dark:border-dark-border p-6
              hover:border-accent transition-colors">
            <span className="text-xs text-gray-500 block mb-1">Next case study</span>
            <span className="font-semibold text-gray-900 dark:text-white">{next.label}</span>
          </a>
        )}
      </article>
    </main>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export function Code({ children }: { children: ReactNode }) {
  return <code className="font-mono text-sm px-1 py-0.5 rounded bg-gray-100 dark:bg-dark-bg3">{children}</code>
}
