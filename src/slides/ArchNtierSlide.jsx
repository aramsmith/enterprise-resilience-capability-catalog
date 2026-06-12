import ArchitectureSlide from '../components/ArchitectureSlide.jsx'
import { ArchDefs, Region, Node, Flow, FlowLabel } from '../components/archParts.jsx'

function Diagram() {
  return (
    <svg viewBox="0 0 1000 340" role="img" aria-label="Multi-region N-tier architecture with zone-redundant tiers and SQL Always On">
      <ArchDefs />

      <Node x={440} y={4} w={120} h={28} label="Users" />
      <Node x={380} y={40} w={240} h={40} variant="global" label="Traffic Manager" sub="DNS routing" />
      <Flow d="M500,32 L500,40" />

      <Region x={40} y={96} w={600} h={236} label="Primary region · zone-redundant" />
      <Node x={70} y={130} w={540} h={36} variant="accent" label="Application Gateway · WAF" />
      <Node x={70} y={180} w={540} h={34} label="Web tier — VMs across zones 1 · 2 · 3" />
      <Node x={70} y={224} w={540} h={34} label="Business tier — VMs across zones 1 · 2 · 3" />
      <Node x={70} y={268} w={540} h={46} label="SQL Server — Always On AG across zones 1 · 2 · 3" />
      <Flow d="M340,166 L340,180" />
      <Flow d="M340,214 L340,224" />
      <Flow d="M340,258 L340,268" />

      <Region x={680} y={96} w={280} h={236} label="Secondary region" />
      <Node x={700} y={130} w={240} h={36} label="App Gateway · WAF" />
      <Node x={700} y={180} w={240} h={34} label="Web tier" />
      <Node x={700} y={224} w={240} h={34} label="Business tier" />
      <Node x={700} y={268} w={240} h={46} label="SQL · AG secondary" />
      <Flow d="M820,166 L820,180" />
      <Flow d="M820,214 L820,224" />
      <Flow d="M820,258 L820,268" />

      <Flow d="M480,80 C 360,102 340,116 340,130" />
      <FlowLabel x={372} y={106} color="var(--accent)">Active</FlowLabel>
      <Flow d="M520,80 C 700,102 820,116 820,130" />
      <FlowLabel x={742} y={106}>Failover</FlowLabel>

      <Flow d="M610,291 L700,291" repl />
      <FlowLabel x={655} y={283} color="var(--cyan)">Always On AG</FlowLabel>
    </svg>
  )
}

export default function ArchNtierSlide({ index }) {
  return (
    <ArchitectureSlide
      index={index}
      idBase="archNtier"
      eyebrow="Reference architecture · N-tier"
      title="Multi-region N-tier with SQL Always On"
      lead="Availability Zones give in-region resilience for every tier; a second region adds recoverability. Traffic Manager handles regional failover while a SQL Always On availability group replicates data."
      chips={['Traffic Manager', 'App Gateway + WAF', 'Azure Firewall Premium', 'Zone-redundant tiers', 'SQL Always On AG', 'Multi-region']}
      source="learn.microsoft.com/azure/architecture/reference-architectures/n-tier/multi-region-sql-server"
      sourceUrl="https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/n-tier/multi-region-sql-server"
      footer="Azure Resiliency & Recovery · Multi-region N-tier"
    >
      <Diagram />
    </ArchitectureSlide>
  )
}
