# Digital Identity Architecture
**National Digital Identity (NDID) System**

| | |
|---|---|
| **Version** | 1.0 |
| **Classification** | Public |
| **Date** | May 2026 |
| **Responsible Body** | Digital Government Authority — Identity Division |

---

## 1. Overview

The National Digital Identity (NDID) system provides every Syrian citizen with a unique, secure, and verifiable digital identity. It is the foundational layer enabling citizen authentication across all government digital services.

### Principles
- **Self-Sovereign Elements:** Citizens control what data is shared
- **Privacy by Design:** Minimal data collection; purpose limitation
- **Interoperability:** Open standards (OpenID Connect, SAML 2.0)
- **Inclusivity:** Accessible to citizens with disabilities and low literacy
- **Legal Recognition:** NDID is legally equivalent to physical ID

---

## 2. Identity Components

### 2.1 National Digital ID (NDID)

**Physical:** Smart card with embedded chip (NFC-enabled)
- Citizen photo
- Name (Arabic + English transliteration)
- National ID number (NIN)
- Date of birth
- Governorate
- Chip: X.509 certificate for digital signatures

**Digital:** Mobile credential in Syria Gov App
- Derived from physical enrollment
- Biometric binding (fingerprint/face)
- QR code for quick verification
- Offline capability for low-connectivity areas

### 2.2 National ID Number (NIN)

Format: `SY-YYYY-GGGG-NNNNNN-C`
- `SY` — country prefix
- `YYYY` — birth year
- `GGGG` — governorate code (4 digits)
- `NNNNNN` — sequential number (6 digits)
- `C` — check digit (Luhn algorithm)

### 2.3 Identity Assurance Levels

| Level | Name | Methods | Use Cases |
|-------|------|---------|-----------|
| IAL1 | Basic | Username + password | Information services, status checks |
| IAL2 | Standard | MFA (OTP/app) | Service applications, form submissions |
| IAL3 | High | Biometric + NDID card | Payment, legal documents, sensitive data |
| IAL4 | Maximum | In-person + biometric | Passport, property transfer, high-value transactions |

---

## 3. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    CITIZEN CHANNELS                          │
│   Mobile App │ Web Portal │ Kiosk │ Service Center │ SMS    │
└─────────────────────────────┬───────────────────────────────┘
                              │
┌─────────────────────────────▼───────────────────────────────┐
│                    IDENTITY GATEWAY                          │
│        Authentication │ Authorization │ Token Issuance       │
│         OpenID Connect │ OAuth 2.0 │ SAML 2.0               │
└──────────┬──────────────────────────────────┬───────────────┘
           │                                  │
┌──────────▼────────────┐        ┌────────────▼───────────────┐
│   CREDENTIAL STORE    │        │    IDENTITY REGISTRY        │
│   - Password hashes   │        │    - Citizen records        │
│   - TOTP secrets      │        │    - Biometric templates    │
│   - Device tokens     │        │    - NIN master index       │
│   - Session tokens    │        │    - Enrollment status      │
└──────────┬────────────┘        └────────────┬───────────────┘
           │                                  │
┌──────────▼──────────────────────────────────▼───────────────┐
│              CIVIL REGISTRY INTEGRATION LAYER                │
│         Real-time verification against official records      │
└─────────────────────────────────────────────────────────────┘
           │
┌──────────▼──────────────────────────────────────────────────┐
│              AUDIT AND CONSENT MANAGEMENT                    │
│     - All access logged immutably                           │
│     - Citizen can view all data accesses                    │
│     - Consent management for data sharing                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Enrollment Process

### Step 1: Identity Proofing
- Citizen presents to authorized enrollment center (ministry offices, post offices, banks)
- Enrollment officer verifies civil registry record
- Biometric capture: fingerprints (all 10), iris scan, facial photo
- Document review: existing ID, birth certificate

### Step 2: Credential Creation
- System generates unique NIN (if not existing)
- X.509 certificate generated and bound to biometrics
- Temporary credentials issued immediately
- Physical NDID card printed within 7 days

### Step 3: Digital Activation
- Citizen downloads Syria Gov App
- Activation using temporary credential + biometric verification
- Digital credential bound to device
- Backup recovery codes generated

### Enrollment Center Requirements
- Minimum 10 centers per governorate
- Mobile enrollment teams for remote areas
- Accessible facilities for people with disabilities
- Operating hours: 7 days/week, 8am–8pm

---

## 5. Authentication Flow

### Standard Login (IAL2)

```
[Citizen] → Enter NIN or username
[System]  → Request MFA
[Citizen] → Provide OTP (SMS/App) or biometric
[System]  → Verify credential + biometric
[System]  → Issue JWT access token (15 min) + refresh token (8 hours)
[System]  → Log authentication event
[Service] → Validate token; grant access
```

### High-Security Login (IAL3/4)

```
[Citizen] → Present NDID card (NFC tap) or biometric
[System]  → Verify hardware credential
[System]  → Request PIN
[Citizen] → Enter PIN
[System]  → Biometric verification against stored template
[System]  → Issue short-lived token with elevated claims
[Service] → Validate token claims; grant access to sensitive service
```

---

## 6. Technology Standards

| Component | Technology |
|-----------|-----------|
| Identity Protocol | OpenID Connect Core 1.0 + FAPI 2.0 |
| Authorization | OAuth 2.1 with PKCE |
| Federation | SAML 2.0 for legacy systems |
| Token Format | JWT (signed RS256, encrypted ES256) |
| Biometric Standard | ISO/IEC 19794 |
| Card Standard | ISO/IEC 7816, ISO/IEC 14443 (NFC) |
| PKI | X.509 v3, SHA-256 minimum |
| Password Hashing | Argon2id |
| Mobile Binding | FIDO2/WebAuthn |

---

## 7. Privacy Protections

### Data Minimization
- Services receive only claims they need
- No blanket data dumps to third parties
- Fine-grained consent for each data element

### Citizen Rights
- Right to access: citizen can view all their data
- Right to audit: citizen can see all data accesses
- Right to revoke: citizen can revoke third-party access
- Right to correct: citizen can request corrections via civil registry

### Technical Controls
- Pairwise subject identifiers (different ID per service, preventing correlation)
- Selective disclosure claims
- Encrypted biometric templates (never decryptable outside system)
- Biometric data never leaves the country

---

## 8. SLA and Performance Targets

| Metric | Target |
|--------|--------|
| Authentication response time | < 500ms (p95) |
| NDID system availability | 99.9% |
| Enrollment processing time | < 10 minutes |
| Card issuance time | < 7 days |
| Support ticket resolution (IAL issue) | < 4 hours |
| Fraud detection accuracy | > 99.5% |

---

*Last Updated: May 2026 | Version 1.0*
