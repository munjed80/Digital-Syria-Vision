# رؤية سوريا الرقمية | Digital Syria Vision
## National Digital Transformation and Digital Sovereignty Program

> **"Syria will be a digitally sovereign nation where every citizen can access transparent, efficient, and dignified public services — from anywhere, at any time."**

---

## 📋 Project Overview

**Digital Syria Vision** is a comprehensive national strategy and **non-functional working prototype** for Syria's digital government transformation. It covers the full spectrum: strategic documents, technical architecture, an interactive citizen portal prototype, and an executive presentation.

This is a **strategic proposal**, not a live system. The prototype is a static HTML/CSS/JavaScript demonstration with **mock data only**. Every page in the prototype carries a clearly visible "PROTOTYPE — MOCK DATA ONLY" banner. The repository follows governmental-grade standards in structure, but does not itself enforce production controls (TLS, PCI-DSS, etc.) — those are designed-for in production.

---

## 🗂️ Repository Structure

```
Digital-Syria-Vision/
├── README.md                          # This file
├── CLAUDE.md                          # Project rules, architecture & quality standards
├── PROJECT_STATUS.md                  # What's built, what remains
│
├── docs/                              # Strategic Documents
│   ├── executive-summary.md           # Executive summary for leadership
│   ├── national-strategy.md           # Complete national transformation strategy
│   ├── 100-day-action-plan.md         # First 100 days action plan
│   ├── governance-model.md            # DGA governance and oversight structure
│   ├── cybersecurity-cert-framework.md
│   ├── gov-cloud-architecture.md
│   ├── digital-identity-architecture.md
│   ├── api-gateway-interoperability.md
│   ├── government-payment-gateway.md
│   ├── procurement-vendor-policy.md
│   ├── risk-matrix.md
│   ├── kpi-framework.md
│   ├── canonical-metrics-and-assumptions.md   # Single source of truth for all numbers
│   ├── syria-context-implementation-constraints.md  # Realism appendix
│   ├── disaster-recovery-and-backup.md
│   ├── government-cloud-baseline-standard.md
│   └── openapi-and-interoperability-standard.md
│
├── policies/                          # Government policy proposals
│   ├── data-classification-standard.md
│   ├── citizen-rights-charter.md
│   ├── accessibility-policy.md
│   ├── vendor-lock-in-prevention-policy.md
│   └── secure-procurement-policy.md
│
├── roadmap/                           # Phased rollout plans
│   ├── first-100-days.md
│   ├── 12-month-roadmap.md
│   ├── 36-month-roadmap.md
│   └── ministry-onboarding-plan.md
│
├── prototype/                         # Interactive Web Prototype (mock data only)
│   ├── index.html                     # Citizen login portal
│   ├── dashboard.html                 # Citizen dashboard
│   ├── services.html                  # Government services list
│   ├── tracking.html                  # Application request tracking
│   ├── payment.html                   # Payment flow mockup
│   ├── data-access-log.html           # Citizen data access log
│   ├── ministry-dashboard.html        # Ministry operations dashboard
│   ├── national-command.html          # National command center
│   ├── cybersecurity-alerts.html      # SY-CERT cybersecurity dashboard
│   └── assets/
│       ├── css/main.css               # Government design system
│       └── js/app.js                  # Core application logic + mock data
│
├── website/                           # Public-Facing Website
│   └── index.html                     # Vision, problem, solution, roadmap
│
├── architecture/                      # Mermaid Diagrams (6 diagrams)
│   ├── national-digital-architecture.md # Full national architecture
│   ├── digital-identity-flow.md        # NDID enrollment and auth flows
│   ├── api-gateway-flow.md             # API gateway processing
│   ├── gov-cloud-topology.md           # Infrastructure topology
│   ├── data-exchange-model.md          # Government data exchange
│   └── cert-incident-response-flow.md  # SY-CERT incident response
│
└── presentation/
    └── executive-presentation.md       # 15-slide executive briefing content
```

---

## 🚀 How to Run the Prototype

The prototype is a **pure HTML/CSS/JavaScript** application — no build tools or server required.

### Option 1: Open Directly in Browser
```bash
# Clone the repository
git clone https://github.com/munjed80/Digital-Syria-Vision.git
cd Digital-Syria-Vision

# Open the citizen portal
open prototype/index.html        # macOS
xdg-open prototype/index.html    # Linux
start prototype/index.html       # Windows
```

### Option 2: Local HTTP Server (Recommended)
```bash
# Using Python (available on most systems)
cd Digital-Syria-Vision
python3 -m http.server 8080

# Then open:
# http://localhost:8080/prototype/index.html     — Citizen Portal
# http://localhost:8080/website/index.html       — Public Website
```

