/**
 * SAMPLE CONTENT ONLY
 * This slide contains scaffolded placeholder copy.
 * Agents must not use it as factual project context until the user replaces it.
 */
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import ParticleField from '../components/ParticleField.jsx'
import SlideNumber from '../components/SlideNumber.jsx'
import styles from './CoverSlide.module.css'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />
      <ParticleField />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="cover.eyebrow" className={styles.eyebrow}>The complete capability catalog</Editable>
          <h1>
            <Editable as="span" id="cover.titleBefore">Azure Resiliency &</Editable> <Editable as="span" id="cover.titleHighlight" className={styles.highlight}>Recovery</Editable>
          </h1>
          <Editable as="p" id="cover.subtitle" multiline className={styles.subtitle}>
            Every resiliency and recovery option Azure offers — platform, infrastructure, immutable recovery, backup &amp; DR, and operational assurance.
          </Editable>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Prepared by</span>
              <span className={styles.metaValue}>Aram Smith</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>2026</span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">Azure Resiliency &amp; Recovery</Editable>} />
      <SlideNumber index={0} />
    </Slide>
  )
}
