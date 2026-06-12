import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'isolate', label: '01 · Isolate & contain', body: 'Disconnect affected systems and revoke credentials to stop lateral spread.', tag: 'Defender · Sentinel' },
  { id: 'assess', label: '02 · Assess scope', body: 'Determine blast radius and identify the last known-clean recovery point.', tag: 'Incident triage' },
  { id: 'cleanroom', label: '03 · Activate clean room', body: 'Stand up an isolated, hardened recovery environment proven free of compromise.', tag: 'Isolated recovery env' },
  { id: 'restore', label: '04 · Restore from immutable', body: 'Recover from air-gapped, immutable backups protected by Multi-User Authorization.', tag: 'Immutable vault · MUA' },
  { id: 'validate', label: '05 · Validate integrity', body: 'Scan and verify restored systems and data are clean before reconnecting.', tag: 'Integrity checks' },
  { id: 'reentry', label: '06 · Controlled reentry', body: 'Bring services back in dependency order, monitoring closely for reinfection.', tag: 'Staged reentry' },
]

export default function RansomwarePlaybookSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="ransomwarePlaybook"
      eyebrow="Procedure · Ransomware recovery playbook"
      title="A rehearsed sequence for the worst day"
      lead="When prevention fails, a practiced playbook — backed by immutable backups and clean-room recovery — is what brings the business back."
      items={ITEMS}
      callout="Backed by Microsoft Incident Response (MIR) engagement when expert containment and recovery are needed."
      footer="Azure Resiliency & Recovery · Ransomware playbook"
    />
  )
}
