import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'chaosstudio', label: 'Azure Chaos Studio', body: 'Inject faults — zone outages, CPU pressure, network loss — as controlled experiments.', tag: 'Azure Chaos Studio' },
  { id: 'faults', label: 'Fault library', body: 'Service-direct and agent-based faults across compute, network, and PaaS services.', tag: 'Chaos faults' },
  { id: 'hypothesis', label: 'Steady-state hypotheses', body: 'Define what “healthy” looks like and validate it survives the injected fault.', tag: 'Experiment design' },
  { id: 'drills', label: 'Scheduled DR drills', body: 'Regular, non-disruptive failover tests prove your RTO and RPO are real.', tag: 'ASR test failover' },
  { id: 'gamedays', label: 'Game days', body: 'Rehearse incident response with the people and process, not just the platform.', tag: 'Resilience game days' },
  { id: 'cicd', label: 'CI/CD integration', body: 'Run resilience experiments automatically inside the deployment pipeline.', tag: 'Pipelines' },
]

export default function ChaosTestingSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="chaos"
      eyebrow="Chaos engineering & DR testing"
      title="Break it on purpose, on a schedule"
      lead="Untested resilience is just a hypothesis. Inject real faults and run real drills to turn it into evidence."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Chaos & testing"
    />
  )
}
