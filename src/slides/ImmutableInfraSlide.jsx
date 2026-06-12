import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'azurelinux', label: 'Azure Linux', body: 'Microsoft’s hardened, minimal, image-based container host OS, built for a small attack surface.', tag: 'Azure Linux (CBL-Mariner)' },
  { id: 'trustedlaunch', label: 'Trusted Launch VMs', body: 'Secure Boot, vTPM, and boot integrity monitoring defeat rootkits and bootkits.', tag: 'Trusted Launch' },
  { id: 'confidential', label: 'Confidential VMs', body: 'Hardware-encrypted memory and attested boot for tamper-evident compute.', tag: 'Azure Confidential Computing' },
  { id: 'ephemeral', label: 'Ephemeral OS disks', body: 'Stateless OS disks reset to a known-good image on every reimage.', tag: 'Ephemeral OS disks' },
  { id: 'golden', label: 'Golden images', body: 'Versioned, validated images distributed globally — and rolled back instantly.', tag: 'Compute Gallery · VM Image Builder' },
  { id: 'nodeimages', label: 'Immutable container hosts', body: 'AKS nodes built on image-based, reconciled OS — replaced, never patched in place.', tag: 'AKS node images' },
]

export default function ImmutableInfraSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="immutableInfra"
      eyebrow="Immutable infrastructure"
      title="Immutable operating systems & golden images"
      lead="Treat servers as cattle, not pets: ship signed, immutable images and replace them — never patch in place."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Immutable infrastructure"
    />
  )
}
