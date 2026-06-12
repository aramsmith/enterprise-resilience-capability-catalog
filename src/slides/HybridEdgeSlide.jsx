import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'arc', label: 'Azure Arc', body: 'Govern, secure, and run Azure services on any infrastructure — on-prem, multicloud, or edge.', tag: 'Azure Arc' },
  { id: 'local', label: 'Azure Local', body: 'Resilient, validated on-prem clusters with Azure-consistent operations for low-latency or disconnected sites.', tag: 'Azure Local (Stack HCI)' },
  { id: 'edge', label: 'Edge Zones & private MEC', body: 'Low-latency compute at the edge with carrier and on-premises footprints.', tag: 'Azure Edge Zones' },
  { id: 'sovereign', label: 'Sovereign & air-gapped clouds', body: 'Isolated clouds for the most regulated, national-security, and disconnected workloads.', tag: 'Air-gapped / sovereign clouds' },
  { id: 'arc-data', label: 'Arc-enabled data & Kubernetes', body: 'Run managed data services and Kubernetes consistently across every environment.', tag: 'Arc-enabled SQL · Kubernetes' },
  { id: 'hybrid-dr', label: 'Hybrid DR target', body: 'Replicate and fail over between on-premises and Azure, using the cloud as a recovery site.', tag: 'Azure Site Recovery' },
]

export default function HybridEdgeSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="hybridEdge"
      eyebrow="Hybrid, edge & sovereign"
      title="Resiliency beyond the public region"
      lead="Extend the same resilience model to on-premises, the edge, and sovereign or disconnected environments — under one control plane."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Hybrid, edge & sovereign"
    />
  )
}
