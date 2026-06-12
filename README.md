# Azure Resiliency &amp; Recovery — The Complete Capability Catalog

A presentation deck that maps **every Azure resiliency and recovery capability** into one
coherent, navigable story — from platform fundamentals to immutable recovery, backup &amp; DR,
operational assurance, reference architectures, and incident procedures.

It is the companion **capability catalog** to the curated
[`enterprise-resilience-architecture`](https://github.com/aramsmith/enterprise-resilience-architecture)
proposal deck: where that deck tells a focused story, this one is the complete reference.

> **▶ Live deck:** https://aramsmith.github.io/enterprise-resilience-capability-catalog/

---

## What's inside

**39 slides** organized into six domains plus reference architectures and procedures:

| # | Domain | Covers |
|---|--------|--------|
| 01 | **Platform foundation** | Regions &amp; region pairs, Availability Zones, fault/update domains, hybrid (Arc, Azure Local), edge &amp; sovereign clouds |
| 02 | **Infrastructure resiliency** | Compute (VMSS, AKS, App Service), storage redundancy ladder (LRS→RA-GZRS) &amp; immutable blobs, databases, networking |
| 03 | **Immutable &amp; fast recovery** | Azure Linux &amp; immutable OS, Trusted/Confidential VMs, IaC redeploy-from-code, GitOps, blue-green/canary, app patterns |
| 04 | **Backup, DR &amp; cyber** | Azure Backup (immutable vaults, MUA), Site Recovery, Business Continuity Center, clean-room recovery, identity resilience |
| 05 | **Test, operate &amp; assure** | Chaos Studio, observability, AIOps &amp; SRE Agent, WAF Reliability pillar, governance, specialized workloads |
| 06 | **Procedures &amp; runbooks** | MIRP (Major Incident Recovery Plan), recovery runbooks, ransomware recovery playbook |

Plus a **capability map** overview, an **RTO/RPO decision matrix**, and four Microsoft
**reference architectures** (multi-region web app, Mission-Critical, multi-region AKS,
multi-region N-tier with SQL Always On) — each linked to its source on
[Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/).

---

## Tech

Built with [DECKIO](https://deckio.art) — slides are React/JSX components rendered by
`@deckio/deck-engine` and bundled with Vite. Styling uses CSS Modules on a dark theme
(accent `#49C5B1`).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173. Navigate with the on-screen arrows or the ← / → keys.

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Editing

Slides live in `src/slides/`; reusable building blocks (catalog cards, section dividers,
architecture diagrams, particle background, slide numbers) live in `src/components/`.
Slide order and theme are defined in `deck.config.js`. Most on-slide text is wrapped in
`<Editable>` so it can be edited inline in dev mode.

## Deployment

The deck auto-deploys to GitHub Pages on every push to `main` via
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

---

*Vendor-neutral reference content. Not an official Microsoft publication.*
