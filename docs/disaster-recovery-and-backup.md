# Disaster Recovery and Backup Standard

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Standard proposal |

---

## Executive Summary

This document defines the minimum disaster recovery (DR) and backup
requirements for systems operating under the Digital Syria Vision programme.
It complements `docs/gov-cloud-architecture.md` and the proposed Government
Cybersecurity Baseline Standard. It is a **standard proposal**.

---

## 1. Scope

Applies to every system hosted on SyriaGovCloud and every government system
holding L3 or L4 data per `policies/data-classification-standard.md`. Each
system must declare a **Recovery Tier** at design time.

---

## 2. Recovery tiers

| Tier | Examples | RPO (max data loss) | RTO (max downtime) |
|---|---|---|---|
| **Tier 0 — Critical national** | NDID, GPG, SY-CERT operations | ≤ 15 minutes | ≤ 4 hours |
| **Tier 1 — Core ministry services** | Civil registry, business registry, payment-bearing services | ≤ 1 hour | ≤ 8 hours |
| **Tier 2 — Standard ministry services** | Most digitised priority services | ≤ 4 hours | ≤ 24 hours |
| **Tier 3 — Internal / non-critical** | Internal dashboards, internal portals | ≤ 24 hours | ≤ 72 hours |

> RPO = Recovery Point Objective. RTO = Recovery Time Objective.
> Tiers are targets in the steady-state; they are not Year-1 commitments.

---

## 3. Backup requirements

| Topic | Requirement |
|---|---|
| Frequency | Tier 0/1: continuous replication + hourly snapshots. Tier 2: at least daily. Tier 3: at least weekly. |
| Encryption | All backups encrypted at rest with keys held independently of the primary site. |
| Geography | At least one copy in a separate physical site within national territory. Cross-border backup is not permitted for L3/L4 data. |
| Retention | Per the data-retention schedule of the system; minimum 30 days for operational backups, with archival policy as defined per dataset. |
| Integrity | Backup integrity verified by automated restore to a sandbox at a defined cadence (Tier 0/1 weekly, Tier 2 monthly). |
| Immutability | Backups for L3/L4 data must be write-once for the agreed retention window. |
| Access | Restore operations require dual-control authorisation for Tier 0/1. |

---

## 4. Disaster recovery requirements

| Topic | Requirement |
|---|---|
| Secondary site | Tier 0/1 must have a hot or warm secondary site within national territory. |
| Network | DR site reachable on at least two independent paths. |
| Failover testing | Tier 0/1: live failover drill at least twice per year. Tier 2: at least once per year. Results published in summary. |
| Failback | Documented failback procedure with measured RTO. |
| Runbooks | Every Tier 0/1 system has a runbook in both Arabic and English; printed copies kept off-site. |
| Communications | A pre-approved citizen communications plan exists for Tier 0/1 outages. |
| Sanctions resilience | DR plan must remain workable if a foreign supplier withdraws service (see `policies/vendor-lock-in-prevention-policy.md`). |

---

## 5. Roles and responsibilities

- **System owner**: declares the Recovery Tier and signs off on the DR plan.
- **Ministry CDO**: ensures DR drills occur on schedule.
- **SY-CERT**: tracks DR readiness for Tier 0/1 systems and reports to NDTC.
- **NDTC**: arbitrates exceptions; publishes the national DR posture annually.

---

## 6. Reporting

Each ministry publishes an annual DR readiness summary including:

- Number of Tier 0/1/2 systems in scope.
- Date and outcome of the most recent DR drill per tier.
- Open DR risks and remediation plan.

---

## 7. Realism notes

- In Year 1 of the programme, very few systems will meet Tier 0 RPO/RTO.
  Honest reporting against the target is more valuable than green-washing.
- Electricity instability and connectivity gaps in some governorates will
  affect achievable RPO/RTO. The standard is a **target**, not a current
  state.

---

*This document is a standard proposal. It does not represent existing Syrian law.*
