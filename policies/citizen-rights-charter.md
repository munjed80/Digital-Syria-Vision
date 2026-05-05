# ميثاق حقوق المواطن الرقمية | Citizen Digital Rights Charter

| | |
|---|---|
| **Document Version** | 1.0 |
| **Classification** | Public |
| **Last Updated** | 2026-05-04 |
| **Responsible Body** | National Digital Transformation Council (NDTC) — proposed |
| **Status** | Policy proposal — not yet enacted Syrian law |

---

## Executive Summary

This charter sets out the rights of every Syrian citizen and resident in their
interaction with digital government services under the proposed Digital Syria
Vision programme. It is written in plain Arabic for the public-facing version
and in English here for technical and donor audiences. It is a **policy
proposal** and must be ratified by the appropriate Syrian legislative body
before it becomes binding.

---

## النص العربي للميثاق (Arabic public-facing text)

**ميثاق حقوق المواطن الرقمية**

تلتزم الحكومة الرقمية السورية المقترحة بالحقوق التالية لكل مواطن ومقيم على أراضيها:

1. **حق الوصول العادل**: لكل مواطن الحق في الوصول إلى الخدمات الحكومية الرقمية بشكل مجاني عبر القنوات الإلكترونية، مع إتاحة قنوات بديلة (مراكز الخدمة المساعدة، الهاتف، النماذج الورقية) لمن لا يستطيع الوصول الرقمي.

2. **حق المعرفة**: لكل مواطن الحق في معرفة من اطّلع على بياناته الشخصية، ومتى، ولأي غرض، عبر سجل وصول إلى البيانات قابل للمراجعة في أي وقت.

3. **حق الموافقة**: لا يجوز مشاركة البيانات الشخصية بين الجهات الحكومية إلا بموافقة المواطن أو بأساس قانوني واضح ومُعلَن مسبقاً.

4. **حق التصحيح**: لكل مواطن الحق في طلب تصحيح بياناته الشخصية إذا كانت غير دقيقة، وفي الحصول على رد مكتوب خلال مدة زمنية محددة.

5. **حق تنزيل البيانات**: لكل مواطن الحق في الحصول على نسخة من بياناته الشخصية بصيغة قابلة للقراءة الآلية.

6. **حق الخصوصية**: تُعامَل بيانات المواطن باعتبارها سرية افتراضياً، ولا تُستخدم إلا للأغراض المُعلَنة، ولا تُحوَّل خارج الأراضي الوطنية.

7. **حق المساءلة**: لكل مواطن الحق في تقديم شكوى رسمية بخصوص أي إساءة استخدام لبياناته أو أي خدمة رقمية، والحصول على رد رسمي خلال مدة محددة.

8. **حق الوضوح**: تُقدَّم الخدمات الرقمية بلغة عربية واضحة، مع توضيح الرسوم والمدد الزمنية المتوقعة قبل تقديم الطلب.

9. **حق الوصول الميسّر**: تلتزم الخدمات الرقمية الحكومية بمعايير الوصول الميسّر (WCAG 2.1 AA) لذوي الاحتياجات الخاصة، وتُوفَّر بدائل عند الحاجة.

10. **حق عدم التمييز الخوارزمي**: لا يجوز اتخاذ قرار حكومي مهم بحق المواطن استناداً إلى نظام آلي بحت دون مراجعة بشرية، ولكل مواطن الحق في الطعن في أي قرار آلي.

---

## English summary

The proposed Syrian digital government commits to:

1. **Equitable access** — services are free and offered through both digital and assisted/offline channels.
2. **Right to know** — citizens see who accessed their data, when, and why.
3. **Consent** — data sharing between ministries requires explicit consent or a published legal basis.
4. **Right to correction** — citizens may request corrections to their personal data and receive a written response within a defined timeframe.
5. **Right to data portability** — citizens may download a machine-readable copy of their data.
6. **Privacy by default** — personal data is treated as confidential, used only for stated purposes, and not transferred outside national territory.
7. **Accountability** — citizens can file formal complaints and receive a formal response.
8. **Clarity** — services are presented in clear Arabic, with fees and timelines stated up-front.
9. **Accessibility** — services meet WCAG 2.1 AA, with assisted alternatives.
10. **No purely-algorithmic decisions** — material government decisions are not made by automated systems alone; citizens may appeal any automated decision.

---

## Implementation hooks (technical)

| Right | Implementation hook |
|---|---|
| 2 — Right to know | `prototype/data-access-log.html` and the equivalent production screen. |
| 3 — Consent | NDID consent ledger, exposed via the Government API Gateway. |
| 4 — Correction | Each ministry maintains a citizen correction request workflow with SLA. |
| 5 — Data portability | "Download my data" feature on the citizen portal (Phase-2). |
| 6 — Data residency | Enforced by SyriaGovCloud and the Data Classification Standard. |
| 7 — Complaints | National complaints inbox + ombudsperson office (proposed). |
| 9 — Accessibility | Bound by `policies/accessibility-policy.md`. |
| 10 — No purely-algorithmic decisions | Reviewed at procurement (`policies/secure-procurement-policy.md`). |

---

*This document is a policy proposal. It does not represent existing Syrian law.*
