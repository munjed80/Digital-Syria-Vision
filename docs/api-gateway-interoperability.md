# API Gateway and Interoperability Standards
**Syrian Government API Standards (SGAS)**

| | |
|---|---|
| **Version** | 1.0 |
| **Classification** | Public |
| **Date** | May 2026 |
| **Responsible Body** | Digital Government Authority — Architecture Division |

---

## 1. Overview

The National API Gateway is the central integration hub connecting all government systems. It enforces security, standards, and observability for all inter-ministry and citizen-facing data exchanges.

---

## 2. API Gateway Architecture

```
EXTERNAL                    INTERNAL                    BACKEND
────────                    ────────                    ───────

Citizens  ─────────────────┐
Partners  ─────────────────┤   ┌─────────────────┐
Mobile App ────────────────┤───▶  API GATEWAY     │───▶ Ministry A APIs
Ministry A ────────────────┤   │                 │───▶ Ministry B APIs
Ministry B ────────────────┘   │  • Rate Limiting│───▶ Ministry C APIs
                               │  • Auth/AuthZ   │───▶ NDID Service
                               │  • SSL Termination│──▶ Payment Gateway
                               │  • Request Log  │───▶ Civil Registry
                               │  • Transform    │───▶ Health Service
                               │  • Cache        │
                               │  • Analytics    │
                               └─────────────────┘
```

### Gateway Components
- **API Management Platform:** Kong or Gravitee (open source)
- **Developer Portal:** API catalog, documentation, sandbox
- **Analytics Dashboard:** Usage, performance, errors
- **Rate Limiting:** Per-consumer, per-API, burst control
- **Authentication:** OAuth 2.1, API keys, mTLS for M2M

---

## 3. Syrian Government API Standards (SGAS)

### SGAS-API-001: RESTful Design

All government APIs MUST:
- Use HTTP/HTTPS (TLS 1.3 required)
- Follow REST architectural principles
- Use JSON as primary data format
- Follow OpenAPI Specification 3.1 for documentation
- Version APIs using URL path versioning (`/v1/`, `/v2/`)
- Use plural nouns for resource names (`/citizens`, `/services`)
- Use standard HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Use standard HTTP status codes

#### Standard HTTP Status Codes
| Code | Usage |
|------|-------|
| 200 OK | Successful GET, PUT, PATCH |
| 201 Created | Successful POST creating resource |
| 204 No Content | Successful DELETE |
| 400 Bad Request | Invalid request syntax |
| 401 Unauthorized | Missing or invalid authentication |
| 403 Forbidden | Authenticated but not authorized |
| 404 Not Found | Resource does not exist |
| 422 Unprocessable | Validation error |
| 429 Too Many Requests | Rate limit exceeded |
| 500 Internal Error | Server-side error |

### SGAS-API-002: Request/Response Format

#### Standard Request Headers
```
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
Accept: application/json
Accept-Language: ar, en
X-Correlation-ID: {UUID}
X-Ministry-Code: {MOI|MOH|MOE|...}
```

#### Standard Response Envelope
```json
{
  "status": "success",
  "code": 200,
  "message": "Request processed successfully",
  "data": { ... },
  "meta": {
    "timestamp": "2026-05-04T14:30:00Z",
    "version": "1.0",
    "correlationId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "requestId": "req_abc123"
  },
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

#### Standard Error Response
```json
{
  "status": "error",
  "code": 422,
  "message": "Validation failed",
  "errors": [
    {
      "field": "nationalId",
      "code": "INVALID_FORMAT",
      "message": "National ID must be in format SY-YYYY-GGGG-NNNNNN-C"
    }
  ],
  "meta": {
    "timestamp": "2026-05-04T14:30:00Z",
    "correlationId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  }
}
```

### SGAS-API-003: Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| URLs | lowercase, hyphen-separated | `/citizen-services/v1/applications` |
| Query params | camelCase | `?pageSize=20&sortOrder=asc` |
| JSON fields | camelCase | `nationalId`, `dateOfBirth` |
| Enum values | UPPER_SNAKE_CASE | `"status": "IN_PROGRESS"` |
| Dates | ISO 8601 UTC | `"2026-05-04T14:30:00Z"` |

### SGAS-API-004: Security Requirements

All APIs MUST:
- Use TLS 1.3 (minimum TLS 1.2 with explicit approval)
- Authenticate all requests (no anonymous API access for sensitive data)
- Authorize at both gateway and application level
- Log all requests with correlation IDs
- Implement rate limiting
- Validate all inputs against schema
- Never return internal stack traces to clients
- Never log sensitive data (passwords, tokens, PII in logs)

### SGAS-API-005: Versioning Policy

- Major version in URL: `/v1/`, `/v2/`
- Minor/patch changes must be backward compatible
- Deprecation notice: minimum 12 months before removal
- Maximum 2 major versions supported simultaneously
- Version lifecycle: Active → Deprecated → Retired

---

## 4. Government Service Bus (GSB)

For asynchronous and event-driven integration:

```
Ministry A ──publish──▶ [Topic: citizen.registered] ──subscribe──▶ Ministry B
                                                       ──subscribe──▶ Ministry C
                                                       ──subscribe──▶ Analytics
```

### Message Format Standard

```json
{
  "eventId": "evt_a1b2c3d4",
  "eventType": "citizen.service.application.submitted",
  "version": "1.0",
  "source": "ministry.interior.ndid",
  "timestamp": "2026-05-04T14:30:00Z",
  "correlationId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "dataClassification": "RESTRICTED",
  "data": {
    "applicationId": "APP-2026-123456",
    "serviceCode": "ID-RENEWAL",
    "citizenNin": "SY-NIN-8F3A-92KQ",
    "submittedAt": "2026-05-04T14:30:00Z"
  }
}
```

---

## 5. Master Data Standards

### Citizen Master Record

The DGA maintains the authoritative citizen record. All ministries must reference, not copy, citizen data.

```json
{
  "nin": "SY-NIN-8F3A-92KQ",
  "status": "ACTIVE",
  "fullNameAr": "محمد أحمد العلي",
  "fullNameEn": "Mohammed Ahmad Al-Ali",
  "dateOfBirth": "1990-03-15",
  "gender": "MALE",
  "governorateCode": "0001",
  "governorateName": "دمشق",
  "maritalStatus": "MARRIED",
  "identityVerified": true,
  "biometricEnrolled": true,
  "ndidIssueDate": "2026-01-15",
  "ndidExpiryDate": "2036-01-14"
}
```

*Note: PII fields are only returned with appropriate authorization scope.*

---

## 6. Developer Portal

Available at `developer.gov.sy`:

### Features
- Interactive API catalog and documentation
- API sandbox for testing (non-production data)
- SDK downloads (Python, JavaScript, Java, PHP)
- Developer registration and API key management
- Usage analytics dashboard
- Support ticketing system
- Code examples and tutorials

### Access Tiers
| Tier | Who | Rate Limit | Data Access |
|------|-----|-----------|-------------|
| Public | Anyone | 100 req/hour | Public data only |
| Government | Ministry developers | 10,000 req/hour | Ministry-scoped |
| Premium | Authorized private sector | 50,000 req/hour | Agreed datasets |
| Partner | Bilateral agreements | Unlimited | Per-agreement |

---

*Last Updated: May 2026 | Version 1.0*
