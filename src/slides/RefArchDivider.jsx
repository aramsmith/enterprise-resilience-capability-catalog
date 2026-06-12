import SectionDivider from '../components/SectionDivider.jsx'

export default function RefArchDivider({ index }) {
  return (
    <SectionDivider
      index={index}
      idBase="refArchDivider"
      kicker="Reference architectures"
      titleA="Blueprints that"
      titleB="put it together."
      sub="Proven, Microsoft-published reference architectures that combine the catalog into end-to-end resilient designs you can adopt."
      footer="Azure Resiliency & Recovery · Reference architectures"
    />
  )
}
