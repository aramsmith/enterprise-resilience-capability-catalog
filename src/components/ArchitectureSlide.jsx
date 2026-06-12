import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import ParticleField from './ParticleField.jsx'
import SlideNumber from './SlideNumber.jsx'
import styles from './ArchitectureSlide.module.css'

/**
 * Reusable reference-architecture slide: eyebrow + title + short lead, a large
 * diagram card (pass an <svg> via `children`), and a bottom strip of legend /
 * target chips. Source is text from learn.microsoft.com reference architectures.
 */
export default function ArchitectureSlide({
  index,
  idBase,
  eyebrow,
  title,
  lead,
  chips,
  footer,
  source,
  sourceUrl,
  children,
}) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <ParticleField />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id={`${idBase}.eyebrow`} className={styles.eyebrow}>
            {eyebrow}
          </Editable>
          <Editable as="h2" id={`${idBase}.title`} className={styles.title}>
            {title}
          </Editable>
          <Editable as="p" id={`${idBase}.lead`} multiline className={styles.lead}>
            {lead}
          </Editable>
        </header>

        <div className={styles.diagramCard}>
          <div className={styles.diagram}>{children}</div>
        </div>

        <footer className={styles.footChips}>
          <div className={styles.chips}>
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                {c}
              </span>
            ))}
          </div>
          {source ? (
            sourceUrl ? (
              <a
                className={styles.source}
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source}
              </a>
            ) : (
              <span className={styles.source}>{source}</span>
            )
          ) : null}
        </footer>
      </div>

      <BottomBar text={<Editable as="span" id={`${idBase}.footer`}>{footer}</Editable>} />
      <SlideNumber index={index} />
    </Slide>
  )
}
