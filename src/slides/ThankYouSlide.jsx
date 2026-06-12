import { GenericThankYouSlide } from '@deckio/deck-engine'

export default function ThankYouSlide({ index, project }) {
  return (
    <GenericThankYouSlide
      index={index}
      project={project}
      subtitle="Let's map your critical workloads to the catalog and design the target resilience architecture — together."
      tagline="Resilient on Azure, by design"
      footerText="Azure Resiliency & Recovery"
    />
  )
}
