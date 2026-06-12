/**
 * Shared SVG primitives for reference-architecture diagrams.
 * Colors come from the theme via the `arch*` global classes defined in
 * ArchitectureSlide.module.css.
 */

export function ArchDefs() {
  return (
    <defs>
      <marker id="archArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)" />
      </marker>
      <marker id="archArrowCyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--cyan)" />
      </marker>
    </defs>
  )
}

export function Region({ x, y, w, h, label, rx = 14 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} className="archRegion" />
      <text x={x + 16} y={y + 24} fontSize="14" fontWeight="700" className="archLabel">
        {label}
      </text>
    </g>
  )
}

export function Node({ x, y, w, h = 46, label, sub, variant = 'node', rx = 9 }) {
  const cls = variant === 'accent' ? 'archNodeAccent' : variant === 'global' ? 'archGlobal' : 'archNode'
  const cx = x + w / 2
  const labelY = sub ? y + h / 2 - 3 : y + h / 2 + 4
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} className={cls} />
      <text x={cx} y={labelY} fontSize="12.5" fontWeight="700" textAnchor="middle" className="archLabel">
        {label}
      </text>
      {sub ? (
        <text x={cx} y={y + h / 2 + 13} fontSize="10" textAnchor="middle" className="archMuted">
          {sub}
        </text>
      ) : null}
    </g>
  )
}

export function Flow({ d, repl = false }) {
  return <path d={d} className={repl ? 'archRepl' : 'archFlow'} markerEnd={`url(#${repl ? 'archArrowCyan' : 'archArrow'})`} />
}

export function FlowLabel({ x, y, children, color }) {
  return (
    <text x={x} y={y} fontSize="10.5" fontWeight="600" textAnchor="middle" fill={color || 'var(--muted-foreground)'} fontFamily="system-ui, sans-serif">
      {children}
    </text>
  )
}
