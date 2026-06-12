import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'cleanroom', label: 'Clean-room recovery', body: 'Restore into an isolated, hardened environment proven free of compromise.', tag: 'Isolated recovery environment' },
  { id: 'airgap', label: 'Air-gapped immutability', body: 'Logically isolated, immutable copies sit beyond the reach of attackers.', tag: 'Immutable vaults · MUA' },
  { id: 'detection', label: 'Threat detection & response', body: 'Cloud-native SIEM and XDR detect, correlate, and respond across the estate.', tag: 'Microsoft Sentinel · Defender' },
  { id: 'keys', label: 'Key & secret protection', body: 'Purge protection and managed HSM keep keys recoverable and tamper-resistant.', tag: 'Key Vault · Managed HSM' },
  { id: 'ir', label: 'Incident response', body: 'Expert-led containment and recovery when an incident actually hits.', tag: 'Microsoft Incident Response' },
  { id: 'confidential', label: 'Confidential computing', body: 'Protect data in use so even a compromised host cannot read it.', tag: 'Confidential VMs / containers' },
]

export default function CyberResilienceSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="cyber"
      eyebrow="Cyber resilience & ransomware recovery"
      title="Engineered for the worst day"
      lead="When prevention fails, isolation and a trusted, clean recovery path are what bring the business back online."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Cyber resilience"
    />
  )
}
