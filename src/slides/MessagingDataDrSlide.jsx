import CatalogSlide from '../components/CatalogSlide.jsx'

const ITEMS = [
  { id: 'eventhubs', label: 'Event Hubs geo-DR', body: 'Pair namespaces and fail over streaming ingestion across regions.', tag: 'Event Hubs Geo-DR' },
  { id: 'servicebus', label: 'Service Bus geo-replication', body: 'Replicate queues and topics with both metadata and data continuity.', tag: 'Service Bus Geo-Replication' },
  { id: 'adf', label: 'Data Factory & Synapse', body: 'Source-controlled pipelines redeploy to a secondary region for analytics DR.', tag: 'ADF · Synapse' },
  { id: 'databricks', label: 'Azure Databricks DR', body: 'Replicate workspaces, data, and jobs for a recoverable lakehouse.', tag: 'Azure Databricks' },
  { id: 'lake', label: 'Data Lake redundancy', body: 'GRS / GZRS protection for the analytics data estate.', tag: 'ADLS Gen2' },
  { id: 'eventgrid', label: 'Reliable eventing', body: 'Retried, durable event delivery decouples producers from consumers.', tag: 'Azure Event Grid' },
]

export default function MessagingDataDrSlide({ index }) {
  return (
    <CatalogSlide
      index={index}
      idBase="messaging"
      eyebrow="Messaging & data-platform DR"
      title="Don’t forget the pipes and the lakehouse"
      lead="Integration and analytics layers need their own continuity story — not just the apps and databases."
      items={ITEMS}
      footer="Azure Resiliency & Recovery · Messaging & data DR"
    />
  )
}
