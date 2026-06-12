import SectionDivider from '../components/SectionDivider.jsx'

export default function BcdrDivider({ index }) {
  return (
    <SectionDivider
      index={index}
      idBase="bcdrDivider"
      kicker="Domain 04 · Backup, DR & cyber recovery"
      titleA="Recover from"
      titleB="anything."
      sub="Backup, replication, and isolated clean-room recovery — engineered for the worst day, including ransomware and region loss."
      footer="Azure Resiliency & Recovery · Domain 4 of 6"
    />
  )
}
