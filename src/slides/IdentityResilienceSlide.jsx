import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'backupauth', label: 'Backup authentication', body: 'A resilient, transparent backup auth service keeps sign-ins working during disruption.', tag: 'Entra backup authentication' },
  { id: 'defaults', label: 'Resilience defaults', body: 'Cached credentials and tuned token lifetimes ride out transient outages.', tag: 'Microsoft Entra ID' },
  { id: 'breakglass', label: 'Break-glass accounts', body: 'Emergency-access accounts, excluded from policy, restore control in a crisis.', tag: 'Emergency access' },
  { id: 'ca', label: 'Conditional Access', body: 'Risk-based policies that fail safe without locking out legitimate users.', tag: 'Conditional Access' },
  { id: 'multiregion', label: 'Globally distributed identity', body: 'Identity infrastructure runs across regions with no single point of failure.', tag: 'Entra global service' },
  { id: 'recovery', label: 'Recovery of identity objects', body: 'Soft delete and restore for users, groups, and application registrations.', tag: 'Entra soft delete' },
]

export default function IdentityResilienceSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="identity"
      eyebrow="Identity resilience"
      title="If identity is down, everything is down"
      lead="Identity is the new perimeter — and the single most critical dependency to keep resilient."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Identity resilience"
    />
  )
}
