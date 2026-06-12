import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'retry', label: 'Retry & circuit breaker', body: 'Absorb transient faults and stop cascading failures with backoff and breakers.', tag: 'Resiliency patterns' },
  { id: 'bulkhead', label: 'Bulkhead & throttling', body: 'Isolate resources and shed load so one failing part can’t take down the whole.', tag: 'Bulkhead · Rate limiting' },
  { id: 'queue', label: 'Queue-based load leveling', body: 'Decouple producers and consumers to ride out spikes and downstream outages.', tag: 'Service Bus · Storage Queues' },
  { id: 'multiregion', label: 'Active-active / active-passive', body: 'Run multiple regions hot, or keep a warm standby for fast, controlled failover.', tag: 'Multi-region topology' },
  { id: 'stamps', label: 'Deployment stamps / cells', body: 'Scale and isolate by cloning independent units that contain the blast radius.', tag: 'Cell-based architecture' },
  { id: 'health', label: 'Health modeling', body: 'Define what “healthy” means and drive failover from real, layered health signals.', tag: 'Health probes · Health model' },
]

export default function AppPatternsSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="appPatterns"
      eyebrow="Application architecture patterns"
      title="Applications that degrade gracefully"
      lead="Resilience is engineered into the application itself — not bolted onto the platform underneath it."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Application patterns"
    />
  )
}
