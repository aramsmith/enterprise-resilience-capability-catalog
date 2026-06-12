import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'lrs', label: 'LRS', body: 'Three copies within a single datacenter. Lowest cost; survives disk and node failures.', tag: 'Locally redundant' },
  { id: 'zrs', label: 'ZRS', body: 'Synchronous copies across three availability zones in one region.', tag: 'Zone-redundant' },
  { id: 'grs', label: 'GRS', body: 'LRS plus asynchronous replication to the paired region for geo-protection.', tag: 'Geo-redundant' },
  { id: 'ragrs', label: 'RA-GRS', body: 'GRS with read access to the secondary region at all times.', tag: 'Read-access geo-redundant' },
  { id: 'gzrs', label: 'GZRS', body: 'ZRS in the primary region plus asynchronous geo-replication to the pair.', tag: 'Geo-zone-redundant' },
  { id: 'ragzrs', label: 'RA-GZRS', body: 'GZRS with read access to the secondary — the highest storage resilience tier.', tag: 'Read-access geo-zone-redundant' },
]

export default function StorageRedundancySlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="storageRedundancy"
      eyebrow="Storage redundancy ladder"
      title="Choosing the right replication tier"
      lead="Each step up trades cost for a larger failure it can survive. Pick per dataset, not once per account."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Storage redundancy"
    />
  )
}
