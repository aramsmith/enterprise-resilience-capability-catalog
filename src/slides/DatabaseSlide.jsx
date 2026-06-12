import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'sql', label: 'Azure SQL Database', body: 'Zone-redundant Business Critical, active geo-replication, and auto-failover groups.', tag: 'Azure SQL · SQL Managed Instance' },
  { id: 'cosmos', label: 'Azure Cosmos DB', body: 'Turnkey multi-region writes with automatic, single-digit-second failover.', tag: 'Azure Cosmos DB' },
  { id: 'flex', label: 'PostgreSQL / MySQL', body: 'Zone-redundant HA with a hot standby, plus geo-redundant backup and read replicas.', tag: 'Flexible Server' },
  { id: 'redis', label: 'Azure Cache for Redis', body: 'Zone redundancy and active geo-replication for low-latency, resilient caching.', tag: 'Azure Cache for Redis' },
  { id: 'pitr', label: 'Backup & PITR', body: 'Automated backups with long-term retention and point-in-time restore.', tag: 'Automated backups · LTR' },
  { id: 'georestore', label: 'Geo-redundant backup', body: 'Restore a database into a different region after a regional outage.', tag: 'Geo-restore' },
]

export default function DatabaseSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="database"
      eyebrow="Database resiliency"
      title="Data platforms that fail over fast"
      lead="Built-in HA, geo-replication, and automatic failover across the managed data estate."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Databases"
    />
  )
}
