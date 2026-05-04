# Risk Matrix
**Digital Syria Vision — Program Risk Register**

| | |
|---|---|
| **Version** | 1.0 |
| **Classification** | Public |
| **Date** | May 2026 |
| **Responsible Body** | Digital Government Authority — PMO |

---

## Risk Scoring Framework

**Likelihood:** 1 (Rare) → 5 (Almost Certain)  
**Impact:** 1 (Negligible) → 5 (Catastrophic)  
**Risk Score:** Likelihood × Impact  

| Score | Rating | Response |
|-------|--------|----------|
| 1–4 | LOW | Monitor |
| 5–9 | MEDIUM | Mitigate and Monitor |
| 10–16 | HIGH | Mitigate with Action Plan |
| 17–25 | CRITICAL | Immediate Escalation Required |

---

## Risk Register

### Strategic Risks

| ID | Risk | Likelihood | Impact | Score | Rating | Mitigation |
|----|------|-----------|--------|-------|--------|-----------|
| SR-01 | Political instability disrupts program continuity | 3 | 5 | 15 | HIGH | Bipartisan political buy-in; embed program in legislation not executive order |
| SR-02 | Loss of key program leadership (DGA DG, ministers) | 3 | 4 | 12 | HIGH | Documented succession plans; institutional knowledge management |
| SR-03 | International funding fails to materialize | 3 | 4 | 12 | HIGH | Phase program to reduce dependency; World Bank backstop |
| SR-04 | Program scope creep leading to overrun | 4 | 3 | 12 | HIGH | Strict change control; PMO governance |
| SR-05 | Public opposition to digital ID / surveillance concerns | 3 | 3 | 9 | MEDIUM | Transparent communications; privacy guarantees; civil society engagement |
| SR-06 | Regional conflict disrupting infrastructure | 2 | 5 | 10 | HIGH | Geographic redundancy; DR planning; rapid restoration procedures |

---

### Technical Risks

| ID | Risk | Likelihood | Impact | Score | Rating | Mitigation |
|----|------|-----------|--------|-------|--------|-----------|
| TR-01 | GovCloud data center construction delays | 4 | 4 | 16 | HIGH | Interim cloud on existing infrastructure; contract penalty clauses |
| TR-02 | NDID system security breach | 2 | 5 | 10 | HIGH | Pre-launch penetration testing; phased rollout; incident response plan |
| TR-03 | National API Gateway performance under load | 3 | 4 | 12 | HIGH | Load testing; horizontal scaling design; circuit breakers |
| TR-04 | Legacy ministry systems incompatible with integration | 4 | 3 | 12 | HIGH | Adapter/translation layer; ministry system replacement roadmap |
| TR-05 | Payment gateway fraud or financial crime | 2 | 5 | 10 | HIGH | PCI-DSS compliance; fraud detection; Central Bank partnership |
| TR-06 | Ransomware attack on government systems | 3 | 5 | 15 | HIGH | Immutable backups; network segmentation; SY-CERT response |
| TR-07 | Citizen portal performance during peak demand | 3 | 3 | 9 | MEDIUM | Auto-scaling; CDN; load testing before launch |
| TR-08 | Data loss from infrastructure failure | 2 | 5 | 10 | HIGH | RPO/RTO targets; tested DR procedures; multi-site replication |
| TR-09 | Biometric data breach (NDID) | 1 | 5 | 5 | MEDIUM | HSM-based storage; biometric never leaves Syria; encryption |
| TR-10 | Telecommunication network failures in regions | 3 | 3 | 9 | MEDIUM | Offline capability for mobile app; satellite backup for critical sites |

---

### Organizational Risks

