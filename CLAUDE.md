# CLAUDE.md — Project Rules, Architecture Rules & Quality Standards

## Project Identity

**Project:** Digital Syria Vision — National Digital Transformation and Digital Sovereignty Program  
**Purpose:** A government-level digital transformation strategy and prototype for Syria  
**Audience:** Government officials, technical architects, international development partners  

---

## Language Rules

| Context | Language |
|---------|----------|
| Code, filenames, comments, variables | **English** |
| Public-facing content, UI labels | **Arabic** (with English subtitles where appropriate) |
| Technical documentation | **English** |
| Executive presentations | **Arabic + English bilingual** |

---

## Architecture Principles

1. **Sovereignty First** — All core infrastructure must be hostable on Syrian sovereign cloud.
2. **Open Standards** — Prefer open APIs, open formats, and open-source components.
3. **Interoperability** — All government systems must expose and consume standard APIs.
4. **Privacy by Design** — Citizen data is protected at every layer.
5. **Zero-Trust Security** — No implicit trust; every access is authenticated and authorized.
6. **Resilience** — Systems must survive partial failures; no single points of failure.
7. **Accessibility** — All citizen-facing systems must meet WCAG 2.1 AA standards.
8. **Auditability** — Every data access and transaction must be logged immutably.

---

## Code Quality Standards

### General
- No hardcoded credentials or real citizen data anywhere in the codebase
- Mock data only — clearly labeled with `// MOCK DATA` or `<!-- MOCK DATA -->`
- All HTML must be valid and semantically structured
- CSS must be organized using logical sections with clear comments
- JavaScript must be clean, readable, and avoid global namespace pollution

### HTML
- Use semantic HTML5 elements (`<main>`, `<nav>`, `<section>`, `<aside>`, `<article>`)
- All images must have descriptive `alt` attributes
- Forms must have proper `<label>` associations
- Use `aria-*` attributes for accessibility

### CSS
- Use CSS custom properties (variables) for the design system
- Mobile-first responsive design
- No use of `!important` unless absolutely necessary
- Color palette must meet WCAG AA contrast ratios

### JavaScript
- Use `const`/`let`, never `var`
- Prefer `async/await` over promise chaining
- No inline event handlers in HTML
- Document complex functions with JSDoc comments

---

## Visual Design System

### Color Palette (Governmental)
- **Primary:** `#1a3a5c` (Deep Navy — authority, trust)
- **Secondary:** `#c5a028` (Gold — excellence, sovereignty)
- **Accent:** `#2e7d32` (Green — growth, hope)
- **Background:** `#f5f7fa` (Light grey)
- **Text:** `#1a1a2e` (Near-black)
- **Success:** `#388e3c`
- **Warning:** `#f57c00`
- **Danger:** `#c62828`

### Typography
- **Headings (Arabic):** Tajawal, Cairo
- **Headings (English):** Inter, system-ui
- **Body:** System-ui stack
- **Code:** JetBrains Mono, monospace

### Component Standards
- Cards use 8px border radius, subtle shadow
- Buttons use 4px border radius
- Forms use consistent 12px/16px spacing
- Tables use alternating row colors

---

## File Organization

```
Digital-Syria-Vision/
├── README.md              # Project overview and setup
├── CLAUDE.md              # This file — rules and standards
├── PROJECT_STATUS.md      # What's done, what remains
├── docs/                  # Strategic documents (Markdown)
├── prototype/             # Interactive web prototype
│   ├── assets/
│   │   ├── css/           # Stylesheets
│   │   ├── js/            # JavaScript modules
│   │   └── img/           # Images and icons
│   └── *.html             # Portal pages
├── website/               # Public-facing website
│   ├── assets/
│   └── index.html
├── architecture/          # Mermaid diagrams
└── presentation/          # Executive presentation content
```

---

## Security Standards

- **Authentication:** Multi-factor authentication required for all government portals
- **Authorization:** Role-Based Access Control (RBAC) with least-privilege principle
- **Encryption:** TLS 1.3 minimum for all communications; AES-256 for data at rest
- **Secrets:** No secrets in code; use environment variables or secret management services
- **Logging:** All security events logged to immutable audit trail
- **Incident Response:** Follow CERT framework in `docs/cybersecurity-cert-framework.md`

---

## Document Standards

All documents in `docs/` must include:
1. **Title and version number**
2. **Classification level** (Public / Restricted / Confidential)
3. **Executive summary** (max 200 words)
4. **Table of contents** for documents > 5 pages
5. **Last updated date**
6. **Responsible body** (e.g., Ministry of Communications)

---

## Git Workflow

- Commit messages must be descriptive and in English
- Feature branches named `feature/description`
- Documentation branches named `docs/description`
- No direct commits to `main` (requires review)
- Tag releases as `v{major}.{minor}.{patch}`

---

## Prohibited Practices

- ❌ No real citizen names, IDs, or personal data
- ❌ No hardcoded passwords or API keys
- ❌ No proprietary vendor lock-in in core architecture
- ❌ No undocumented external dependencies
- ❌ No accessibility violations in citizen-facing UI
- ❌ No single points of failure in architecture designs

---

*Last Updated: 2026-05-04*  
*Maintained by: Digital Syria Vision Technical Team*
