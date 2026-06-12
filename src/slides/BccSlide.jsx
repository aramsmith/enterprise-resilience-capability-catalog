import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'inventory', label: 'Unified inventory', body: 'See protection status for every resource across subscriptions and regions.', tag: 'Business Continuity Center' },
  { id: 'protectable', label: 'Protectable resources', body: 'Surface what is unprotected and remediate the gaps before they bite.', tag: 'Coverage insights' },
  { id: 'together', label: 'Backup + DR together', body: 'Manage Azure Backup and Site Recovery from a single, consistent experience.', tag: 'Backup · ASR' },
  { id: 'security', label: 'Security posture', body: 'Track immutability, soft delete, and MUA coverage across every vault.', tag: 'Security levels' },
  { id: 'governance', label: 'Governance at scale', body: 'Drive consistency with Azure Policy and Resource Graph reporting.', tag: 'Azure Policy · Resource Graph' },
  { id: 'compliance', label: 'Compliance reporting', body: 'Demonstrate RPO/RTO and retention adherence for audits and regulators.', tag: 'Compliance views' },
]

export default function BccSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="bcc"
      eyebrow="Azure Business Continuity Center"
      title="One pane of glass for continuity"
      lead="Stop managing backup and DR in silos — see, govern, and act on resilience posture across the whole estate."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Business Continuity Center"
    />
  )
}
