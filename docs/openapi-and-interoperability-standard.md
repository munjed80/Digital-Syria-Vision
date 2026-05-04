# OpenAPI and Interoperability Standard

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Standard proposal |

---

## Executive Summary

Every government system that participates in Digital Syria Vision must expose
its interfaces using **OpenAPI 3.x**, follow a common style guide, and
register its specifications with the National API Catalogue. This standard
makes the "shared national infrastructure" promise of the strategy
operational. It is a **standard proposal**.

---

## 1. Scope

Applies to every API exposed by:

- Ministries to other ministries.
- Ministries to citizens (via the citizen portal or third-party apps).
- Ministries to vetted private-sector partners.
- The shared services NDID, GPG, SY-CERT.

Internal back-of-house APIs that never cross a tenant boundary are out of
scope but are encouraged to follow the same style guide.

---

## 2. Specification format

- All APIs MUST be described in **OpenAPI 3.1** (or the latest stable version
  endorsed by the NDTC).
- The specification is the contract. Any change in production behaviour MUST
  be reflected in the specification first.
- Specifications are stored in version control and tagged at every release.

---

## 3. Style guide (excerpt)

| Topic | Rule |
|---|---|
| Naming | Resources are nouns, plural, kebab-case URL segments (`/citizens`, `/business-registrations`). |
| Methods | Use HTTP verbs correctly: GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE (remove). |
| Versioning | Major version in the URL: `/v1/citizens`. Breaking changes require a new major version and a deprecation notice. |
| Errors | Standard error envelope: `{ "code": "STRING", "message": "...", "traceId": "..." }`. |
| Pagination | Cursor-based for large collections; document the cursor format. |
| Date/time | ISO 8601 with timezone, UTC preferred. |
| Identifiers | Opaque, do not embed personal information (e.g. NIN format must follow the canonical mock format `SY-NIN-XXXX-XXXX` and must not embed birth year or governorate). |
| Localisation | `Accept-Language` header; default language is Arabic. |
| Authentication | OAuth 2.x / OpenID Connect via NDID. Static API keys are not allowed for production traffic. |
| Rate limiting | Documented per endpoint. Standard `Retry-After` semantics. |

---

## 4. Security baseline (APIs)

- Production traffic over TLS (TLS 1.3 required in the steady state; the
  prototype itself is static HTML and does not enforce TLS).
- Authentication: OAuth 2.x / OpenID Connect.
- Authorisation: scope-based, least-privilege.
- Input validation against the OpenAPI schema enforced at the gateway.
- Rate limiting and quota at the gateway.
- All requests/responses logged at the gateway with traceId; payload logging
  for L3+ data is restricted and reviewed.

---

## 5. National API Catalogue

- Every API MUST be registered in the National API Catalogue at the gateway.
- Each catalogue entry includes: owner ministry, data classes touched,
  contact, SLA, status (alpha/beta/stable/deprecated/retired).
- Public APIs (citizen-facing or partner-facing) MUST be discoverable through
  the public catalogue page.

---

## 6. Interoperability principles

1. **Open standards over proprietary.** No proprietary serialisation in
   inter-ministry traffic.
2. **Once-only principle.** A citizen should not have to re-submit data the
   government already holds. APIs make this possible.
3. **Consent-aware.** Cross-ministry calls touching L3 personal data MUST
   carry a consent or legal-basis token issued by NDID.
4. **Idempotency.** State-changing endpoints MUST support an idempotency key.
5. **Loose coupling.** Producers and consumers evolve independently within
   the API contract.

---

## 7. Lifecycle and review

- Each API published goes through a design review by the NDTC API Council.
- Deprecation policy: minimum 6 months notice for breaking changes; minimum
  12 months for major-version retirement.
- Annual interoperability audit, published in summary.

---

*This document is a standard proposal. It does not represent existing Syrian law.*