### Option 3: Using Node.js
```bash
npx serve .
# Then visit http://localhost:3000/prototype/
```

### Quality checks (HTML lint)
```bash
npm install        # one-time
npm run lint:html  # validates prototype/ and website/ HTML
```

---

## 🖥️ Prototype Pages

| Page | URL | Description |
|------|-----|-------------|
| Citizen Login | `prototype/index.html` | NDID login + portal entry |
| Citizen Dashboard | `prototype/dashboard.html` | Personal overview + quick services |
| Government Services | `prototype/services.html` | Browse and apply for services |
| Request Tracking | `prototype/tracking.html` | Track application status |
| Payment Gateway | `prototype/payment.html` | Pay government fees |
| Data Access Log | `prototype/data-access-log.html` | See who accessed your data |
| Ministry Dashboard | `prototype/ministry-dashboard.html` | Ministry operations (login: ministry) |
| National Command | `prototype/national-command.html` | National digital command center |
| Cybersecurity | `prototype/cybersecurity-alerts.html` | SY-CERT security operations |
| Public Website | `website/index.html` | Public-facing vision website |

> **Note:** All data is mock/demonstration data. No real citizen information is used anywhere.

---

## 📑 How to Present the Project

### For Executive Audience
1. Open `website/index.html` in a full-screen browser
2. Walk through sections: Vision → Problem → Pillars → Roadmap → KPIs
3. Switch to `prototype/index.html` for live demonstration
4. Reference `presentation/executive-presentation.md` for slide content

### For Technical Audience
1. Start with `docs/national-strategy.md` for strategic context
2. Walk through `architecture/` diagrams (render Mermaid using GitHub or mermaid.live)
3. Show prototype with emphasis on API flows and security architecture
4. Reference `docs/gov-cloud-architecture.md` and `docs/digital-identity-architecture.md`

### Rendering Mermaid Diagrams
Architecture files contain Mermaid diagrams. To render them:
- **GitHub:** Renders automatically in `.md` files
- **Online:** Copy diagram code to [mermaid.live](https://mermaid.live)
- **VS Code:** Install "Markdown Preview Mermaid Support" extension

---

## 🎨 Design System

The prototype uses a custom governmental design system defined in `prototype/assets/css/main.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1a3a5c` | Deep Navy — authority, trust |
| `--color-secondary` | `#c5a028` | Gold — excellence, sovereignty |
| `--color-accent` | `#2e7d32` | Green — growth, hope |
| Font (Arabic) | Cairo | All Arabic text |
| Font (English) | Inter | All English text |

---

## 📊 Program at a Glance

> **All figures are planning targets and scenarios over a 5-year horizon, not commitments and not measured results. The single source of truth for these numbers is [`docs/canonical-metrics-and-assumptions.md`](docs/canonical-metrics-and-assumptions.md).**

| Dimension | Target / scenario (5-year horizon) |
|-----------|--------------|
| Citizens with NDID (adult population) | 80% |
| Government services available online (priority list) | 100% of priority list |
| Average processing time for selected services | -60% within 24 months |
| In-person visits for priority services | -50% within 24 months |
| Paper forms eliminated for digitised services | 80% |
| Estimated annual benefit by Year 5 (scenario) | ~USD 480M / year |
| Total 5-year investment envelope (planning) | USD 470M |
| UN E-Government Development Index ranking | Target: Top 70 globally |

> Regional leadership in Arabic-speaking countries is a long-term ambition beyond the 5-year horizon, **not** a 5-year KPI.

---

## 🇸🇾 Syria-Context Realism

This programme is designed for the actual Syrian operating environment — including electricity instability, connectivity limits, sanctions and procurement constraints, currency volatility, refugees and IDPs, legacy paper archives, and the need for assisted-digital service centres. The roadmap is sequenced **governorate by governorate**, not as a single national big-bang launch. See [`docs/syria-context-implementation-constraints.md`](docs/syria-context-implementation-constraints.md).

---

## ⚖️ Important Notes

- This is a **strategic proposal** — not a live government system
- All citizen data, names, and IDs in the prototype are **fictional mock data**
- Architecture decisions follow international best practices and open standards
- The project is designed to be **production-oriented in structure** even though the prototype is not connected to real systems

---

## 📄 License and Usage

This project is intended for government planning and demonstration purposes.  
Content may be adapted for actual national digital transformation initiatives with appropriate attribution.

---

*Digital Syria Vision | Version 1.0 | May 2026*  
*رؤية سوريا الرقمية | الإصدار 1.0 | مايو 2026*