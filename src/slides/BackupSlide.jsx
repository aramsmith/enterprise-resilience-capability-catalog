import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'immutable', label: 'Immutable vaults (WORM)', body: 'Lock recovery points so they cannot be modified or deleted during retention.', tag: 'Immutable vault' },
  { id: 'mua', label: 'Multi-user authorization', body: 'Require a second approver for destructive operations, blocking insider misuse.', tag: 'MUA' },
  { id: 'softdelete', label: 'Soft delete', body: 'Retain deleted backups in a recoverable state, even after an explicit delete.', tag: 'Multi-stage soft delete' },
  { id: 'crr', label: 'Cross-region restore', body: 'Restore into the paired region using geo-redundant recovery points.', tag: 'GRS · cross-region restore' },
  { id: 'crosssub', label: 'Cross-subscription', body: 'Separate the backup control plane from the production data plane.', tag: 'Cross-subscription backup' },
  { id: 'coverage', label: 'Wide workload coverage', body: 'Protect VMs, SQL, Files, Blobs, PostgreSQL, and AKS from a single service.', tag: 'Azure Backup' },
]

export default function BackupSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="backup"
      eyebrow="Azure Backup"
      title="Backups attackers can’t reach"
      lead="Ransomware goes for the backups first. These controls keep the last clean restore point out of reach."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Azure Backup"
    />
  )
}
