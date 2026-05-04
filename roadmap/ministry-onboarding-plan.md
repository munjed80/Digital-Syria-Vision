# Ministry Onboarding Plan

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Plan proposal |

---

## Executive Summary

This plan defines the standard process by which a Syrian ministry is
onboarded to the Digital Syria Vision shared services (NDID, SyriaGovCloud,
Government API Gateway, Government Payment Gateway, SY-CERT). It is intended
as a repeatable playbook so that ministries can plan, budget, and execute
onboarding consistently.

---

## 1. Pre-conditions

Before a ministry can begin onboarding, the following must be true:

- The ministry has appointed a Chief Digital Officer (CDO).
- The ministry has signed the NDTC charter and committed to the policies in
  `policies/`.
- The ministry has identified at least one **priority service** suitable for
  digitisation (clear scope, citizen demand, end-to-end ownership).
- A budget envelope and timeline have been agreed with the Ministry of Finance
  and the NDTC.

---

## 2. The five-stage onboarding process

### Stage 1 — Discovery (4–6 weeks)

- Map the ministry's current systems and citizen journeys for the chosen service.
- Identify the data the ministry holds, classified per `policies/data-classification-standard.md`.
- Identify dependencies on other ministries (e.g. civil registry, finance).
- Output: a **Ministry Onboarding Brief**, signed by the ministry CDO and the NDTC.

### Stage 2 — Design (6–8 weeks)

- Co-design the digital citizen journey with NDTC architects.
- Define the API contract using the OpenAPI 3.x style guide (`docs/openapi-and-interoperability-standard.md`).
- Define the assisted-channel fallback (`policies/accessibility-policy.md`).
- Define the data flows in the data classification matrix.
- Output: a **Service Design Document** and a published OpenAPI specification.

### Stage 3 — Build and integrate (8–16 weeks)

- Build the service against the SyriaGovCloud baseline (`docs/government-cloud-baseline-standard.md`).
- Integrate with NDID for authentication.
- Integrate with the Government API Gateway for inter-ministry calls.
- Integrate with the Government Payment Gateway if applicable.
- Pass the cybersecurity baseline check with SY-CERT.
- Output: a **Service in pre-production**.

### Stage 4 — Pilot (4–8 weeks)

- Launch the service for an invited cohort in one or two governorates.
- Measure: completion rate, processing time, drop-off points, citizen satisfaction.
- Iterate weekly; publish a short pilot report at end.
- Output: a **Pilot Report** with red/amber/green readiness verdict.

### Stage 5 — Public launch and operations

- Phased rollout by governorate per `roadmap/36-month-roadmap.md`.
- 24/7 incident reporting line to SY-CERT.
- Quarterly performance report to NDTC.
- Annual independent audit.

---

## 3. Roles and responsibilities (RACI summary)

| Activity | Ministry | Ministry CDO | NDTC | SY-CERT | Ministry of Finance |
|---|---|---|---|---|---|
| Service ownership | A | R | C | I | I |
| Architecture conformance | I | R | A | C | I |
| Cybersecurity baseline | I | R | C | A | I |
| Budget and finance | I | C | C | I | A |
| Citizen-rights conformance | I | R | A | I | I |
| Procurement compliance | R | A | C | I | C |

R = Responsible, A = Accountable, C = Consulted, I = Informed.

---

## 4. Standard ministry deliverables (templates)

Each onboarding ministry must produce, at minimum:

- A Ministry Onboarding Brief (Stage 1 output).
- A Service Design Document, including data-flow diagram (Stage 2).
- An OpenAPI 3.x specification per service.
- A privacy impact assessment for every service handling L3+ data.
- An accessibility statement per `policies/accessibility-policy.md`.
- A quarterly performance report, public summary.

---

## 5. Realism notes

- Most ministries will take **6–12 months** to complete the full five stages
  for the first service. Subsequent services are much faster.
- Legacy paper archives are the most common blocker. Plan a **digitisation
  sub-track** with assisted-data-entry centres rather than waiting for a
  perfect digital baseline.
- A failed pilot is acceptable and instructive. The programme must reward
  honest reporting over green-washed dashboards.

---

*This document is a planning proposal.*
