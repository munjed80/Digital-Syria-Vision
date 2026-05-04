# API Gateway Flow
**National API Gateway — Request Processing Architecture**

## 1. Request Routing Architecture

```mermaid
graph TB
    subgraph CLIENTS["Client Types"]
        CITIZEN[Citizen Portal]
        MOBILE_APP[Mobile App]
        MINISTRY_CLIENT[Ministry System]
        THIRD_PARTY[Authorized Third Party]
    end

    subgraph EDGE["Edge Layer"]
        DDOS[DDoS Protection<br/>& WAF]
        CDN[CDN<br/>Static Assets]
    end

    subgraph GATEWAY["National API Gateway"]
        direction TB
        TLS[TLS Termination<br/>TLS 1.3]
        RATE[Rate Limiter<br/>Per consumer/route]
        AUTH[Authentication<br/>JWT / API Key / mTLS]
        AUTHZ[Authorization<br/>RBAC / Scopes]
        VALIDATE[Request Validation<br/>Schema • Sanitization]
        TRANSFORM[Transform<br/>Request / Response]
        ROUTE[Smart Router<br/>Service Discovery]
        LOG[Request Logger<br/>Correlation ID]
        CACHE[Response Cache<br/>Redis]
    end

    subgraph BACKENDS["Backend Services"]
        NDID_API[NDID Service API]
        MOI_API[Interior Ministry API]
        MOH_API[Health Ministry API]
        MOE_API[Education Ministry API]
        MOF_API[Finance Ministry API]
        PAYMENT_API[Payment Gateway API]
        DATA_API[Master Data API]
    end

    CITIZEN --> DDOS
    MOBILE_APP --> DDOS
    MINISTRY_CLIENT --> DDOS
    THIRD_PARTY --> DDOS

    DDOS --> TLS
    CDN --> TLS

    TLS --> RATE
    RATE --> AUTH
    AUTH --> AUTHZ
    AUTHZ --> VALIDATE
    VALIDATE --> LOG
    LOG --> CACHE
    CACHE -->|Cache Hit| TRANSFORM
    CACHE -->|Cache Miss| ROUTE
    ROUTE --> NDID_API
    ROUTE --> MOI_API
    ROUTE --> MOH_API
    ROUTE --> MOE_API
    ROUTE --> MOF_API
    ROUTE --> PAYMENT_API
    ROUTE --> DATA_API
    NDID_API --> TRANSFORM
    MOI_API --> TRANSFORM
    MOH_API --> TRANSFORM
    TRANSFORM --> LOG

    style CLIENTS fill:#e3f2fd,stroke:#1565c0
    style EDGE fill:#fce4ec,stroke:#880e4f
    style GATEWAY fill:#e8f5e9,stroke:#1b5e20
    style BACKENDS fill:#fff8e1,stroke:#f57f17
```

---

## 2. API Request Lifecycle

```mermaid
sequenceDiagram
    participant C as Client
    participant GW as API Gateway
    participant CACHE as Response Cache
    participant AUTH_SVC as Auth Service
    participant BACKEND as Backend Service
    participant AUDIT as Audit Log

    C->>GW: HTTP Request + Bearer Token

    Note over GW: Phase 1: Security Checks
    GW->>GW: TLS validation
    GW->>GW: Rate limit check
    GW->>GW: IP reputation check

    alt Rate limit exceeded
        GW-->>C: 429 Too Many Requests
    end

    Note over GW: Phase 2: Authentication
    GW->>AUTH_SVC: Validate JWT token
    AUTH_SVC-->>GW: Token valid + claims

    alt Token invalid
        GW-->>C: 401 Unauthorized
    end

    Note over GW: Phase 3: Authorization
    GW->>GW: Check token scopes vs. required scopes
    GW->>GW: Check consumer plan permissions

    alt Insufficient permissions
        GW-->>C: 403 Forbidden
    end

    Note over GW: Phase 4: Request Processing
    GW->>GW: Schema validation
    GW->>GW: Request transformation
    GW->>GW: Generate correlation ID
    GW->>AUDIT: Log request (before backend call)

    Note over GW: Phase 5: Cache Check
    GW->>CACHE: Check cache (GET requests only)
    alt Cache hit
        CACHE-->>GW: Cached response
        GW->>AUDIT: Log: cache hit
        GW-->>C: Return cached response
    end

    Note over GW: Phase 6: Backend Call
    GW->>BACKEND: Forward request (with correlation ID)
    BACKEND-->>GW: Backend response

    Note over GW: Phase 7: Response Processing
    GW->>GW: Response transformation
    GW->>CACHE: Store response in cache (if cacheable)
    GW->>AUDIT: Log response (status, latency)
    GW-->>C: Return response to client
```

---

## 3. Ministry Integration Pattern

```mermaid
graph LR
    subgraph LEGACY["Legacy Ministry System"]
        SOAP_SVC[SOAP Service<br/>Old system]
        DB_OLD[(Legacy Database)]
    end

    subgraph ADAPTER["Adapter Layer"]
        SOAP_ADAPT[SOAP→REST Adapter<br/>Translates protocols]
        DATA_MAP[Data Mapper<br/>Normalizes fields]
        VALIDATOR[Schema Validator<br/>Ensures standards]
    end

    subgraph GATEWAY["API Gateway"]
        ROUTE[Route: /v1/ministry-x/...]
        AUTH[Auth & AuthZ]
    end

    subgraph NEW["Modern Ministry System"]
        REST_API[REST API<br/>New system]
        DB_NEW[(Modern Database)]
    end

    SOAP_SVC --> DB_OLD
    SOAP_SVC --> SOAP_ADAPT
    SOAP_ADAPT --> DATA_MAP
    DATA_MAP --> VALIDATOR
    VALIDATOR --> ROUTE

    REST_API --> DB_NEW
    REST_API --> ROUTE

    AUTH --> ROUTE

    style LEGACY fill:#ffebee,stroke:#c62828
    style ADAPTER fill:#fff8e1,stroke:#f57f17
    style GATEWAY fill:#e8f5e9,stroke:#1b5e20
    style NEW fill:#e3f2fd,stroke:#1565c0
```

---

## 4. Rate Limiting Strategy

```mermaid
graph TB
    REQ[Incoming Request]

    REQ --> CHECK_IP{IP-level<br/>limit?}
    CHECK_IP -->|Exceeded| BLOCK1[Block: 429]
    CHECK_IP -->|OK| CHECK_CONSUMER{Consumer<br/>limit?}
    CHECK_CONSUMER -->|Exceeded| BLOCK2[Queue or 429]
    CHECK_CONSUMER -->|OK| CHECK_ROUTE{Route-level<br/>limit?}
    CHECK_ROUTE -->|Exceeded| BLOCK3[429 + Retry-After header]
    CHECK_ROUTE -->|OK| PROCESS[Process Request]

    subgraph LIMITS["Rate Limit Tiers"]
        T1[Public API: 100 req/hour]
        T2[Government: 10,000 req/hour]
        T3[Premium: 50,000 req/hour]
        T4[Internal: Unlimited]
    end
```
