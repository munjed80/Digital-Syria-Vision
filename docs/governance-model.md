# Governance Model
**Digital Syria Vision — Digital Government Governance Framework**

| | |
|---|---|
| **Version** | 1.0 |
| **Classification** | Public |
| **Date** | May 2026 |
| **Responsible Body** | Digital Government Authority (DGA) |

---

## 1. Governance Architecture

The Digital Syria Vision governance model operates on three tiers:

```
┌─────────────────────────────────────────────────────────┐
│         NATIONAL DIGITAL TRANSFORMATION COUNCIL          │
│                  (Chaired by PM)                         │
│  Strategic oversight, policy, and investment decisions   │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│           DIGITAL GOVERNMENT AUTHORITY (DGA)             │
│              (Director General + Committees)             │
│    Program management, standards, and coordination       │
└──────┬───────────────────────────────────┬──────────────┘
       │                                   │
┌──────▼──────┐  ┌──────────────┐  ┌──────▼──────────────┐
│  MINISTRY   │  │   MINISTRY   │  │      MINISTRY        │
│  TRANSFORM. │  │  TRANSFORM.  │  │     TRANSFORM.       │
│    UNITS    │  │    UNITS     │  │       UNITS          │
└─────────────┘  └──────────────┘  └─────────────────────┘
```

---

## 2. National Digital Transformation Council (NDTC)

### Composition
- **Chair:** Prime Minister
- **Vice-Chair:** Minister of Communications and Technology
- **Members:**
  - Minister of Finance
  - Minister of Interior (Civil Registry)
  - Minister of Justice
  - Minister of Health
  - Minister of Education
  - Minister of Economy
  - Governor, Central Bank of Syria
  - Director General, DGA (Secretary)
  - 3 private sector representatives
  - 2 civil society representatives
  - 1 academic representative

### Mandate
- Approve national digital transformation strategy and major revisions
- Allocate multi-year budget for digital government program
- Resolve cross-ministry disputes and blockages
- Receive quarterly KPI reports
- Approve major technology procurement decisions (>$10M)

### Meeting Cadence
- **Quarterly:** Full council meeting
- **Monthly:** Working group (Minister-level only)
- **As needed:** Emergency sessions for major incidents

---

## 3. Digital Government Authority (DGA)

### Mandate
The DGA is the operational body responsible for designing, building, and operating Syria's digital government infrastructure and services.

### Structure

```
Director General
│
├── Deputy DG (Operations)
│   ├── GovCloud Operations
│   ├── API Gateway Management
│   └── Service Delivery Center
│
├── Deputy DG (Security)
│   ├── SY-CERT
│   ├── Government SOC
│   └── Compliance & Audit
│
├── Deputy DG (Strategy & Standards)
│   ├── Policy & Legal
│   ├── Standards & Architecture
│   └── International Relations
│
├── Deputy DG (Digital Identity)
│   ├── NDID Operations
│   ├── Enrollment & Verification
│   └── Credential Management
│
└── Corporate Services
    ├── Finance & Procurement
    ├── Human Resources
    └── Communications
```

### DGA Key Committees

#### Technical Architecture Committee (TAC)
- Approves all major architecture decisions
- Sets and enforces government technology standards
- Reviews and certifies all government digital systems
- Meets: Monthly

#### Security & Privacy Committee (SPC)
- Oversees government cybersecurity posture
- Reviews data protection compliance
- Approves security waivers and exceptions
- Meets: Monthly (security review) + as needed (incidents)

#### Service Delivery Committee (SDC)
- Prioritizes government services for digitization
- Reviews citizen experience metrics
- Approves new services for portal launch
- Meets: Monthly

---

## 4. Ministry Digital Transformation Units (MDTU)

Each ministry must establish a dedicated Digital Transformation Unit:

### Required Positions per MDTU
| Role | Minimum FTE |
|------|------------|
| Chief Digital Officer (CDO) — Deputy Minister level | 1 |
| Digital Architecture Lead | 1 |
| Data Management Officer | 1 |
| Cybersecurity Officer | 1 |
| Service Design Lead | 1 |
| Digital Project Managers | 2-5 (based on ministry size) |

### MDTU Mandate
- Lead ministry digital transformation
- Liaise with DGA on standards and platform usage
- Own ministry service digitization roadmap
- Manage ministry API integration
- Report to DGA monthly

---

## 5. Decision Rights Framework (RACI)

| Decision Area | PM/NDTC | DGA | Ministry CDO | Ministry IT |
|---------------|---------|-----|--------------|-------------|
| National strategy | A | R | C | I |
| Budget allocation (>$10M) | A | R | C | I |
| Budget allocation ($1-10M) | I | A | R | C |
| Technology standards | I | A | R | C |
| Architecture approval (major) | I | A | R | C |
| Architecture approval (minor) | I | C | A | R |
| Service launch | I | A | R | C |
| Security incidents (critical) | I | A | R | R |
| Data sharing agreements | C | A | R | C |
| Vendor selection (>$5M) | C | A | R | I |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 6. Standards and Compliance

### Mandatory Government Technology Standards

All government systems must comply with:
- **SGAS-001:** API Design Standard (RESTful, OpenAPI 3.0)
- **SGAS-002:** Data Classification and Handling Standard
- **SGAS-003:** Identity and Access Management Standard
- **SGAS-004:** Government Cloud Hosting Standard
- **SGAS-005:** Cybersecurity Baseline Standard
- **SGAS-006:** Accessibility Standard (WCAG 2.1 AA minimum)
- **SGAS-007:** Arabic Language and Localization Standard
- **SGAS-008:** Government Mobile Application Standard

### Non-Compliance Process
1. Ministry receives written notice of non-compliance
2. 30-day remediation plan required
3. DGA provides technical assistance if needed
4. Escalation to NDTC if unresolved after 90 days
5. NDTC may withhold budget or mandate external remediation

---

## 7. Data Governance

### Data Ownership Principles
- **Citizens own their data** — government is custodian, not owner
- **Ministries own operational data** — but share via API with authorized parties
- **DGA operates master registries** — citizen, business, property
- **No data sold or commercialized** without explicit legal basis

### Cross-Ministry Data Sharing
- All data sharing must have a legal basis defined in legislation
- Data sharing agreements (DSA) required for each data exchange
- Citizen notification required for new data uses
- Data minimization principle — share only what is necessary

### Data Residency
- All personal citizen data must remain on Syrian sovereign infrastructure
- No personal data may be processed by foreign entities without explicit legal authorization and data protection agreement

---

## 8. Procurement Governance

### Principles
- Open competition preferred; single-source only with DGA approval
- Preference for open-source solutions to avoid vendor lock-in
- All contracts must include data portability and exit provisions
- Technology decisions subject to architecture review

### Procurement Thresholds

| Value | Approval Required |
|-------|------------------|
| < $100K | Ministry CDO |
| $100K – $1M | DGA Director General |
| $1M – $10M | DGA Board |
| > $10M | NDTC |

---

## 9. Performance Management

### DGA Performance Reporting
- Monthly: Operational dashboard to Deputy Ministers
- Quarterly: KPI report to NDTC
- Annual: Public Digital Government Report
- Ad hoc: Incident reports as required

### Ministerial Accountability
- CDOs held accountable for ministry transformation milestones
- Annual digital maturity assessment per ministry
- League table published publicly to incentivize performance

---

*Last Updated: May 2026 | Version 1.0*
