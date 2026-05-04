# Canonical Metrics and Assumptions

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Proposal — single source of truth for KPI numbers across the project |

---

## Purpose

This document is the **single canonical source** for every quantitative claim used across the Digital Syria Vision artefacts (`README.md`, `website/`, `docs/`, `presentation/`, `prototype/`).

Any number that appears in the project **must** match the values below. If a number cannot be reconciled with this document, the other artefact must be corrected, not this one.

All figures are **forward-looking targets and planning scenarios**, not commitments and not measured results.

---

## 1. Programme targets (5-year horizon)

| Metric | Canonical wording | Notes |
|---|---|---|
| UN E-Government Development Index ranking | **Target: Top 70 globally within 5 years** | Replaces any "#1 Arabic ranking" wording. Arabic-region positioning is a long-term ambition, not a 5-year target. |
| In-person visits for priority services | **Target: 50% reduction within 24 months** | Applies to a defined list of priority services, not all government services. |
| Average processing time for selected services | **Target: 60% reduction within 24 months** | Applies to digitised services in the priority list. |
| Citizens enrolled in NDID (adult population) | **Target: 80% within 5 years** | Conservative revision of earlier "95%" claim; depends on enrolment-centre rollout. |
| Government services available online (priority list) | **Target: 100% of the priority list within 5 years** | Priority list is a defined subset; "all government services" is a long-term ambition. |
| Paper forms eliminated for digitised services | **Target: 80% within 5 years** | |
| SY-CERT response time, P1 incidents | **Target: < 4 hours (mean time to acknowledge)** | Operational target once SY-CERT reaches steady-state. |
| Citizen satisfaction (digital channels) | **Target: 75% satisfaction within 36 months** | Measured by post-transaction survey on digitised services. |

---

## 2. Financial scenario (planning, not commitment)

The financial figures below are **planning scenarios**, not guaranteed outcomes. They depend on funding availability, sanctions regime, currency stability, and absorptive capacity.

| Item | Canonical figure | Notes |
|---|---|---|
| Total 5-year investment envelope | **USD 470 million (planning estimate)** | Subject to budget approval and donor co-financing. |
| Estimated annual benefit by Year 5 | **USD 480 million per year (scenario)** | Composed of efficiency savings, fraud reduction, and citizen time saved. **Scenario only.** |
| Estimated cumulative 5-year benefit | **USD 1.5 billion (scenario)** | Sum of ramp-up benefit Years 1–5. **Scenario only.** |
| Indicative payback period | **3–4 years (scenario)** | |

> **Important:** Estimated savings must always be presented as a scenario, not a guaranteed fact. Any artefact quoting a single number without the word "scenario", "estimated", or "target" is non-compliant with this standard.

---

## 3. Long-term ambitions (beyond 5 years, clearly labelled as such)

These items may appear in vision text only, and must be labelled as long-term ambitions:

- Leading position among Arabic-speaking countries in digital government maturity.
- 100% of all government services (not only the priority list) available online.
- Cross-border digital service interoperability with regional partners.

These are **not** 5-year commitments and must not be cited as 5-year KPIs.

---

## 4. Mock data conventions (for prototype only)

| Item | Canonical convention | Rationale |
|---|---|---|
| National Identification Number (NIN) format on screen | `SY-NIN-XXXX-XXXX` (8 hexadecimal characters, two groups of 4) | Removes embedded birth year and governorate. Privacy by Design. |
| Mock NIN displayed in citizen dashboard | `SY-NIN-8F3A-92KQ` | Clearly fictitious. |
| Mock phone number | `+963 11 XXX XXXX` | Pattern only, no real number. |
| Mock currency dual display | SYP primary, USD indicative | Reflects Syrian dual-pricing reality. |

---

## 5. Numbers that must NOT appear in artefacts

The following claims are explicitly retired and must not be used anywhere in the repository:

- "#1 Arab nation in digital government" (as a 5-year KPI).
- "95% NDID coverage" as a 5-year hard target (use 80%, see §1).
- Any "PCI-DSS compliant" badge in the prototype (use "designed for PCI-DSS alignment").
- Any "TLS 1.3" badge that implies the prototype itself enforces it (the prototype is static HTML).
- Any "850K req/min DDoS — mitigated" claim presented as real telemetry (must be labelled simulated).
- Any "99.9% uptime" claim presented as a measured fact for SyriaGovCloud.
- Any "real-time threat intelligence" claim by SY-CERT in the prototype.

---

## 6. Change-control rule

Any PR that changes a number on this list must:

1. Update this file first.
2. Then propagate the new number across `README.md`, `website/`, `docs/`, `presentation/`, and `prototype/`.
3. Note the change in `AUDIT_REPORT.md`.

---

*This document is a proposal. It does not represent existing Syrian government policy.*
