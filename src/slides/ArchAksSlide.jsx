import ArchitectureSlide from '../components/ArchitectureSlide.jsx'
import { ArchDefs, Region, Node, Flow, FlowLabel } from '../components/archParts.jsx'

function Diagram() {
  return (
    <svg viewBox="0 0 1000 340" role="img" aria-label="Multi-region active-active AKS architecture">
      <ArchDefs />

      <Node x={440} y={4} w={120} h={30} label="Users" />
      <Node x={380} y={44} w={240} h={42} variant="global" label="Azure Front Door" sub="L7 global routing" />
      <Flow d="M500,34 L500,44" />

      <Region x={40} y={102} w={920} h={60} label="Global" />
      <Node x={120} y={117} w={230} h={36} variant="global" label="Container Registry" sub="geo-replicated" />
      <Node x={410} y={117} w={230} h={36} variant="global" label="AKS Fleet Manager" sub="updates & rollout" />
      <Node x={700} y={117} w={200} h={36} variant="global" label="Log Analytics" />

      <Region x={40} y={186} w={440} h={144} label="Region A · active" />
      <Node x={80} y={230} w={160} h={46} variant="accent" label="App Gateway" sub="WAF" />
      <Node x={280} y={230} w={160} h={46} variant="accent" label="AKS cluster" sub="multi-zone" />
      <Flow d="M240,253 L280,253" />

      <Region x={520} y={186} w={440} h={144} label="Region B · active" />
      <Node x={560} y={230} w={160} h={46} label="App Gateway" sub="WAF" />
      <Node x={760} y={230} w={160} h={46} label="AKS cluster" sub="multi-zone" />
      <Flow d="M720,253 L760,253" />

      <Flow d="M470,86 C 320,150 160,180 160,230" />
      <Flow d="M530,86 C 690,150 640,180 640,230" />
      <FlowLabel x={500} y={182} color="var(--accent)">Active-active routing</FlowLabel>

      <Flow d="M470,135 C 400,175 360,195 360,230" repl />
      <Flow d="M580,135 C 700,175 840,195 840,230" repl />
    </svg>
  )
}

export default function ArchAksSlide({ index }) {
  return (
    <ArchitectureSlide
      index={index}
      idBase="archAks"
      eyebrow="Reference architecture · Kubernetes"
      title="Multi-region AKS (active-active)"
      lead="Front Door load-balances across regional AKS clusters fronted by Application Gateway. Fleet Manager coordinates updates and a geo-replicated registry keeps images available through a regional outage."
      chips={['Front Door', 'App Gateway + WAF', 'AKS multi-zone', 'AKS Fleet Manager', 'Geo-replicated ACR', 'Regional hub-spoke']}
      source="learn.microsoft.com/azure/architecture/reference-architectures/containers/aks-multi-region/aks-multi-cluster"
      sourceUrl="https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/containers/aks-multi-region/aks-multi-cluster"
      footer="Azure Resiliency & Recovery · Multi-region AKS"
    >
      <Diagram />
    </ArchitectureSlide>
  )
}
