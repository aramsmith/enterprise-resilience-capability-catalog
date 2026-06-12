import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'monitor', label: 'Azure Monitor', body: 'Unified metrics, logs, and traces with alerting and autoscale triggers.', tag: 'Azure Monitor · Log Analytics' },
  { id: 'health', label: 'Service & Resource Health', body: 'Know instantly when Azure or your specific resource is impacted, with guidance.', tag: 'Azure Service Health' },
  { id: 'advisor', label: 'Advisor reliability', body: 'Personalized recommendations to close resilience gaps before they cause outages.', tag: 'Azure Advisor' },
  { id: 'sreagent', label: 'Azure SRE Agent', body: 'Agentic AI that triages, diagnoses, and helps remediate incidents around the clock.', tag: 'Azure SRE Agent' },
  { id: 'copilot', label: 'Copilot in Azure', body: 'Natural-language investigation and guided recovery across the whole platform.', tag: 'Microsoft Copilot in Azure' },
  { id: 'smartdetect', label: 'Smart detection', body: 'ML-driven anomaly detection surfaces failures before your users do.', tag: 'Application Insights' },
]

export default function ObservabilityAiOpsSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="observability"
      eyebrow="Observability & AIOps"
      title="See it early, heal it automatically"
      lead="Detection and intelligent, agentic operations shrink the time between impact and full recovery."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Observability & AIOps"
    />
  )
}
