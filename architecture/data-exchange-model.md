# Data Exchange Model
**Government Data Interoperability Architecture**

## 1. Master Data Management Model

```mermaid
graph TB
    subgraph AUTHORITATIVE["📋 Authoritative Registries (Single Source of Truth)"]
        CIVIL[Civil Registry<br/>Ministry of Interior<br/>Birth • Death • Marriage • Nationality]
        BIZ_REG[Commercial Registry<br/>Ministry of Economy<br/>Business Registration]
        PROP_REG[Property Registry<br/>Ministry of Justice<br/>Land & Buildings]
        VEH_REG[Vehicle Registry<br/>Ministry of Transport<br/>Vehicles & Licenses]
        HEALTH_REG[Health Registry<br/>Ministry of Health<br/>Medical Records]
        EDU_REG[Education Registry<br/>Ministry of Education<br/>Credentials & Enrollment]
    end

    subgraph MASTER["🗄️ DGA Master Data Hub"]
        CITIZEN_MDM[Citizen MDM<br/>Consolidated view from Civil Registry]
        BIZ_MDM[Business MDM<br/>Consolidated view from Commercial Registry]
        LINK_ENGINE[Identity Linking Engine<br/>Cross-registry correlation]
        DATA_QUALITY[Data Quality<br/>Deduplication • Validation]
    end

    subgraph API_LAYER["🔌 Data Access Layer"]
        DATA_API[Master Data API<br/>/v1/citizens/{NIN}<br/>/v1/businesses/{CRN}]
        CONSENT_SVC[Consent Service<br/>Data sharing permissions]
        AUDIT_LOG[Immutable Audit Log<br/>Every data access recorded]
    end

    subgraph CONSUMERS["🏛️ Data Consumers (with authorization)"]
        MOH_C[Health Ministry<br/>Verify eligibility]
        MOE_C[Education Ministry<br/>Verify enrollment]
        MOF_C[Finance Ministry<br/>Tax compliance]
        PAYMENT[Payment Gateway<br/>Identity verification]
        POLICE[Interior — Police<br/>Identity verification]
    end

    CIVIL --> CITIZEN_MDM
    BIZ_REG --> BIZ_MDM
    CITIZEN_MDM --> LINK_ENGINE
    BIZ_MDM --> LINK_ENGINE
    LINK_ENGINE --> DATA_QUALITY
    DATA_QUALITY --> DATA_API
    CONSENT_SVC --> DATA_API
    DATA_API --> AUDIT_LOG

    DATA_API --> MOH_C
    DATA_API --> MOE_C
    DATA_API --> MOF_C
    DATA_API --> PAYMENT
    DATA_API --> POLICE

    style AUTHORITATIVE fill:#e8f5e9,stroke:#2e7d32
    style MASTER fill:#e3f2fd,stroke:#1565c0
    style API_LAYER fill:#fff8e1,stroke:#f57f17
    style CONSUMERS fill:#f3e5f5,stroke:#6a1b9a
```

---

## 2. Data Classification Model

```mermaid
graph LR
    subgraph PUBLIC["🟢 PUBLIC"]
        PUB1[Open government datasets]
        PUB2[Ministry announcements]
        PUB3[Service descriptions]
        PUB4[Aggregate statistics]
    end

    subgraph RESTRICTED["🟡 RESTRICTED"]
        RES1[Citizen contact details]
        RES2[Service applications]
        RES3[Business registration]
        RES4[Property ownership]
    end

    subgraph CONFIDENTIAL["🟠 CONFIDENTIAL"]
        CONF1[Full citizen records]
        CONF2[Health records]
        CONF3[Financial data]
        CONF4[Legal proceedings]
    end

    subgraph SECRET["🔴 SECRET"]
        SEC1[Biometric data]
        SEC2[Security clearances]
        SEC3[Intelligence data]
        SEC4[System credentials]
    end

    subgraph HANDLING["Data Handling Requirements"]
        H1["PUBLIC: No auth required<br/>Open API access"]
        H2["RESTRICTED: Auth required<br/>Ministry-scoped access<br/>Encryption in transit"]
        H3["CONFIDENTIAL: MFA required<br/>RBAC + consent<br/>Encrypted at rest + transit"]
        H4["SECRET: IAL3+ auth<br/>HSM encryption<br/>Audit every access<br/>Data never leaves Syria"]
    end

    PUBLIC --> H1
    RESTRICTED --> H2
    CONFIDENTIAL --> H3
    SECRET --> H4

    style PUBLIC fill:#e8f5e9,stroke:#2e7d32
    style RESTRICTED fill:#fff8e1,stroke:#f57f17
    style CONFIDENTIAL fill:#fce4ec,stroke:#c62828
    style SECRET fill:#ffebee,stroke:#870000
```

