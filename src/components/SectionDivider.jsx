import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import ParticleField from './ParticleField.jsx'
import SlideNumber from './SlideNumber.jsx'
import styles from './SectionDivider.module.css'

function DividerHero() {
  return (
    <svg className={styles.hero} viewBox="0 0 460 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <radialGradient id="divCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="55%" stopColor="var(--cyan)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="divRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
      </defs>

      <circle cx="230" cy="230" r="180" fill="url(#divCenter)" className={styles.halo} />

      <circle cx="230" cy="230" r="170" fill="none" stroke="url(#divRing)" strokeWidth="1.3" strokeOpacity="0.55" strokeDasharray="2 8" className={styles.ringSlow} />
      <circle cx="230" cy="230" r="128" fill="none" stroke="url(#divRing)" strokeWidth="1.6" strokeOpacity="0.7" />
      <circle cx="230" cy="230" r="86" fill="none" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.85" />

      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = 128
        const cx = 230 + r * Math.cos((deg * Math.PI) / 180)
        const cy = 230 + r * Math.sin((deg * Math.PI) / 180)
        return <circle key={deg} cx={cx} cy={cy} r="5.5" fill="var(--background)" stroke="var(--accent)" strokeWidth="1.6" />
      })}

      {/* central shield glyph */}
      <g transform="translate(230 230)">
        <path
          d="M0 -44 L36 -28 V8 Q36 40 0 56 Q-36 40 -36 8 V-28 Z"
          fill="color-mix(in srgb, var(--accent) 16%, transparent)"
          stroke="var(--accent)"
          strokeWidth="2.4"
        />
        <path d="M-15 2 L-3 16 L18 -12" fill="none" stroke="var(--accent)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

/**
 * Reusable section divider. Big phase kicker + two-tone statement + sub line,
 * paired with a glowing concentric-ring hero.
 */
export default function SectionDivider({ index, idBase, kicker, titleA, titleB, sub, footer }) {
  return (
    <Slide index={index} className={styles.divider}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orbA}`} />
      <div className={`orb ${styles.orbB}`} />
      <ParticleField />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.textBlock}>
          <Editable as="p" id={`${idBase}.kicker`} className={styles.kicker}>
            {kicker}
          </Editable>
          <h2 className={styles.statement}>
            <Editable as="span" id={`${idBase}.titleA`} className={styles.statementA}>
              {titleA}
            </Editable>{' '}
            <Editable as="span" id={`${idBase}.titleB`} className={styles.statementB}>
              {titleB}
            </Editable>
          </h2>
          <Editable as="p" id={`${idBase}.sub`} multiline className={styles.sub}>
            {sub}
          </Editable>
        </div>

        <div className={styles.heroWrap} aria-hidden="true">
          <DividerHero />
        </div>
      </div>

      <BottomBar text={<Editable as="span" id={`${idBase}.footer`}>{footer}</Editable>} />
      <SlideNumber index={index} />
    </Slide>
  )
}
