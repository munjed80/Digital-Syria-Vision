# Digital Identity Flow
**NDID Authentication and Authorization Flows**

## 1. Citizen Enrollment Flow

```mermaid
sequenceDiagram
    participant C as Citizen
    participant EO as Enrollment Officer
    participant ES as Enrollment System
    participant CR as Civil Registry
    participant NDID as NDID Platform
    participant HSM as Hardware Security Module
    participant PRINT as Card Personalization

    C->>EO: Presents at enrollment center with documents
    EO->>CR: Verify citizen record (NIN lookup)
    CR-->>EO: Citizen verified / record found
    EO->>ES: Begin enrollment session
    ES->>C: Capture biometrics (fingerprints × 10, iris, photo)
    ES->>NDID: Submit enrollment request
    NDID->>CR: Cross-verify biographic data
    CR-->>NDID: Data confirmed
    NDID->>HSM: Generate X.509 certificate for citizen
    HSM-->>NDID: Certificate generated
    NDID->>NDID: Create digital identity record
    NDID-->>ES: Enrollment complete (NIN confirmed)
    ES-->>EO: Display enrollment confirmation
    EO-->>C: Issue temporary credential (paper)
    NDID->>PRINT: Send personalization data (encrypted)
    PRINT-->>C: NDID smart card delivered within 7 days
    NDID->>C: SMS: "Download Syria Gov App to activate digital ID"
```

---

## 2. Standard Authentication Flow (IAL2)

```mermaid
sequenceDiagram
    participant C as Citizen Browser
    participant SP as Government Service<br/>(Service Provider)
    participant GW as API Gateway
    participant IDP as Identity Provider<br/>(NDID Platform)
    participant MFA as MFA Service

    C->>SP: Access government service
    SP->>C: Redirect to Identity Provider (OIDC)
    C->>IDP: GET /authorize?scope=openid+profile&...
    IDP->>C: Display login page
    C->>IDP: Submit NIN + password
    IDP->>IDP: Validate credentials
    IDP->>MFA: Request MFA (OTP via SMS or App)
    MFA-->>C: Send OTP code
    C->>IDP: Submit OTP code
    IDP->>IDP: Verify OTP
    IDP->>C: Redirect with authorization code
    C->>SP: Forward authorization code
    SP->>IDP: POST /token (exchange code)
    IDP-->>SP: Return JWT access token + ID token
    SP->>IDP: GET /userinfo (validate token)
    IDP-->>SP: Return citizen claims
    SP-->>C: Grant access to service
    IDP->>IDP: Log: authentication event recorded
```

---

## 3. High-Security Authentication Flow (IAL3 — Smart Card)

```mermaid
sequenceDiagram
    participant C as Citizen + NDID Card
    participant APP as Syria Gov App
    participant IDP as Identity Provider
    participant HSM as HSM / PKI

    C->>APP: Tap NDID card (NFC)
    APP->>APP: Read certificate from card chip
    APP->>IDP: Submit certificate + challenge request
    IDP->>IDP: Generate cryptographic challenge
    IDP-->>APP: Return challenge (nonce)
    APP->>C: Request card PIN
    C->>APP: Enter PIN
    APP->>APP: Unlock card with PIN
    APP->>APP: Sign challenge with card private key
    APP->>IDP: Submit signed challenge
    IDP->>HSM: Verify signature with citizen's public key
    HSM-->>IDP: Signature valid
    IDP->>IDP: Check biometric (if required for IAL4)
    IDP->>IDP: Issue high-assurance token
    IDP-->>APP: Return elevated access token (IAL3 claims)
    APP-->>C: Access granted to sensitive service
    IDP->>IDP: Log: high-assurance authentication event
```

---

## 4. Cross-Ministry Data Sharing Authorization

```mermaid
sequenceDiagram
    participant C as Citizen
    participant MOH as Ministry of Health
    participant IDP as Identity Provider
    participant CONSENT as Consent Manager
    participant MOI as Ministry of Interior<br/>(Citizen Registry)
    participant AUDIT as Audit Log

    C->>MOH: Apply for health card
    MOH->>IDP: Validate citizen token
    IDP-->>MOH: Token valid (NIN: SY-1990-001-123456-5)
    MOH->>CONSENT: Check consent: MOH access to MOI civil data?
    CONSENT-->>MOH: No prior consent — request required
    MOH->>C: Request consent: "May we verify your details with the Interior Ministry?"
    C->>CONSENT: Grant consent (logged with timestamp)
    CONSENT-->>MOH: Consent granted
    MOH->>MOI: GET /v1/citizens/{NIN}/basic-info
    MOI->>IDP: Validate MOH service token
    IDP-->>MOI: Token valid, MOH is authorized, consent verified
    MOI-->>MOH: Return: name, DOB, address (minimum necessary)
    MOH->>AUDIT: Log: data access event (what, who, when, why)
    AUDIT-->>MOH: Event logged (immutable)
    MOH->>C: Health card application processed
```

---

## 5. Identity Levels Summary

```mermaid
graph LR
    subgraph IAL1["IAL1 — Basic"]
        A1[Username + Password]
        B1[Information lookup<br/>Status checks<br/>Public data]
    end

    subgraph IAL2["IAL2 — Standard"]
        A2[Password + OTP<br/>or App authenticator]
        B2[Service applications<br/>Form submissions<br/>Non-sensitive requests]
    end

    subgraph IAL3["IAL3 — High"]
        A3[NDID Card NFC<br/>+ PIN + Biometric]
        B3[Payment authorization<br/>Legal documents<br/>Sensitive data access]
    end

    subgraph IAL4["IAL4 — Maximum"]
        A4[In-person verification<br/>+ Biometric + Card]
        B4[Passport<br/>Property transfer<br/>High-value transactions]
    end

    IAL1 --> IAL2 --> IAL3 --> IAL4

    style IAL1 fill:#e8f5e9,stroke:#2e7d32
    style IAL2 fill:#fff8e1,stroke:#f57f17
    style IAL3 fill:#fce4ec,stroke:#c62828
    style IAL4 fill:#fbe9e7,stroke:#870000
```
