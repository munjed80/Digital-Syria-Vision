# Procurement and Vendor Lock-in Policy
**Digital Syria Vision — Technology Procurement Framework**

| | |
|---|---|
| **Version** | 1.0 |
| **Classification** | Public |
| **Date** | May 2026 |
| **Responsible Body** | Digital Government Authority / Ministry of Finance |

---

## 1. Purpose

This policy governs technology procurement across all Syrian government entities to:
- Prevent harmful vendor lock-in
- Promote open standards and open-source solutions
- Ensure value for money
- Maintain data sovereignty
- Foster local technology industry development

---

## 2. Procurement Principles

### 2.1 Open by Default
Government technology procurement must prefer:
1. **Open source software** (first preference)
2. **Open standards-based proprietary software** (second preference)
3. **Proprietary software with clear exit provisions** (last resort, requires DGA approval)

### 2.2 Vendor Diversity
- No single vendor may supply more than 40% of any critical system's components
- Horizontal systems (cloud, identity, payment) must support multi-vendor deployment
- Periodic market testing required even with existing preferred suppliers

### 2.3 Data Portability
All technology contracts MUST include:
- Data export in standard, open formats
- 12-month transition period post-contract with full data access
- No data hostage clauses
- API access to all data during and after contract

---

## 3. Anti-Lock-in Requirements

### Mandatory Contract Clauses

Every government IT contract must include:

**Data Portability Clause:**
> The supplier shall, upon request and at contract expiry, provide all government data in open, standard formats (CSV, JSON, XML, SQL dump) at no additional charge, within 30 days of request.

**Exit Assistance Clause:**
> The supplier shall provide exit assistance for a minimum of 12 months following contract expiry, including documentation, data migration support, and handover to successor supplier, at rates not exceeding contract rates.

**Source Code Escrow:**
> For custom-developed software, the supplier shall deposit full source code in escrow with a DGA-approved escrow agent. Escrow shall be released upon: (a) supplier insolvency, (b) contract termination, (c) end of support period.

**Open API Clause:**
> All interfaces must be documented to OpenAPI 3.1 standard. APIs must not use proprietary formats that prevent interoperability with competing products.

---

## 4. Open Source Policy

### Preference for Open Source

The government will:
- Prefer open-source solutions where they meet requirements
- Contribute back to open-source projects where government modifications are made
- Publish government-developed software as open source (where not classified)

### Approved Open Source Stack

| Category | Preferred Open Source | Commercial Alternative |
|----------|----------------------|----------------------|
| Operating System | Ubuntu LTS, RHEL | Windows Server (with approval) |
| Web Server | Nginx, Apache | N/A |
| Database | PostgreSQL, MySQL | Oracle (with exit plan) |
| Container | Kubernetes, Docker | N/A |
| Cloud Platform | OpenStack | AWS GovCloud, Azure (with DR) |
| Identity | Keycloak, Gluu | Okta (with approval) |
| API Gateway | Kong, Gravitee | Apigee (with approval) |
| Monitoring | Prometheus, Grafana | Datadog (with approval) |
| CMS | Drupal, WordPress | N/A |

---

## 5. Procurement Process

### Standard Procurement Flow

```
NEEDS ASSESSMENT
    │ Ministry identifies need
    ▼
TECHNICAL SPECIFICATION
    │ DGA Architecture Review (mandatory for >$500K)
    │ Anti-lock-in review
    ▼
MARKET CONSULTATION (optional, recommended for complex)
    │ Engage market before formal tender
    ▼
COMPETITIVE TENDER
    │ Open tender (preferred)
    │ Restricted tender (invited suppliers, for specialized)
    │ Framework agreement call-off
    ▼
EVALUATION
    │ Technical evaluation (40%)
    │ Commercial evaluation (30%)
    │ Vendor risk/lock-in assessment (20%)
    │ Local content (10%)
    ▼
CONTRACT NEGOTIATION
    │ Standard government terms applied
    │ Anti-lock-in clauses non-negotiable
    ▼
DGA APPROVAL (>$1M)
    ▼
CONTRACT AWARD
```

### Evaluation Criteria

| Criterion | Weight | Sub-criteria |
|-----------|--------|-------------|
| Technical capability | 40% | Functionality, performance, security, standards compliance |
| Commercial | 30% | Total cost of ownership, value for money, payment terms |
| Risk/Lock-in | 20% | Vendor stability, open standards, exit provisions |
| Local content | 10% | Syrian company participation, local employment, skills transfer |

---

## 6. Local Technology Industry Development

### Local Content Requirements

For contracts > $500K:
- Minimum 20% local content (Year 1)
- Minimum 35% local content (Year 3)
- Minimum 50% local content (Year 5)

*Local content includes: Syrian company participation, Syrian employment, training in Syria, local offices.*

### Technology Transfer Requirements

For contracts > $5M, suppliers must:
- Provide training to minimum 10 Syrian engineers on the technology
- Commit to minimum 20% Syrian employment on the project
- Develop and share technical documentation in Arabic
- Participate in annual Digital Government Summit

### Syrian Startup Preference

For contracts < $1M:
- Syrian-registered companies with < 5 years in operation receive 10% price preference
- Fast-track procurement process for innovation contracts

---

## 7. Prohibited Practices

The following are strictly prohibited:

- **Single-source without justification:** Must document market failure or security need
- **Proprietary data formats:** All data must be exportable in open formats
- **Perpetual licensing without review:** All licenses reviewed every 3 years maximum
- **Vendor-controlled encryption keys:** Government must control all encryption keys
- **Foreign data jurisdiction:** Personal citizen data cannot be stored under foreign law
- **Bundled services preventing competition:** Must be able to replace components independently

---

## 8. Vendor Management

### Approved Vendor Register
- DGA maintains list of approved technology vendors
- New vendors must complete security and financial vetting
- Annual vendor performance review
- Vendors removed for breaching contract terms, security violations, or sanctions

### Conflict of Interest
- Government officials involved in procurement cannot have financial interest in vendors
- Mandatory declaration of interests before any procurement process
- Cooling-off period of 2 years before government official can work for vendor

---

*Last Updated: May 2026 | Version 1.0*
