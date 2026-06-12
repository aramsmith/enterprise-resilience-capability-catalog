import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'zones', label: 'Availability Zones', body: 'Physically separate datacenters within a region, each with independent power, cooling, and networking.', tag: 'Zone-redundant & zonal deployments' },
  { id: 'pairs', label: 'Region pairs & multi-region', body: 'Curated paired regions for geo-redundancy, sequential platform updates, and regional recovery.', tag: 'Azure region pairs' },
  { id: 'fault-domains', label: 'Fault & update domains', body: 'Spread instances across isolated hardware and maintenance boundaries to survive rack faults and host updates.', tag: 'Availability sets' },
  { id: 'backbone', label: 'Global backbone & edge', body: 'Microsoft’s private global network with anycast entry points placed close to users.', tag: 'Azure global network · Front Door' },
  { id: 'geographies', label: '60+ geographies', body: 'Data residency and sovereignty honored across the broadest datacenter footprint of any cloud.', tag: 'Azure geographies' },
  { id: 'capacity', label: 'Capacity & quotas', body: 'Reserve compute capacity ahead of failover so recovery is never blocked by availability.', tag: 'On-demand Capacity Reservations' },
]

export default function FoundationSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="foundation"
      eyebrow="Platform foundation"
      title="Regions, zones, and the shape of the cloud"
      lead="Every Azure workload inherits the resilience of the platform topology beneath it. Choose that topology deliberately."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Platform foundation"
    />
  )
}
