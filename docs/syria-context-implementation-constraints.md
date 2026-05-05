# Syria-Context Implementation Constraints

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Realism appendix to the strategy documents |

---

## Executive Summary

Digital Syria Vision must succeed in the actual operating environment of the
Syrian Arab Republic, not in an idealised one. This document lists the
real-world constraints that shape the programme design and rollout sequence.
It is **administrative, technical, and realistic** — it is not a political
analysis, and it makes no political claims.

Any artefact in this repository that quotes a target without acknowledging
these constraints should be read alongside this document.

---

## 1. Infrastructure constraints

### 1.1 Electricity instability

- Many regions experience scheduled and unscheduled power outages.
- Implication for design:
  - Government buildings hosting service centres need UPS + backup generators rated for the longest realistic outage in their governorate.
  - SyriaGovCloud sites must be hosted only in facilities meeting Tier-III-equivalent power redundancy.
  - Citizen-facing applications must be **offline-tolerant** for status checks and queue numbers.
  - Mobile apps should cache the last-known state and degrade gracefully.

### 1.2 Connectivity limitations

- Fixed-line broadband penetration is uneven across governorates.
- Mobile data is the dominant access channel for most citizens.
- Implication for design:
  - All citizen-facing services must work on a 3G connection.
  - Asset budgets per page: ≤ 500 KB initial transfer where feasible.
  - SMS and USSD fallback channels are **first-class**, not afterthoughts.
  - In low-connectivity governorates, assisted-digital service centres are part of the rollout, not optional.

### 1.3 Hardware availability

- Sanctions-related procurement constraints affect hardware supply.
- Implication for design:
  - Avoid single-vendor hardware lock-in (`policies/vendor-lock-in-prevention-policy.md`).
  - Prefer commodity hardware over high-end appliances where possible.
  - Maintain a 6-month spare inventory for Tier-0 systems.

---

## 2. Macro-economic and procurement constraints

### 2.1 Sanctions

- The Syrian Arab Republic is subject to multiple international sanctions regimes that affect access to:
  - Some commercial cloud providers and SaaS services.
  - Some payment networks.
  - Some cryptographic hardware (HSMs).
  - Some software licences and update channels.
- Implication for design:
  - No single point of failure that depends on a sanctioned-restricted supplier.
  - Open-source preference where functional equivalents exist.
  - Sanctions-impact register reviewed every quarter (`policies/secure-procurement-policy.md`).

### 2.2 Currency volatility

- Significant SYP/USD exchange-rate volatility.
- Implication for design:
  - Government Payment Gateway shows dual SYP/USD pricing where USD is meaningful.
  - Multi-year contracts denominated to limit exchange-rate exposure.
  - Donor funding planned in USD with realistic SYP-conversion buffers.
  - Citizen-facing fees expressed in SYP at point of transaction; receipts include the FX context where relevant.

### 2.3 Budget realism

- Public-sector salaries, in real terms, are insufficient to attract senior digital talent at international rates.
- Implication for design:
  - Programme budgets must include retention premiums for SY-CERT and NDID engineering teams.
  - Hybrid model: a small core of senior in-house staff + framework contracts with vetted Syrian firms.
  - Diaspora technical contributions accepted via a clearly governed contribution channel.

---

## 3. Demographic and social constraints

### 3.1 Refugees and internally displaced persons (IDPs)

- A significant portion of the population is displaced internally or abroad.
- Many have lost paper identity documents.
- Implication for design:
  - NDID enrolment must include a **re-enrolment workflow** with biometric de-duplication and a documentary-light path for citizens whose papers were lost.
  - Diaspora consular enrolment is a recognised path.
  - "Address" is treated as variable; services must not assume permanent residency in a specific governorate.

### 3.2 Low digital trust

- Citizens have legitimate, historically grounded reasons for low trust in centralised data systems.
- Implication for design:
  - Citizen Rights Charter ratified before national rollout (`policies/citizen-rights-charter.md`).
  - Visible "who accessed my data" log (`prototype/data-access-log.html`).
  - Independent oversight body (proposed Data Protection Authority).
  - Public, plain-language reporting on incidents and audits.

### 3.3 Digital literacy variation

- Digital literacy varies sharply by age, region, and gender.
- Implication for design:
  - **Assisted-digital service centres** in every covered governorate (`policies/accessibility-policy.md` §4).
  - Plain Arabic in all citizen-facing copy.
  - Bilingual interfaces (Arabic primary, English secondary) for diaspora and donor audiences.
  - Telephone hotline in addition to digital channels.

---

## 4. Legacy-system and data constraints

### 4.1 Paper archives

- Most ministries hold large paper archives that are not yet digitised.
- Implication for design:
  - A **digitisation sub-track** is part of every ministry onboarding (`roadmap/ministry-onboarding-plan.md`).
  - Hybrid workflows (digital intake + manual back-office processing) are expected for the first 12–24 months.
  - Citizen-facing screens must not promise "instant" results when paper-stage processing remains.

### 4.2 Inconsistent data quality

- Civil registry, property registry, and business registry data have known inconsistencies.
- Implication for design:
  - "Once-only" promises are scoped to data the government has actually digitised.
  - Citizens can request correction (`policies/citizen-rights-charter.md`, right 4).
  - Data-quality dashboards are part of every ministry's quarterly report.

---

## 5. Operating-model constraints

### 5.1 Governorate-level rollout

- A single national big-bang launch carries unacceptable operational risk.
- Implication for design:
  - The roadmap is sequenced **governorate by governorate** (`roadmap/36-month-roadmap.md`).
  - Pilots start in governorates with the strongest infrastructure and the most able CDOs.
  - Coverage of governorates whose security or connectivity conditions do not yet meet the minimum operational requirements is reported honestly as "deferred", not as fictional rollout.

### 5.2 Workforce capacity

- The size of the existing public-sector digital workforce limits how many ministries can be onboarded in parallel.
- Implication for design:
  - At most 3–4 ministries onboarded in parallel in Year 1.
  - Onboarding cadence increases as the NDTC matures and standard playbooks (`roadmap/ministry-onboarding-plan.md`) take hold.

### 5.3 Security posture

- Syria is a high-threat environment for state-sponsored cyber-activity.
- Implication for design:
  - SY-CERT is stood up before nation-wide rollout, not after.
  - Independent penetration testing of every Tier-0 system before public launch.
  - Sovereign-cloud hosting for all L3/L4 data.

---

## 6. What this means for the headline targets

The targets in `docs/canonical-metrics-and-assumptions.md` are written
**conscious of these constraints**:

- "Top 70 UN E-Gov ranking within 5 years" — not 1 year, not 3 years.
- "80% NDID coverage within 5 years" — not 95%, accounting for re-enrolment of displaced citizens.
- "100% of priority service list within 5 years" — not "100% of all services".
- All financial figures presented as **scenarios**, not commitments.

---

*This document is part of the realism layer of Digital Syria Vision. It is administrative and technical, not political.*
