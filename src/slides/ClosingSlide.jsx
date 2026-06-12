import { BottomBar, Slide } from '@deckio/deck-engine'
import ParticleField from '../components/ParticleField.jsx'
import SlideNumber from '../components/SlideNumber.jsx'
import styles from './ClosingSlide.module.css'

const PRINCIPLES = [
  {
    id: 'layer',
    title: 'Layer it',
    body: 'No single feature is resilience. Combine platform, infrastructure, data, and application controls into defense in depth.',
  },
  {
    id: 'targets',
    title: 'Set targets first',
    body: 'Let RTO, RPO, and minimum viable capability drive every architecture choice — never the other way round.',
  },
  {
    id: 'test',
    title: 'Test relentlessly',
    body: 'Chaos experiments and scheduled DR drills turn resilience from an assumption into measured, audited proof.',
  },
]

export default function ClosingSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />
      <ParticleField />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Bringing it together</p>
        <h2 className={styles.title}>
          Resilience is a <span className={styles.highlight}>portfolio</span>, not a product
        </h2>
        <p className={styles.lead}>
          The catalog is broad on purpose. The art is selecting the right combination for each workload — and proving it works before you need it.
        </p>

        <div className={styles.cards}>
          {PRINCIPLES.map((p, i) => (
            <div key={p.id} className={styles.card}>
              <span className={styles.cardNo}>0{i + 1}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <span className={styles.ctaMark} aria-hidden="true">→</span>
          <p className={styles.ctaText}>
            Next: map your most critical workloads to this catalog and build the target resilience architecture.
          </p>
        </div>
      </div>

      <BottomBar text="Azure Resiliency & Recovery · Bringing it together" />
      <SlideNumber index={index} />
    </Slide>
  )
}
