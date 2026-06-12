import { useSlides } from '@deckio/deck-engine'

/**
 * Fixed slide-number badge in the bottom-right corner, shown as "x / y".
 * `index` is the slide's own zero-based position; total comes from the engine.
 */
const STYLE = {
  position: 'absolute',
  right: '32px',
  bottom: '14px',
  zIndex: 110,
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: '3px',
  fontSize: '12px',
  fontWeight: 600,
  fontVariantNumeric: 'tabular-nums',
  letterSpacing: '0.5px',
  color: 'var(--muted-foreground)',
  pointerEvents: 'none',
  fontFamily: 'system-ui, sans-serif',
}

const CUR = { color: 'var(--accent)', fontWeight: 800, fontSize: '13px' }
const SEP = { opacity: 0.5 }

export default function SlideNumber({ index = 0 }) {
  const { totalSlides } = useSlides()
  return (
    <div style={STYLE} aria-label={`Slide ${index + 1} of ${totalSlides}`}>
      <span style={CUR}>{index + 1}</span>
      <span style={SEP}>/</span>
      <span>{totalSlides}</span>
    </div>
  )
}
