# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro. The site needs to serve a portfolio, a resume/background section, a blog, and a contact/hire-me path from one person's content — mostly static, content-driven pages with occasional interactive bits (project filters, contact form). Astro ships pages as static HTML by default (fast loads, good SEO, matters for a Persuade-mode landing page recruiters/clients will skim), has first-class Markdown/content-collections support for the blog and project write-ups, and only hydrates JS where a component actually needs it. It deploys without friction to GitHub Pages, Vercel, or Netlify, so no hosting decision is locked in by this choice. Revisit if the user later wants a dynamic backend (auth, database-backed content) that outgrows static generation.

## Users

- Recruiters / hiring managers assessing the user for a role — want fast proof of skills and experience.
- Clients / collaborators deciding whether to hire or partner with the user for freelance/consulting work.
- Professional network (LinkedIn, referrals, conferences) — general credibility and a way to reconnect.
- General public / personal-brand visitors — broader visibility, not limited to strictly professional framing.

The site serves all four from shared surfaces (portfolio, resume, blog, contact) rather than separate tracks per audience.

## Product Purpose

A personal website that showcases the user's talent, background, and work, and converts visitor interest into contact. It combines:
- A portfolio of projects/work samples.
- A resume / professional background section.
- A blog for writing / thought leadership.
- A contact / hire-me path as a clear outcome for interested visitors.

## Positioning

A data engineer with 3+ years building SLA-critical, enterprise-scale batch pipelines (financial and regulatory reporting) on Azure Databricks — PySpark, Spark SQL, Delta Lake, medallion/lakehouse architecture. The differentiator a generic "data engineer" portfolio can't claim: production reliability at scale with measurable business outcomes (~$170K/year cloud cost reduction, 500+ production jobs migrated with zero downtime at 100% SLA compliance, a centralized metadata platform that improved data discovery ~40%), backed by four Databricks certifications. This is a specialist-in-cloud-data-platforms positioning, not a generalist-developer one.

## Operating Context

The user (Samarth Bhatt) is currently a Data Engineer at Rearc (Aug 2026–present, onboarding), having spent Aug 2023–Jul 2026 as an Associate Data Engineer at Shell India Markets. The site is being built fresh on a `feature/landing_page` branch of an otherwise-empty repo, suggesting a new professional web presence is being established around a career transition rather than an update to an existing portfolio. Domain context the portfolio must speak fluently: Azure Databricks ecosystem, Unity Catalog, Delta Lake, Spark, data governance/RBAC, CI/CD for data pipelines (Databricks Asset Bundles, GitHub Actions, Control-M).

## Capabilities and Constraints

- Four confirmed surface areas: portfolio, resume/background, blog, contact.
- No framework/scaffold existed before this init; Astro is the delegated choice (see Stack).
- Deploy target not yet confirmed (GitHub Pages / Vercel / Netlify all compatible with the stack choice).
- Only one concrete project with a public link exists today (see Evidence). The site's Product Purpose names a "portfolio of projects" (plural) — confirm with the user whether more projects are coming or whether depth on this one project, plus experience/certifications, carries the portfolio surface.

## Brand Commitments

- Name: Samarth Bhatt.
- Public professional profiles: LinkedIn (linkedin.com/in/samarthbhatt25), GitHub (github.com/samarth8285).
- Email: samarthbhatt8285@gmail.com — confirmed public contact channel.
- Phone number: confirmed NOT for public display. Contact surface uses email (and LinkedIn/GitHub) only, no phone number anywhere on the site.
- No logo, tagline, color system, or voice guidelines confirmed yet.

## Evidence on Hand

From the user's master resume (Google Doc, provided directly):

**Experience**
- Data Engineer, Rearc — Aug 2026–present, Pune, India (onboarding to cloud data practices, pursuing certifications).
- Associate Data Engineer, Shell India Markets Pvt. Ltd. — Aug 2023–Jul 2026, Bengaluru, India. Headline achievements: end-to-end batch pipelines for financial reporting/regulatory submissions; incremental/idempotent Delta Lake reprocessing framework; ~$170K/year cloud cost reduction; 500+ production jobs orchestrated with zero-downtime migration at 100% SLA compliance; centralized metadata platform (~40% discovery efficiency gain); reusable framework saving 120+ engineering hours org-wide; star-schema models with SCD Type 2; authored 7 internal technical guides; mentored 10+ engineers; delivered Power BI dashboards for pricing/market analysis.
- Software Developer Intern, REVOLTRONIX — May–Jul 2022, Ahmedabad. Node.js/Google Cloud ingestion and API layer; Reddit sentiment-analysis pipeline; serverless transformation functions.
- Frontend Web Developer Intern, Panayu — Oct–Dec 2021, Ahmedabad. Data-driven web interfaces, MongoDB data modeling.

**Projects** (only one with a public link so far)
- NYC Yellow Taxi Data Pipeline — github.com/samarth8285/nyc-yellow-taxi-project. Medallion-architecture pipeline processing 209 monthly NYC TLC trip-record files (2009–2026), deployed as a Databricks Asset Bundle; schema-aware Auto Loader ingestion reconciling 3 incompatible historical layouts; Silver-layer cleaning; Gold aggregate tables supporting AI/BI dashboards.

**Technical Skills** (for a skills section, not prose to repeat verbatim)
Python (PySpark, Pandas); SQL (Spark SQL, Databricks SQL); Apache Spark, Delta Lake, Databricks Lakeflow; Azure, Azure Databricks, ADLS Gen2, Unity Catalog, Docker; data validation/reconciliation/audit/RBAC/governance, star schema, SCD Type 2; Control-M, Git, GitHub Actions, Databricks Asset Bundles, IaC; REST APIs, JSON/CSV/Excel/Parquet; Power BI, AI/BI (Lakeview) dashboards; Node.js, MongoDB, Google Cloud.

**Certifications**
Databricks Certified Data Engineer Professional (Aug 2026); Databricks Certified Generative AI Engineer Associate (Oct 2026); Databricks Certified Apache Spark Developer (Jun 2024); Databricks Certified Associate Data Engineer (Jan 2024).

**Awards** (internal recognitions, not externally verifiable — use judiciously, don't present as if externally awarded)
Highest-impact enterprise data solution (internal hackathon); senior leadership recognition for cloud cost optimization; recognition for documentation/operational standardization; recognition for Power BI dashboards adopted cross-team.

**Education**
B.E. Computer Engineering, specialization in AI and Machine Learning — NMIMS, Jun 2019–May 2023.

**Still missing:** no blog post drafts or topics, no testimonials/references, no case-study-level detail beyond the resume bullets (e.g., architecture diagrams, before/after metrics with more context), and no second/third project beyond the taxi pipeline. None of these should be invented.

## Product Principles

1. Truthful proof over claims — resume and project content comes from the user's real history, never invented.
2. Serve a broad, mixed audience (recruiters, clients, network, public) from one coherent site rather than fragmenting into audience-specific tracks.
3. Fast, static-first delivery — skimmable in seconds for a recruiter or client with limited attention.
4. Contact is a first-class outcome, not an afterthought — every surface should make it easy to reach the user.

## Accessibility & Inclusion

[No product-specific requirement established yet. Standard web accessibility practice applies by default; revisit if the user states a specific standard or need.]
