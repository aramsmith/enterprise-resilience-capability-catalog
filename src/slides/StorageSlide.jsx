import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'redundancy', label: 'Redundancy options', body: 'LRS, ZRS, GRS, and GZRS replicate data within a datacenter, across zones, or across regions.', tag: 'ZRS · GZRS · RA-GZRS' },
  { id: 'failover', label: 'Customer-managed failover', body: 'Initiate regional failover for geo-redundant accounts on your own terms.', tag: 'Storage account failover' },
  { id: 'worm', label: 'Immutable blobs (WORM)', body: 'Time-based retention and legal hold make stored data unchangeable and undeletable.', tag: 'Immutable Blob Storage' },
  { id: 'softdelete', label: 'Soft delete & versioning', body: 'Recover overwritten or deleted blobs, containers, and shares; restore to a point in time.', tag: 'Soft delete · PITR' },
  { id: 'snapshots', label: 'Snapshots & ZRS disks', body: 'Point-in-time managed disk snapshots and zone-redundant disks for resilient VMs.', tag: 'Managed Disks · Snapshots' },
  { id: 'netapp', label: 'NetApp cross-region', body: 'Enterprise NFS/SMB storage with cross-region and cross-zone replication.', tag: 'Azure NetApp Files' },
]

export default function StorageSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="storage"
      eyebrow="Storage resiliency"
      title="Durable, recoverable, tamper-resistant storage"
      lead="Eleven 9s of durability is the floor — these controls add redundancy, recoverability, and immutability on top."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Storage"
    />
  )
}
