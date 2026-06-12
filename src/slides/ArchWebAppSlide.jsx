import ArchitectureSlide from '../components/ArchitectureSlide.jsx'
import { ArchDefs, Region, Node, Flow, FlowLabel } from '../components/archParts.jsx'

function Diagram() {
  return (
    <svg viewBox="0 0 1000 340" role="img" aria-label="Multi-region active-passive web application architecture">
      <ArchDefs />

      <Node x={440} y={6} w={120} h={32} label="Users" />
      <Node x={390} y={56} w={220} h={46} variant="global" label="Azure Front Door" sub="Global routing · WAF" />
      <Flow d="M500,38 L500,56" />

      <Region x={40} y={120} w={420} h={200} label="Primary region · active" />
      <Node x={110} y={162} w={280} h={48} variant="accent" label="App Service" sub="Zone-redundant plan" />
      <Node x={110} y={248} w={280} h={48} label="Azure SQL Database" sub="Failover group · primary" />
      <Flow d="M250,210 L250,248" />

      <Region x={540} y={120} w={420} h={200} label="Secondary region · passive" />
      <Node x={610} y={162} w={280} h={48} label="App Service" sub="Warm standby" />
      <Node x={610} y={248} w={280} h={48} label="Azure SQL Database" sub="Failover group · secondary" />
      <Flow d="M750,210 L750,248" />

      <Flow d="M470,102 C 330,135 250,140 250,162" />
      <FlowLabel x={300} y={130} color="var(--accent)">Active</FlowLabel>
      <Flow d="M540,102 C 700,135 750,140 750,162" />
      <FlowLabel x={715} y={130}>Failover</FlowLabel>

      <Flow d="M390,272 L610,272" repl />
      <FlowLabel x={500} y={264} color="var(--cyan)">Geo-replication (auto-failover group)</FlowLabel>
    </svg>
  )
}

export default function ArchWebAppSlide({ index }) {
  return (
    <ArchitectureSlide
      index={index}
      idBase="archWebApp"
      eyebrow="Reference architecture · Web app"
      title="Multi-region web application (active-passive)"
      lead="Azure Front Door routes users to the active region and fails over automatically. Zone-redundant App Service and SQL auto-failover groups keep data and compute resilient across regions."
      chips={['Azure Front Door', 'App Service (ZR)', 'SQL auto-failover groups', 'GZRS storage', 'Private endpoints']}
      source="learn.microsoft.com/azure/architecture/web-apps/app-service/architectures/multi-region"
      sourceUrl="https://learn.microsoft.com/en-us/azure/architecture/web-apps/app-service/architectures/multi-region"
      footer="Azure Resiliency & Recovery · Multi-region web app"
    >
      <Diagram />
    </ArchitectureSlide>
  )
}
