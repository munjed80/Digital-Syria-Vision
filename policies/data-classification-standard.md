# Data Classification Standard

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Policy proposal — not yet enacted Syrian law |

---

## Executive Summary

This standard defines four classification levels for all data handled by Syrian
government information systems, and the minimum handling controls that must be
applied at each level. It is intended to be issued by the proposed National
Digital Transformation Council and adopted by every ministry that connects to
SyriaGovCloud, the National Digital Identity (NDID), or the Government API
Gateway.

The standard is a **policy proposal**. It is not yet existing Syrian law and
must be reviewed by the Ministry of Justice, the Ministry of Interior, and the
Council of Ministers before adoption.

---

## 1. Scope

This standard applies to:

- All structured and unstructured data created, received, processed, stored, or
  transmitted by entities adopting Digital Syria Vision standards.
- All employees, contractors, and third-party processors of those entities.
- All channels: production systems, backups, exports, screen displays, paper
  printouts, and verbal disclosure.

---

## 2. Classification levels

| Level | Arabic label | Definition | Examples |
|---|---|---|---|
| **L1 — Public** | عام | Information cleared for unrestricted publication. | Published laws, public service descriptions, open statistics. |
| **L2 — Internal** | داخلي | Information for internal government use; disclosure causes minor harm. | Internal procedures, draft circulars, non-sensitive performance data. |
| **L3 — Confidential** | سري | Information whose disclosure causes material harm to citizens, ministries, or the state. | Personal data of citizens, payment records, NDID enrolment data, audit logs. |
| **L4 — Secret** | سري للغاية | Information whose disclosure causes serious harm to national security, public order, or critical infrastructure. | National security data, certain critical-infrastructure design details, cryptographic key material, ongoing CERT investigations. |

Default classification when unclassified: **L2 — Internal**.

---

## 3. Handling controls (minimum)

| Control | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| Encryption at rest | Optional | Recommended | **Required (AES-256 or equivalent)** | **Required (AES-256 + HSM-backed keys)** |
| Encryption in transit | Recommended | **Required (TLS in production)** | **Required (TLS in production)** | **Required (TLS in production, mutual TLS for system-to-system)** |
| Access control | Open | Authenticated | RBAC, least privilege, MFA | RBAC, least privilege, MFA, named-user only |
| Audit logging | Optional | Access logs retained | Full immutable audit trail | Full immutable audit trail + independent review |
| Data residency | Any | Within national territory recommended | **Within national territory required** | **Within national territory required, with sovereign cloud only** |
| Removable media | Allowed | Allowed with care | Encrypted only, registered | Prohibited unless approved in writing |
| Printing | Allowed | Allowed | Marked "Confidential", logged | Prohibited unless approved in writing |
| Cross-border transfer | Allowed | Subject to review | Prohibited without explicit approval | Prohibited |
| Retention | Per business need | Per ministry policy | Per data-retention schedule, max as defined | Per data-retention schedule, with mandatory destruction |

> Note: "TLS in production" applies to operational government systems. The
> Digital Syria Vision prototype in this repository is a static demonstration
> served over `file://` or local HTTP and does not, in itself, enforce these
> controls.

---

## 4. Roles and responsibilities

- **Data owner** (named ministry official): assigns classification, approves access.
- **Data steward**: implements controls, monitors compliance.
- **System owner**: ensures the system technically enforces the controls for its highest data class.
- **CISO of the entity**: validates handling and reports to SY-CERT.
- **NDTC** (proposed): publishes and maintains this standard; adjudicates disputes.

---

## 5. Citizen-facing implications

- Citizens have the right to know which classification their personal data sits in (L3 by default).
- Citizens have the right to a record of access (see `prototype/data-access-log.html` and the proposed Citizen Rights Charter).
- Re-classification downward (L3 → L2) of personal data requires written justification.

---

## 6. Review and exceptions

- This standard is reviewed every 12 months.
- Exceptions require written approval by the data owner, the entity CISO, and the NDTC, and must be time-bounded and logged.

---

*This document is a policy proposal. It does not represent existing Syrian law.*
