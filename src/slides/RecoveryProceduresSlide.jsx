import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'bia', label: 'Business Impact Analysis', body: 'Rank workloads by impact and set the RTO/RPO targets that drive every recovery decision.', tag: 'BIA · MVC tiering' },
  { id: 'runbooks', label: 'Recovery runbooks', body: 'Step-by-step, owned, version-controlled procedures for each critical service.', tag: 'Documented runbooks' },
  { id: 'failover', label: 'Failover & failback', body: 'Defined, ordered procedures to switch regions and to return safely once resolved.', tag: 'ASR recovery plans' },
  { id: 'validation', label: 'Restore validation', body: 'Regularly test that backups actually restore — and that restored data is clean.', tag: 'Restore testing' },
  { id: 'drills', label: 'DR drills & game days', body: 'Scheduled, non-disruptive exercises that prove RTO/RPO with real people and process.', tag: 'Chaos Studio · test failover' },
  { id: 'comms', label: 'Comms & escalation', body: 'Pre-agreed command structure, decision rights, and stakeholder communication cadence.', tag: 'Crisis comms plan' },
]

export default function RecoveryProceduresSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="recoveryProcedures"
      eyebrow="Recovery procedures & runbooks"
      title="The operational discipline behind resilience"
      lead="Technology recovers systems; procedures recover the business. These practices turn capabilities into dependable outcomes."
      items={ITEMS}
      callout="Every procedure has a named owner, a defined trigger, and a tested last-run date."
      footer="Azure Resiliency & Recovery · Recovery procedures"
    />
  )
}
