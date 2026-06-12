import SectionDivider from '../components/SectionDivider.jsx'

export default function FoundationDivider({ index }) {
  return (
    <SectionDivider
      index={index}
      idBase="foundationDivider"
      kicker="Domain 01 · Platform foundation"
      titleA="Built on a"
      titleB="resilient platform."
      sub="Regions, availability zones, and global reach are the bedrock every workload inherits — before a single line of architecture is drawn."
      footer="Azure Resiliency & Recovery · Domain 1 of 6"
    />
  )
}
