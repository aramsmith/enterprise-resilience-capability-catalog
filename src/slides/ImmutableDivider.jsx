import SectionDivider from '../components/SectionDivider.jsx'

export default function ImmutableDivider({ index }) {
  return (
    <SectionDivider
      index={index}
      idBase="immutableDivider"
      kicker="Domain 03 · Immutable & fast recovery"
      titleA="Rebuild,"
      titleB="don't repair."
      sub="Immutable OS images and redeploy-from-code turn recovery into a fast, repeatable, known-good rebuild — not a frantic manual fix."
      footer="Azure Resiliency & Recovery · Domain 3 of 6"
    />
  )
}
