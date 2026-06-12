import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'replication', label: 'Continuous replication', body: 'Replicate Azure, on-prem VMware, Hyper-V, and physical servers with low RPO.', tag: 'Azure Site Recovery' },
  { id: 'plans', label: 'Recovery plans', body: 'Orchestrate multi-tier failover with ordering, scripts, and manual approval gates.', tag: 'Recovery Plans' },
  { id: 'drills', label: 'Non-disruptive DR drills', body: 'Test failover into an isolated network without touching production.', tag: 'Test failover' },
  { id: 'failback', label: 'Failback', body: 'Return workloads to the primary site cleanly once the incident is resolved.', tag: 'Planned failback' },
  { id: 'consistent', label: 'App-consistent points', body: 'Capture recovery points that keep applications transactionally consistent.', tag: 'App-consistent snapshots' },
  { id: 'automation', label: 'Automation hooks', body: 'Inject runbooks to reshape networking and configuration during failover.', tag: 'Azure Automation' },
]

export default function SiteRecoverySlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="siteRecovery"
      eyebrow="Azure Site Recovery"
      title="Orchestrated failover for whole workloads"
      lead="Continuous replication plus tested recovery plans turn a regional disaster into a controlled, rehearsed failover."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Site Recovery"
    />
  )
}
