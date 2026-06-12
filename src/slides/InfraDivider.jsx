import SectionDivider from '../components/SectionDivider.jsx'

export default function InfraDivider({ index }) {
  return (
    <SectionDivider
      index={index}
      idBase="infraDivider"
      kicker="Domain 02 · Infrastructure resiliency"
      titleA="Resilient"
      titleB="by design."
      sub="Compute, storage, data, and network primitives that absorb faults — from a failed disk to the loss of an entire region."
      footer="Azure Resiliency & Recovery · Domain 2 of 6"
    />
  )
}
