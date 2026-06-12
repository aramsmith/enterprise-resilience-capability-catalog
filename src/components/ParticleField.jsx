/**
 * Ambient animated background: soft pulsing glows + drifting speed streaks.
 * Reuses the engine's global `deck-ty-*` classes (already styled in the dark
 * theme) so the motion matches the Thank You slide exactly.
 *
 * Render it right after the orbs and before the content wrapper. The wrapper
 * is an inset:0 layer that clips the streaks to the slide and sits behind
 * content (which uses z-index: 10).
 */
const WRAP_STYLE = {
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 0,
}

export default function ParticleField() {
  return (
    <div style={WRAP_STYLE} aria-hidden="true">
      <div className="deck-ty-glow deck-ty-glow1" />
      <div className="deck-ty-glow deck-ty-glow2" />
      <div className="deck-ty-glow deck-ty-glow3" />
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className={`deck-ty-streak deck-ty-streak${i}`} />
      ))}
    </div>
  )
}
