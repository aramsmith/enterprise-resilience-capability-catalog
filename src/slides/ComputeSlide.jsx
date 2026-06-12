import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'vmss', label: 'VM Scale Sets (Flexible)', body: 'Spread instances across zones and fault domains with autoscale and automatic instance repair.', tag: 'VMSS Flexible orchestration' },
  { id: 'az', label: 'Availability Zones & sets', body: 'Zone-redundant VMs and zonal pinning; availability sets for in-rack fault tolerance.', tag: 'AZ · Availability Sets' },
  { id: 'aks', label: 'AKS multi-zone', body: 'Node pools across zones, pod disruption budgets, and self-healing scheduling.', tag: 'Azure Kubernetes Service' },
  { id: 'appservice', label: 'App Service & Functions', body: 'Zone-redundant App Service plans and Functions for resilient PaaS compute.', tag: 'App Service · Azure Functions' },
  { id: 'containerapps', label: 'Container Apps', body: 'Serverless containers with zone redundancy and event-driven KEDA autoscale.', tag: 'Azure Container Apps' },
  { id: 'reservation', label: 'Capacity reservations', body: 'Guarantee compute capacity in the target zone before you ever need to fail over.', tag: 'On-demand Capacity Reservation' },
]

export default function ComputeSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="compute"
      eyebrow="Compute resiliency"
      title="Compute that rides through failure"
      lead="From single-VM redundancy to globally distributed, self-healing fleets that repair themselves."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Compute"
    />
  )
}
