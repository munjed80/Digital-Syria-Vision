# Government Cloud Baseline Standard

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Standard proposal |

---

## Executive Summary

This standard defines the minimum baseline configuration that every workload
deployed on SyriaGovCloud must meet, in terms of identity, network, data,
operations, and observability. It complements `docs/gov-cloud-architecture.md`
and the Government Cybersecurity Baseline Standard. It is a **standard
proposal**.

---

## 1. Scope

Applies to every workload deployed on SyriaGovCloud (or on a sovereign cloud
recognised as equivalent by the NDTC).

---

## 2. Tenancy and identity baseline

- Each ministry has its own logical tenant (account/project/subscription).
- Cross-tenant access only via the Government API Gateway.
- All human access uses NDID-backed federated identity. Local accounts are
  prohibited except for break-glass with named-user, MFA, and audit logging.
- Service accounts use short-lived credentials. Long-lived static keys are
  prohibited for production workloads.
- Role-based access control with least privilege. Production write-access
  requires named-person authorisation per change.

---

## 3. Network baseline

- Default-deny ingress; explicit allow-listing per service.
- Workloads default to private network; public exposure goes through the
  API Gateway and the Web Application Firewall.
- East-west traffic between tenants only via the API Gateway with mutual TLS
  in production.
- All public endpoints behind a DDoS-protection layer.

---

## 4. Data baseline

- Data classification declared at system creation per
  `policies/data-classification-standard.md`.
- L3/L4 data: encrypted at rest with keys managed in a hardware security
  module (HSM) or equivalent; keys not exportable in plaintext.
- All data residency within national territory for L3/L4.
- Backup and DR per `docs/disaster-recovery-and-backup.md`.

---

## 5. Compute baseline

- Container workloads preferred (OCI images, Kubernetes orchestrator).
- Base images patched within the maintenance window defined by SY-CERT.
- Software bill of materials (SBOM) generated on every build.
- No container runs as root unless explicitly justified and reviewed.

---

## 6. Observability baseline

- Centralised logs forwarded to a tenant-isolated log store with tamper-evident
  retention.
- Audit events for L3/L4 data access forwarded to SY-CERT.
- Application metrics and traces collected via open standards (OpenTelemetry).
- Alerting thresholds defined per service before launch.

---

## 7. Change management baseline

- All changes via a code-reviewed pipeline. No untracked production changes.
- Pre-production environment exists for every Tier 0/1/2 system.
- Rollback plan defined for every change.
- Post-incident reviews are mandatory and shared with the NDTC and SY-CERT.

---

## 8. Sovereignty baseline

- No production dependency on a foreign-managed control plane that cannot be
  taken over by the government in a sanctions event.
- Cryptographic primitives implementable from independently reproducible
  sources.
- All vendor managed services have a documented open-source migration option.

---

## 9. Compliance and review

- Every workload completes a pre-production checklist signed by the system
  owner, the ministry CISO, and SY-CERT.
- Annual baseline review by SY-CERT; findings reported to the NDTC.
- Exceptions require time-bounded approval and a remediation plan.

---

*This document is a standard proposal. It does not represent existing Syrian law.*
