# Secure Procurement Policy

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Policy proposal — not yet enacted Syrian law |

---

## Executive Summary

This policy defines the minimum security, accessibility, and sovereignty
requirements that every IT procurement under the Digital Syria Vision
programme must satisfy, and the gating process by which procurements are
reviewed before award. It is a policy proposal and complements the existing
`docs/procurement-vendor-policy.md` and `policies/vendor-lock-in-prevention-policy.md`.

---

## 1. Scope

Applies to every procurement, donation, grant, or pro-bono engagement that
introduces software, hardware, cloud capacity, or professional services into
a system connected to NDID, SyriaGovCloud, the Government API Gateway, the
Government Payment Gateway, or any system holding L3 or L4 data (see
`policies/data-classification-standard.md`).

---

## 2. Mandatory pre-award checks

A procurement may not be awarded until the following checks are complete and
recorded in the procurement file.

| # | Check | Owner |
|---|---|---|
| 1 | Data classification of the system has been declared and matches the security requirement in the tender. | Data owner |
| 2 | Anti-lock-in clauses (`policies/vendor-lock-in-prevention-policy.md`) are present in the contract. | Legal |
| 3 | Sanctions exposure has been disclosed by the supplier (Clause G). | Procurement officer |
| 4 | Accessibility conformance (WCAG 2.1 AA) is an acceptance criterion. | Accessibility lead |
| 5 | Software bill of materials (SBOM) has been requested and provided. | CISO |
| 6 | Known-vulnerability scan (e.g. against the GitHub Advisory Database or equivalent) has been carried out on declared dependencies. | CISO |
| 7 | Penetration test plan is part of the acceptance, for L3/L4 systems. | CISO |
| 8 | Data residency is "within national territory" for L3/L4. | Data owner |
| 9 | Exit plan and data export format are documented. | Procurement officer |
| 10 | Total cost of ownership is calculated over 5 years, including exit costs. | Finance |

---

## 3. Source disclosure

For every awarded supplier, the following must be published on the buying
ministry's website (excluding any item that is itself classified L3 or
above):

- Supplier name and country of incorporation.
- Contract value and term.
- Scope summary (one paragraph).
- Class of data handled (L1–L4).
- Date of last security review.

---

## 4. Tender language

Every tender must include this clause:

> "The supplier acknowledges that the system will operate within the Digital
> Syria Vision standards framework, including but not limited to the Data
> Classification Standard, the Vendor Lock-in Prevention Policy, the
> Accessibility Policy, and the Citizen Digital Rights Charter. Compliance
> with these documents is a contractual obligation."

---

## 5. Sanctions and procurement constraints

The Syrian Arab Republic is currently subject to multiple international
sanctions regimes. The following constraints shall be observed:

- No procurement shall create a single point of failure that depends on a
  vendor or service that may be withdrawn under a sanctions regime.
- Open-source software with self-hostable infrastructure is preferred where
  functional equivalence exists.
- Cryptographic primitives shall be implemented from independently
  reproducible sources.
- Cloud and SaaS engagements must include an in-country fallback option.

---

## 6. Currency and payment

- Contracts shall be denominated in Syrian Pounds (SYP) or US Dollars (USD)
  per the Ministry of Finance directive at the time of contract.
- Foreign-currency exposure shall be disclosed and hedged where material.

---

## 7. Review

- This policy is reviewed every 12 months.
- The NDTC may issue addenda for emerging risks (e.g. AI procurement, supply-chain compromise).

---

*This document is a policy proposal. It does not represent existing Syrian law.*
