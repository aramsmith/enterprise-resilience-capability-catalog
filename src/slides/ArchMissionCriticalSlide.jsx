import ArchitectureSlide from '../components/ArchitectureSlide.jsx'
import { ArchDefs, Region, Node, Flow, FlowLabel } from '../components/archParts.jsx'

function Diagram() {
  return (
    <svg viewBox="0 0 1000 340" role="img" aria-label="Mission-critical global architecture with regional stamps">
      <ArchDefs />

      <Node x={440} y={4} w={120} h={30} label="Users" />
      <Node x={400} y={44} w={200} h={42} variant="global" label="Azure Front Door" sub="Global entry" />
      <Flow d="M500,34 L500,44" />

      <Region x={40} y={102} w={920} h={62} label="Global resources" />
      <Node x={150} y={120} w={210} h={36} variant="global" label="Cosmos DB" sub="multi-region write" />
      <Node x={410} y={120} w={180} h={36} variant="global" label="Log Analytics" />
      <Node x={650} y={120} w={220} h={36} variant="global" label="Container Registry" sub="geo-replicated" />

      <Region x={40} y={188} w={440} h={142} label="Regional stamp · Region A" />
      <Node x={80} y={236} w={170} h={46} variant="accent" label="App Gateway" sub="WAF · zonal" />
      <Node x={290} y={236} w={150} h={46} variant="accent" label="AKS / ACA" sub="stateless" />
      <Flow d="M250,259 L290,259" />

      <Region x={520} y={188} w={440} h={142} label="Regional stamp · Region B" />
      <Node x={560} y={236} w={170} h={46} label="App Gateway" sub="WAF · zonal" />
      <Node x={770} y={236} w={150} h={46} label="AKS / ACA" sub="stateless" />
      <Flow d="M730,259 L770,259" />

      <Flow d="M470,86 C 320,150 165,180 165,236" />
      <Flow d="M530,86 C 690,150 645,180 645,236" />
      <FlowLabel x={500} y={104} color="var(--accent)">Active-active · scale units</FlowLabel>

      <Flow d="M360,236 L255,158" repl />
      <Flow d="M845,236 L760,158" repl />
    </svg>
  )
}

export default function ArchMissionCriticalSlide({ index }) {
  return (
    <ArchitectureSlide
      index={index}
      idBase="archMissionCritical"
      eyebrow="Reference architecture · Mission-Critical"
      title="Mission-Critical (AlwaysOn) global design"
      lead="Long-lived global resources sit above stateless, replaceable regional stamps (scale units). Stamps fail and redeploy independently while global state lives in geo-replicated Cosmos DB."
      chips={['Front Door', 'Cosmos DB multi-write', 'Deployment stamps', 'AKS / Container Apps', 'Geo-replicated ACR', 'Health modeling']}
      source="learn.microsoft.com/azure/well-architected/mission-critical/mission-critical-architecture-pattern"
      sourceUrl="https://learn.microsoft.com/en-us/azure/well-architected/mission-critical/mission-critical-architecture-pattern"
      footer="Azure Resiliency & Recovery · Mission-Critical"
    >
      <Diagram />
    </ArchitectureSlide>
  )
}
