# Accessibility Policy

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Policy proposal — not yet enacted Syrian law |

---

## Executive Summary

All citizen-facing digital government services delivered under the Digital
Syria Vision programme must conform to **WCAG 2.1 Level AA** as a minimum,
support **right-to-left Arabic** as a first-class language, and provide
**assisted-channel alternatives** for citizens who cannot use digital channels
independently. This document is a policy proposal.

---

## 1. Scope

Applies to every citizen-facing digital channel produced under Digital Syria
Vision: web portals, mobile applications, kiosks, SMS/USSD services, IVR, and
chatbot interfaces.

---

## 2. Conformance target

- **Level**: WCAG 2.1 AA (with WCAG 2.2 AA as a recommended forward target).
- **Language**: Arabic (primary), with English where appropriate. Right-to-left
  layout must be tested explicitly, not assumed.
- **Assistive technology**: must be tested against at least one screen reader
  with Arabic support (e.g. NVDA + Arabic voice, VoiceOver).

---

## 3. Minimum requirements

| Area | Requirement |
|---|---|
| Contrast | Text contrast ratio ≥ 4.5:1; large text ≥ 3:1. |
| Keyboard | Every interactive element reachable and operable with keyboard alone, with a visible focus indicator. |
| Semantic HTML | Use `<main>`, `<nav>`, `<header>`, `<button>`, `<label>` correctly; do not simulate them with `<div>`. |
| Forms | Every input has an associated `<label>`; errors are announced to screen readers. |
| Images | All meaningful images have descriptive `alt` text; decorative images use `alt=""` or `aria-hidden="true"`. |
| Icons | Emoji used as decoration must carry `aria-hidden="true"`. SVG icons must have `<title>` or `aria-label`. |
| RTL | Use CSS logical properties (`inset-inline-start`, `margin-inline-start`, etc.) instead of physical `left`/`right` where possible. |
| Motion | Avoid auto-playing animation longer than 5 seconds; respect `prefers-reduced-motion`. |
| Time limits | No session expiry under 20 minutes without warning; allow extension. |
| Languages | Page must declare `lang` and `dir`; mixed-language fragments must declare their own `lang`. |
| Touch targets | Minimum 44 × 44 CSS pixels for interactive controls on mobile. |

---

## 4. Assisted channels

Every digital service offered to citizens must have at least one of the following alternatives:

- An assisted-digital service centre (مركز خدمة مساعد) where staff can complete the transaction on the citizen's behalf.
- A telephone or USSD fallback for status checks at minimum.
- A printable paper form, accepted at municipal offices, for citizens who cannot complete the digital flow.

Assisted channels are mandatory for the rollout in regions with low connectivity, low literacy, or among displaced populations.

---

## 5. Procurement and review

- Every procurement of a citizen-facing system must include WCAG 2.1 AA conformance as an acceptance criterion (see `policies/secure-procurement-policy.md`).
- Each ministry must publish an **annual accessibility statement** for its citizen-facing services, listing known issues and the remediation plan.
- Citizens may file an accessibility complaint via the channels defined in `policies/citizen-rights-charter.md`.

---

## 6. Testing

- Automated checks (e.g. axe-core, pa11y) on every release as a minimum.
- Manual keyboard-only walkthrough of every primary citizen journey before release.
- Annual independent audit by a third party, including users with disabilities.

---

*This document is a policy proposal. It does not represent existing Syrian law.*
