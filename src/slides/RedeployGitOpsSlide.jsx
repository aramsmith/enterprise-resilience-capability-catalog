import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'iac', label: 'Infrastructure as Code', body: 'Re-create entire environments deterministically from version-controlled definitions.', tag: 'Bicep · Terraform · ARM' },
  { id: 'stacks', label: 'Deployment Stacks', body: 'Manage and redeploy a whole resource lifecycle as one atomic, governed unit.', tag: 'Azure Deployment Stacks' },
  { id: 'gitops', label: 'GitOps reconciliation', body: 'Clusters continuously converge to the known-good state in Git; drift self-heals.', tag: 'Flux · Argo CD on AKS' },
  { id: 'bluegreen', label: 'Blue-green & canary', body: 'Shift traffic gradually and roll back instantly the moment health degrades.', tag: 'Deployment slots · Front Door' },
  { id: 'pipelines', label: 'Pipelines as recovery', body: 'Automated CI/CD becomes the documented, tested, repeatable recovery runbook.', tag: 'GitHub Actions · Azure Pipelines' },
  { id: 'environments', label: 'Ephemeral environments', body: 'Spin up isolated, reproducible environments on demand for failover or testing.', tag: 'Azure Deployment Environments' },
]

export default function RedeployGitOpsSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="redeployGitops"
      eyebrow="Redeploy-from-code & GitOps"
      title="Recovery is a redeploy, not a rescue"
      lead="When infrastructure is defined as code and reconciled continuously, rebuilding a region becomes a single pipeline run."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Redeploy & GitOps"
    />
  )
}