---

## 3. Event-Driven Data Exchange

```mermaid
graph LR
    subgraph PRODUCERS["Event Producers"]
        MOI_P[Interior Ministry<br/>citizen.registered<br/>id.issued<br/>address.changed]
        MOH_P[Health Ministry<br/>health.record.updated<br/>prescription.issued]
        MOF_P[Finance Ministry<br/>tax.paid<br/>business.registered]
        PAYMENT_P[Payment Gateway<br/>payment.completed<br/>refund.issued]
    end

    subgraph BUS["📨 Government Service Bus<br/>Apache Kafka — Encrypted"]
        T1[Topic: citizen.lifecycle]
        T2[Topic: health.events]
        T3[Topic: financial.events]
        T4[Topic: service.applications]
    end

    subgraph CONSUMERS_E["Event Consumers"]
        NDID_C[NDID Platform<br/>Update identity records]
        ANALYTICS[Analytics Platform<br/>Real-time dashboards]
        NOTIFY_C[Notification Service<br/>Citizen alerts]
        AUDIT_C[Audit System<br/>Event logging]
        MOH_C2[Health Ministry<br/>Process health events]
    end

    MOI_P --> T1
    MOH_P --> T2
    MOF_P --> T3
    PAYMENT_P --> T4

    T1 --> NDID_C
    T1 --> ANALYTICS
    T1 --> NOTIFY_C
    T1 --> AUDIT_C
    T2 --> MOH_C2
    T2 --> ANALYTICS
    T3 --> ANALYTICS
    T4 --> NOTIFY_C
    T4 --> AUDIT_C

    style PRODUCERS fill:#e3f2fd,stroke:#1565c0
    style BUS fill:#e8f5e9,stroke:#2e7d32
    style CONSUMERS_E fill:#f3e5f5,stroke:#6a1b9a
```

---

## 4. Open Data Architecture

```mermaid
graph TB
    subgraph SOURCE["Government Data Sources"]
        FINANCE_DATA[Finance: Budget data]
        HEALTH_DATA[Health: Disease statistics]
        EDUCATION_DATA[Education: Enrollment stats]
        INFRASTRUCTURE[Infrastructure: Project status]
        ECONOMY_DATA[Economy: Trade statistics]
    end

    subgraph PIPELINE["Data Pipeline"]
        ANONYMIZE[Anonymization Engine<br/>Remove PII]
        AGGREGATE[Aggregation Engine<br/>Statistical processing]
        VALIDATE_D[Data Validation<br/>Quality checks]
        CATALOG[Data Catalog<br/>Metadata management]
    end

    subgraph OPEN_DATA_PORTAL["🌐 Open Data Portal<br/>data.gov.sy"]
        DATASETS[Dataset Browser]
        API_ACCESS[Open API Access]
        DOWNLOAD[Bulk Download<br/>CSV • JSON • XML]
        VISUALIZE[Data Visualization]
        DOCS[Documentation]
    end

    subgraph USERS["Data Users"]
        RESEARCHERS[Researchers & Universities]
        JOURNALISTS[Journalists & Media]
        CIVIL_SOC[Civil Society]
        DEVELOPERS[Developers & Startups]
        INTL[International Organizations]
    end

    SOURCE --> ANONYMIZE
    ANONYMIZE --> AGGREGATE
    AGGREGATE --> VALIDATE_D
    VALIDATE_D --> CATALOG
    CATALOG --> DATASETS
    DATASETS --> API_ACCESS
    DATASETS --> DOWNLOAD
    DATASETS --> VISUALIZE

    API_ACCESS --> RESEARCHERS
    DOWNLOAD --> JOURNALISTS
    VISUALIZE --> CIVIL_SOC
    API_ACCESS --> DEVELOPERS
    DOWNLOAD --> INTL

    style SOURCE fill:#e8f5e9,stroke:#2e7d32
    style PIPELINE fill:#fff8e1,stroke:#f57f17
    style OPEN_DATA_PORTAL fill:#e3f2fd,stroke:#1565c0
    style USERS fill:#f3e5f5,stroke:#6a1b9a
```
