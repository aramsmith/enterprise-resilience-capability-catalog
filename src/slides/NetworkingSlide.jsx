import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'frontdoor', label: 'Azure Front Door', body: 'Global anycast entry with health-probe failover, WAF, and caching at the edge.', tag: 'Azure Front Door' },
  { id: 'trafficmanager', label: 'Traffic Manager', body: 'DNS-based routing and failover across regions and heterogeneous endpoints.', tag: 'Azure Traffic Manager' },
  { id: 'lb', label: 'Zone-redundant LB & App Gateway', body: 'Standard Load Balancer and Application Gateway v2 span zones with autoscale.', tag: 'Load Balancer · App Gateway' },
  { id: 'expressroute', label: 'ExpressRoute resilience', body: 'Redundant circuits, Global Reach, and Metro for diverse private connectivity.', tag: 'Azure ExpressRoute' },
  { id: 'vpn', label: 'VPN active-active', body: 'Zone-redundant gateways with active-active tunnels for resilient hybrid links.', tag: 'VPN Gateway' },
  { id: 'ddos', label: 'DDoS Protection', body: 'Always-on mitigation that keeps endpoints reachable under volumetric attack.', tag: 'Azure DDoS Protection' },
]

export default function NetworkingSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="networking"
      eyebrow="Networking resiliency"
      title="Traffic that always finds a path"
      lead="Global and regional load balancing, redundant connectivity, and always-on protection at every layer."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Networking"
    />
  )
}
