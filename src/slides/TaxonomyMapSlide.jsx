import { BottomBar, Slide } from '@deckio/deck-engine'
import ParticleField from '../components/ParticleField.jsx'
import SlideNumber from '../components/SlideNumber.jsx'
import styles from './TaxonomyMapSlide.module.css'

const COLUMNS = [
  {
    id: 'foundation',
    no: '01',
    name: 'Platform foundation',
    items: ['Regions & region pairs', 'Availability Zones', 'Fault & update domains', 'Hybrid · Arc · Local', 'Edge & sovereign clouds'],
  },
  {
    id: 'infra',
    no: '02',
    name: 'Infrastructure resiliency',
    items: ['Compute · VMSS · AKS', 'Storage redundancy & WORM', 'Databases & geo-replication', 'Networking & global LB', 'Disks & NetApp'],
  },
  {
    id: 'immutable',
    no: '03',
    name: 'Immutable & fast recovery',
    items: ['Immutable OS & images', 'Trusted / Confidential VMs', 'IaC redeploy-from-code', 'GitOps reconciliation', 'Blue-green & canary'],
  },
  {
    id: 'bcdr',
    no: '04',
    name: 'Backup, DR & cyber',
    items: ['Azure Backup · immutable', 'Site Recovery failover', 'Business Continuity Center', 'Clean-room recovery', 'Identity resilience'],
  },
  {
    id: 'operate',
    no: '05',
    name: 'Test, operate & assure',
    items: ['Chaos Studio testing', 'Observability', 'AIOps · SRE Agent', 'WAF Reliability pillar', 'Governance & DR drills'],
  },
]

export default function TaxonomyMapSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <ParticleField />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The complete map</p>
        <h2 className={styles.title}>Every Azure resiliency lever, in one picture</h2>
        <p className={styles.lead}>
          Five domains span the whole lifecycle — from the platform you stand on, to how you prove recovery works. The rest of this deck walks each one.
        </p>

        <div className={styles.map}>
          {COLUMNS.map((col) => (
            <section key={col.id} className={styles.col}>
              <header className={styles.colHead}>
                <span className={styles.colNo}>{col.no}</span>
                <h3 className={styles.colName}>{col.name}</h3>
              </header>
              <ul className={styles.colList}>
                {col.items.map((it) => (
                  <li key={it} className={styles.colItem}>
                    {it}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <BottomBar text="Azure Resiliency & Recovery · Capability map" />
      <SlideNumber index={index} />
    </Slide>
  )
}
