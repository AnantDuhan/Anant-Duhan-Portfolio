import { createContext, useContext, useId, type ReactNode } from 'react'

const MarkerContext = createContext('arrow')

export function Diagram({ title, desc, viewBox, minWidth = 720, caption, children }: {
  title: string; desc: string; viewBox: string; minWidth?: number; caption?: ReactNode; children: ReactNode
}) {
  const raw = useId()
  const id = `d${raw.replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-dark-border bg-gray-50 dark:bg-dark-bg2 p-4">
        <svg viewBox={viewBox} style={{ minWidth }} className="w-full h-auto font-sans" role="img"
          aria-labelledby={`${id}-t ${id}-d`}>
          <title id={`${id}-t`}>{title}</title>
          <desc id={`${id}-d`}>{desc}</desc>
          <defs>
            <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-gray-400 dark:fill-gray-500" />
            </marker>
          </defs>
          <MarkerContext.Provider value={`${id}-arrow`}>{children}</MarkerContext.Provider>
        </svg>
      </div>
      {caption && <figcaption className="text-xs text-gray-500 mt-3">{caption}</figcaption>}
    </figure>
  )
}

export function Box({ x, y, w, h = 64, title, sub, accent = false }: {
  x: number; y: number; w: number; h?: number; title: string; sub?: string; accent?: boolean
}) {
  const cy = y + h / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} strokeWidth={1.5}
        className={accent ? 'fill-accent/10 stroke-accent' : 'fill-white dark:fill-dark-surface stroke-gray-300 dark:stroke-dark-border2'} />
      <text x={x + w / 2} y={sub ? cy - 4 : cy + 5} textAnchor="middle"
        className="fill-gray-900 dark:fill-white text-[14px] font-semibold">{title}</text>
      {sub && (
        <text x={x + w / 2} y={cy + 15} textAnchor="middle"
          className="fill-gray-500 dark:fill-gray-400 text-[11px]">{sub}</text>
      )}
    </g>
  )
}

export function Arrow({ d, label, lx, ly, dashed = false, anchor = 'middle' }: {
  d: string; label?: string; lx?: number; ly?: number; dashed?: boolean; anchor?: 'start' | 'middle' | 'end'
}) {
  const marker = useContext(MarkerContext)
  return (
    <g>
      <path d={d} fill="none" strokeWidth={1.5} markerEnd={`url(#${marker})`}
        strokeDasharray={dashed ? '5 4' : undefined}
        className="stroke-gray-400 dark:stroke-gray-500" />
      {label && (
        <text x={lx} y={ly} textAnchor={anchor} className="fill-gray-500 dark:fill-gray-400 text-[11px]">{label}</text>
      )}
    </g>
  )
}

/** Sequence-diagram participant: header box plus a dashed lifeline. */
export function Lifeline({ x, label, sub, bottom, accent = false }: {
  x: number; label: string; sub?: string; bottom: number; accent?: boolean
}) {
  return (
    <g>
      <line x1={x} y1={68} x2={x} y2={bottom} strokeDasharray="4 5" strokeWidth={1}
        className="stroke-gray-300 dark:stroke-dark-border2" />
      <Box x={x - 80} y={16} w={160} h={52} title={label} sub={sub} accent={accent} />
    </g>
  )
}

/** Horizontal sequence message between two lifelines. */
export function Message({ from, to, y, label, dashed = false }: {
  from: number; to: number; y: number; label: string; dashed?: boolean
}) {
  const dir = to > from ? 1 : -1
  return (
    <Arrow d={`M${from + dir * 4} ${y} L${to - dir * 6} ${y}`} dashed={dashed}
      label={label} lx={(from + to) / 2} ly={y - 7} />
  )
}

export function Note({ x, y, children }: { x: number; y: number; children: string }) {
  return <text x={x} y={y} className="fill-accent text-[11px] font-medium">{children}</text>
}
