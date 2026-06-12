import SectionDivider from '../components/SectionDivider.jsx'

export default function ProceduresDivider({ index }) {
  return (
    <SectionDivider
      index={index}
      idBase="proceduresDivider"
      kicker="Domain 06 · Procedures & runbooks"
      titleA="A plan you've"
      titleB="rehearsed."
      sub="Capabilities only recover the business when paired with practiced procedures — incident response, recovery runbooks, and a ransomware playbook."
      footer="Azure Resiliency & Recovery · Domain 6 of 6"
    />
  )
}
