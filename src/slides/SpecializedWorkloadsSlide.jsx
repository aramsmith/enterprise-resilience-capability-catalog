import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'missioncritical', label: 'Mission-Critical (AlwaysOn)', body: 'Reference architecture for the most demanding availability targets.', tag: 'Azure Mission-Critical' },
  { id: 'sap', label: 'SAP on Azure', body: 'Certified HA/DR with clustering, replication, and zone-aware deployment.', tag: 'SAP on Azure' },
  { id: 'avs', label: 'Azure VMware Solution', body: 'Lift-and-shift VMware with stretched clusters and site recovery.', tag: 'AVS · SRM' },
  { id: 'hpc', label: 'HPC & batch', body: 'Resilient scheduling and checkpointing for large-scale parallel compute.', tag: 'Azure Batch · CycleCloud' },
  { id: 'oracle', label: 'Oracle on Azure', body: 'HA/DR for Oracle workloads, including Oracle Database@Azure.', tag: 'Oracle Database@Azure' },
  { id: 'iot', label: 'Industrial & IoT edge', body: 'Resilient edge operations for OT and field environments.', tag: 'Azure IoT Operations' },
]

export default function SpecializedWorkloadsSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="specialized"
      eyebrow="Specialized workloads"
      title="Resilience for the hardest workloads"
      lead="Mission-critical, ERP, virtualization, and HPC each have a proven, documented Azure continuity pattern."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Specialized workloads"
    />
  )
}