| ID | Risk | Likelihood | Impact | Score | Rating | Mitigation |
|----|------|-----------|--------|-------|--------|-----------|
| OR-01 | Inability to recruit qualified digital government talent | 4 | 4 | 16 | HIGH | Diaspora recruitment; international secondments; competitive salaries |
| OR-02 | Ministry resistance to transformation | 4 | 3 | 12 | HIGH | Strong political mandate; champion network; incentivize cooperation |
| OR-03 | Civil servant skills insufficient for digital tools | 4 | 3 | 12 | HIGH | Digital Government Academy; mandatory training; change management |
| OR-04 | DGA institutional capacity insufficient | 3 | 4 | 12 | HIGH | International advisory support; phased capacity building |
| OR-05 | High staff turnover in DGA | 3 | 3 | 9 | MEDIUM | Competitive compensation; career development; documentation culture |
| OR-06 | Corruption in procurement processes | 3 | 5 | 15 | HIGH | Transparent e-procurement; anti-corruption controls; international oversight |

---

### External Risks

| ID | Risk | Likelihood | Impact | Score | Rating | Mitigation |
|----|------|-----------|--------|-------|--------|-----------|
| ER-01 | Nation-state cyber attack on government systems | 3 | 5 | 15 | HIGH | Defense-in-depth; SY-CERT; international cooperation; resilient architecture |
| ER-02 | Supply chain attack on procured software | 2 | 5 | 10 | HIGH | Vendor security assessment; SBOM requirements; continuous monitoring |
| ER-03 | Foreign technology sanctions/restrictions | 2 | 4 | 8 | MEDIUM | Open-source priority; multi-vendor; domestic alternatives |
| ER-04 | Low citizen digital literacy reducing adoption | 4 | 3 | 12 | HIGH | Digital literacy program; simplified UX; assisted digital channels |
| ER-05 | Private sector unwillingness to invest in Syria | 3 | 3 | 9 | MEDIUM | Investment guarantees; PPP framework; showcase successes |
| ER-06 | Internet infrastructure insufficient for services | 3 | 4 | 12 | HIGH | Investment in national broadband; offline-first design; USSD fallback |

---

## Critical Risk Action Plans

### SR-01: Political Instability
**Owner:** PM Office / DGA  
**Actions:**
1. Embed program in primary legislation (not executive order)
2. All-party parliamentary briefing on program
3. Quarterly cross-party oversight committee
4. International treaty commitments creating program obligations
5. Document program assets and contracts to survive government changes

### TR-01: GovCloud Delays
**Owner:** DGA Operations  
**Actions:**
1. Deploy interim cloud environment on existing secure servers (Month 1)
2. Contract penalty clauses for construction milestones
3. Monthly progress reviews with executive escalation
4. Pre-qualify second contractor as backup
5. Negotiate early equipment delivery to reduce critical path

### OR-01: Talent Shortage
**Owner:** DGA HR  
**Actions:**
1. Establish Syrian Diaspora Digital Talent Program
2. Partner with international organizations for technical secondments
3. Competitive salary bands for digital government roles
4. 3-year contract stability for key technical roles
5. University partnership for graduate recruitment pipeline

### ER-01: Nation-State Cyber Attack
**Owner:** SY-CERT / DGA Security  
**Actions:**
1. Deploy defense-in-depth security architecture
2. Establish cyber intelligence sharing with allied CERTs
3. Annual red team exercise by international firm
4. Classified playbook for state-level attacks
5. Resilient architecture ensuring services continue despite attack

---

## Risk Monitoring

### Review Cadence
- **Weekly:** PMO risk review (operational risks)
- **Monthly:** DGA leadership risk review (strategic + technical)
- **Quarterly:** NDTC risk report (full risk register)
- **Event-driven:** Incident risk review (new risk identification)

### Escalation Triggers
| Risk Rating Change | Action |
|-------------------|--------|
| LOW → MEDIUM | Notify Program Manager |
| MEDIUM → HIGH | Notify DGA Director General |
| HIGH → CRITICAL | Notify NDTC; Emergency meeting |

---

*Last Updated: May 2026 | Version 1.0*
