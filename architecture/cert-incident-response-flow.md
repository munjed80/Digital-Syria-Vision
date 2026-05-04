# CERT Incident Response Flow
**SY-CERT — Cybersecurity Incident Response Procedures**

## 1. Incident Detection and Triage

```mermaid
flowchart TD
    START([🚨 Security Event Detected]) --> SOURCE

    subgraph SOURCE["Detection Sources"]
        direction LR
        SOC_DETECT[Government SOC<br/>SIEM Alert]
        MINISTRY_REPORT[Ministry<br/>Self-Report]
        CITIZEN_REPORT[Citizen<br/>Report]
        INTL_SHARING[International<br/>CERT Sharing]
        OSINT[OSINT /<br/>Threat Intel]
    end

    SOURCE --> TRIAGE[SY-CERT Analyst<br/>Initial Triage]

    TRIAGE --> CLASSIFY{Severity<br/>Classification}

    CLASSIFY -->|Score < 5| P4_P5[P4/P5<br/>LOW/INFO]
    CLASSIFY -->|Score 5-9| P3[P3<br/>MEDIUM]
    CLASSIFY -->|Score 10-15| P2[P2<br/>HIGH]
    CLASSIFY -->|Score 16-25| P1[P1<br/>CRITICAL]

    P4_P5 --> TRACK_LOW[Log in ticket system<br/>Schedule for review]
    P3 --> ASSIGN[Assign to Analyst<br/>8-hour response]
    P2 --> ALERT_HIGH[Alert: SY-CERT Director<br/>2-hour response]
    P1 --> ESCALATE[⚠️ IMMEDIATE ESCALATION<br/>30-minute response<br/>Director + DGA + Ministry]

    style P1 fill:#ffebee,stroke:#c62828
    style P2 fill:#fce4ec,stroke:#e53935
    style P3 fill:#fff8e1,stroke:#f57f17
    style P4_P5 fill:#e8f5e9,stroke:#2e7d32
```

---

## 2. P1 Critical Incident Response Flow

```mermaid
sequenceDiagram
    participant SIEM as SIEM / Detection
    participant ANALYST as On-Call Analyst
    participant DIRECTOR as SY-CERT Director
    participant DGA as DGA Director General
    participant MINISTER as Minister
    participant INCIDENT_CMD as Incident Commander
    participant MINISTRY_IT as Affected Ministry IT
    participant INTL_CERT as International CERT

    Note over SIEM: T=0: Critical alert triggered

    SIEM->>ANALYST: Auto-alert: P1 incident detected
    ANALYST->>ANALYST: Initial assessment (5 min)
    ANALYST->>DIRECTOR: T+5min: Escalate — P1 confirmed
    DIRECTOR->>INCIDENT_CMD: Appoint Incident Commander
    DIRECTOR->>DGA: Notify: P1 incident in progress
    DGA->>MINISTER: Notify: Critical cybersecurity incident

    Note over INCIDENT_CMD: T+15min: Incident Response Team assembled

    INCIDENT_CMD->>MINISTRY_IT: Coordinate: Contain affected systems
    MINISTRY_IT->>MINISTRY_IT: Isolate affected systems
    MINISTRY_IT->>INCIDENT_CMD: Containment status report
    INCIDENT_CMD->>ANALYST: Forensic investigation begins
    ANALYST->>ANALYST: Preserve evidence (memory dump, logs)
    ANALYST->>ANALYST: Determine attack vector and scope

    Note over INCIDENT_CMD: T+30min: Situation report to leadership

    INCIDENT_CMD->>DGA: SitRep 1: Scope, containment status, initial assessment
    DGA->>MINISTER: Brief on situation

    alt Nation-state attack suspected
        INCIDENT_CMD->>INTL_CERT: Notify allied CERTs / share IoCs
        INTL_CERT-->>INCIDENT_CMD: Threat intelligence received
    end

    Note over INCIDENT_CMD: T+4hr: Eradication begins

    ANALYST->>MINISTRY_IT: Remove threat / remediate
    MINISTRY_IT->>MINISTRY_IT: Patch vulnerabilities
    MINISTRY_IT->>MINISTRY_IT: Restore from clean backup

    Note over INCIDENT_CMD: T+8hr: Recovery and monitoring

    MINISTRY_IT->>INCIDENT_CMD: Systems restored
    INCIDENT_CMD->>ANALYST: Enhanced monitoring for 72 hours
    INCIDENT_CMD->>DGA: SitRep 2: Incident resolved

    Note over INCIDENT_CMD: T+72hr: Post-Incident Review

    INCIDENT_CMD->>DGA: Post-Incident Report
    DGA->>MINISTER: Final incident report
    INCIDENT_CMD->>INCIDENT_CMD: Update playbooks
    INCIDENT_CMD->>MINISTRY_IT: Issue security recommendations
```

