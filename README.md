# رؤية سوريا الرقمية | Digital Syria Vision
## National Digital Transformation and Digital Sovereignty Program

> **"Syria will be a digitally sovereign nation where every citizen can access transparent, efficient, and dignified public services — from anywhere, at any time."**

---

## 📋 Project Overview

**Digital Syria Vision** is a comprehensive national strategy and working prototype for Syria's digital government transformation. It covers the full spectrum: strategic documents, technical architecture, interactive citizen portal prototype, and an executive presentation.

This is a **production-oriented** proposal project — not a demo. Every document, architecture decision, and code file follows governmental-grade standards.

---

## 🗂️ Repository Structure

```
Digital-Syria-Vision/
├── README.md                          # This file
├── CLAUDE.md                          # Project rules, architecture & quality standards
├── PROJECT_STATUS.md                  # What's built, what remains
│
├── docs/                              # Strategic Documents (12 documents)
│   ├── executive-summary.md           # Executive summary for leadership
│   ├── national-strategy.md           # Complete national transformation strategy
│   ├── 100-day-action-plan.md         # First 100 days action plan
│   ├── governance-model.md            # DGA governance and oversight structure
│   ├── cybersecurity-cert-framework.md # SY-CERT national cybersecurity framework
│   ├── gov-cloud-architecture.md      # SyriaGovCloud infrastructure design
│   ├── digital-identity-architecture.md # NDID national identity system
│   ├── api-gateway-interoperability.md # API standards and gateway architecture
│   ├── government-payment-gateway.md  # GPG payment infrastructure
│   ├── procurement-vendor-policy.md   # Anti-lock-in procurement policy
│   ├── risk-matrix.md                 # Program risk register and mitigations
│   └── kpi-framework.md               # Performance measurement framework
│
├── prototype/                         # Interactive Web Prototype
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

| Dimension | Target (2030) |
|-----------|--------------|
| Citizens with NDID | 95% of adults |
| Services online | 100% |
| Service delivery time | -80% vs. 2026 |
| Paper forms eliminated | 90% |
| Annual benefits by Year 5 | $480M |
| Total 5-year investment | $470M |
| UN e-Gov ranking target | Top 70 globally |

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