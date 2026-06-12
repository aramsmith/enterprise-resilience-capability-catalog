import { BottomBar, Slide } from '@deckio/deck-engine'
import ParticleField from '../components/ParticleField.jsx'
import SlideNumber from '../components/SlideNumber.jsx'
import styles from './DecisionMatrixSlide.module.css'

const ROWS = [
  {
    id: 'tier0',
    scenario: 'Mission-critical (Tier 0)',
    rpo: '~0',
    rto: 'Seconds',
    services: 'Multi-region active-active · Availability Zones · Front Door · Cosmos DB multi-write · RA-GZRS',
  },
  {
    id: 'tier1',
    scenario: 'Business-critical (Tier 1)',
    rpo: 'Seconds–min',
    rto: 'Minutes',
    services: 'Zone-redundant PaaS · SQL auto-failover groups · Site Recovery · GZRS storage',
  },
  {
    id: 'tier2',
    scenario: 'Standard (Tier 2)',
    rpo: 'Minutes–hours',
    rto: 'Hours',
    services: 'Single region + zones · geo-redundant backup · Site Recovery · GRS',
  },
  {
    id: 'cyber',
    scenario: 'Ransomware / cyber event',
    rpo: 'Last clean point',
    rto: 'Hours–days',
    services: 'Immutable vaults · MUA · clean-room recovery · Microsoft Sentinel · Defender',
  },
  {
    id: 'tier3',
    scenario: 'Dev / test (Tier 3)',
    rpo: 'Hours–day',
    rto: 'Best effort',
    services: 'LRS / ZRS · IaC redeploy-from-code · GitOps reconciliation',
  },
]

export default function DecisionMatrixSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <ParticleField />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Choosing the right pattern</p>
        <h2 className={styles.title}>Let RTO and RPO drive the architecture</h2>
        <p className={styles.lead}>
          Resilience is not one-size-fits-all. Classify each workload, then pick the matching capabilities from the catalog.
        </p>

        <div className={styles.table}>
          <div className={`${styles.row} ${styles.head}`}>
            <span className={styles.cScenario}>Scenario / tier</span>
            <span className={styles.cTarget}>RPO</span>
            <span className={styles.cTarget}>RTO</span>
            <span className={styles.cServices}>Recommended Azure capabilities</span>
          </div>
          {ROWS.map((r) => (
            <div key={r.id} className={styles.row}>
              <span className={styles.cScenario}>{r.scenario}</span>
              <span className={styles.cTarget}>{r.rpo}</span>
              <span className={styles.cTarget}>{r.rto}</span>
              <span className={styles.cServices}>{r.services}</span>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Azure Resiliency & Recovery · Decision matrix" />
      <SlideNumber index={index} />
    </Slide>
  )
}