---

## 3. Incident Classification Matrix

```mermaid
graph TB
    subgraph CATEGORIES["Incident Categories"]
        subgraph MALWARE["🦠 Malware"]
            M1[Ransomware<br/>P1 if gov systems]
            M2[Spyware<br/>P2 typically]
            M3[Adware/PUP<br/>P4]
        end

        subgraph INTRUSION["🔓 Unauthorized Access"]
            I1[APT / Nation-state<br/>P1]
            I2[Privileged account<br/>compromise P1/P2]
            I3[Failed attempts<br/>P4/P5]
        end

        subgraph DATA_BREACH["💾 Data Breach"]
            D1[Citizen PII exposed<br/>P1]
            D2[Government secrets<br/>P1]
            D3[Non-sensitive data<br/>P2/P3]
        end

        subgraph DOS["🌊 DoS/DDoS"]
            DO1[National infrastructure<br/>impact P1]
            DO2[Single system impact<br/>P2]
            DO3[Minor degradation<br/>P3]
        end

        subgraph PHISHING["🎣 Social Engineering"]
            PH1[Targeted gov officials<br/>P2]
            PH2[Mass citizen phishing<br/>P2]
            PH3[Generic phishing<br/>P4]
        end
    end

    subgraph RESPONSE["Response Actions by Category"]
        R_MALWARE[Isolate → Forensics → Restore]
        R_INTRUSION[Revoke access → Forensics → Patch]
        R_BREACH[Contain → Notify → Remediate → Report]
        R_DOS[Scrub traffic → Scale → Investigate]
        R_PHISHING[Block → Notify users → Awareness]
    end

    MALWARE --> R_MALWARE
    INTRUSION --> R_INTRUSION
    DATA_BREACH --> R_BREACH
    DOS --> R_DOS
    PHISHING --> R_PHISHING

    style MALWARE fill:#ffebee,stroke:#c62828
    style INTRUSION fill:#fce4ec,stroke:#e53935
    style DATA_BREACH fill:#fff8e1,stroke:#f57f17
    style DOS fill:#e3f2fd,stroke:#1565c0
    style PHISHING fill:#f3e5f5,stroke:#6a1b9a
```

---

## 4. Threat Intelligence Cycle

```mermaid
graph LR
    PLAN[📋 Planning<br/>Define requirements<br/>Priority threats] 
    COLLECT[🔍 Collection<br/>OSINT • Feeds<br/>INTL sharing • Honeypots]
    PROCESS[⚙️ Processing<br/>Normalize • Correlate<br/>Enrich data]
    ANALYZE[🧠 Analysis<br/>Assess credibility<br/>Determine relevance]
    DISSEMINATE[📢 Dissemination<br/>Gov alerts • Advisories<br/>Sector briefings]
    FEEDBACK[🔄 Feedback<br/>Assess utility<br/>Refine requirements]

    PLAN --> COLLECT --> PROCESS --> ANALYZE --> DISSEMINATE --> FEEDBACK --> PLAN

    style PLAN fill:#e8f5e9,stroke:#2e7d32
    style COLLECT fill:#e3f2fd,stroke:#1565c0
    style PROCESS fill:#fff8e1,stroke:#f57f17
    style ANALYZE fill:#f3e5f5,stroke:#6a1b9a
    style DISSEMINATE fill:#fce4ec,stroke:#c62828
    style FEEDBACK fill:#e0f2f1,stroke:#004d40
```
