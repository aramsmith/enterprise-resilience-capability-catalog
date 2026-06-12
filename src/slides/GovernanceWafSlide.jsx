import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'waf', label: 'WAF Reliability pillar', body: 'Microsoft’s Well-Architected guidance for designing and reviewing for reliability.', tag: 'Well-Architected Framework' },
  { id: 'tiers', label: 'RTO / RPO tiering', body: 'Classify workloads and set explicit, signed-off recovery targets per tier.', tag: 'MVC · recovery tiers' },
  { id: 'sla', label: 'Composite SLA', body: 'Calculate realistic end-to-end availability from every dependency in the path.', tag: 'SLA modeling' },
  { id: 'policy', label: 'Policy guardrails', body: 'Enforce zone redundancy, backup, and immutability automatically at scale.', tag: 'Azure Policy' },
  { id: 'missioncritical', label: 'Mission-Critical patterns', body: 'Battle-tested reference architecture for maximum-reliability workloads.', tag: 'Azure Mission-Critical' },
  { id: 'reviews', label: 'Reliability reviews', body: 'Structured assessments that find single points of failure before incidents do.', tag: 'WAF review' },
]

export default function GovernanceWafSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="governance"
      eyebrow="Governance & assurance"
      title="Make resilience a requirement, not a hope"
      lead="Targets, guardrails, and reference architectures turn good intentions into enforceable, audited standards."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Governance & assurance"
    />
  )
}
