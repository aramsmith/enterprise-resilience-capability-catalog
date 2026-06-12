import SectionDivider from '../components/SectionDivider.jsx'

export default function OperateDivider({ index }) {
  return (
    <SectionDivider
      index={index}
      idBase="operateDivider"
      kicker="Domain 05 · Test, operate & assure"
      titleA="Prove it"
      titleB="before it breaks."
      sub="Chaos testing, AIOps, and governance keep resilience honest — turning assumptions into measured, audited recovery confidence."
      footer="Azure Resiliency & Recovery · Domain 5 of 6"
    />
  )
}
