---
title: Security Practices
layout: default
parent: Guides
nav_order: 2
description: "Security practices across DistTopic projects."
permalink: /guides/security
---

# Security Practices
{: .fs-8 }

How we approach security across all DistTopic projects.
{: .fs-5 .fw-300 }

---

## Website security

This website is hardened with multiple layers of defense:

### Content Security Policy (CSP)

Every page includes a strict CSP that prevents:

| Threat | Mitigation |
|--------|-----------|
| Cross-site scripting (XSS) | `script-src 'self'` — only scripts from our domain |
| Data exfiltration | `connect-src 'self'` — no external API calls |
| Clickjacking | `frame-ancestors 'none'` + `X-Frame-Options: DENY` |
| MIME sniffing | `X-Content-Type-Options: nosniff` |
| Form hijacking | `form-action 'none'` — no form submissions |
| Object injection | `object-src 'none'` — no plugins or embeds |
| Base URI manipulation | `base-uri 'self'` — prevents base tag injection |

### Additional protections

- **Referrer Policy**: `strict-origin-when-cross-origin` — limits information leakage
- **Permissions Policy**: Camera, microphone, geolocation, payment, USB, and sensors all disabled
- **No external dependencies**: All JavaScript and CSS is served from the same origin
- **Static site**: No server-side code, no database, no user input processing

## Release security

All DistTopic project releases include:

### SHA-256 checksums

Every release artifact has a corresponding SHA-256 checksum in `checksums.sha256`. Always verify downloads:

```bash
# Linux/macOS
sha256sum -c checksums.sha256 --ignore-missing

# Windows PowerShell
(Get-FileHash .\file.zip -Algorithm SHA256).Hash
```

### Automated security scanning

| Tool | Purpose | Frequency |
|------|---------|-----------|
| [CodeQL](https://codeql.github.com/) | Static analysis for vulnerabilities | Every push and PR to main, weekly |
| [Dependency Review](https://github.com/actions/dependency-review-action) | Detect vulnerable dependencies | Every PR |
| [Dependabot](https://docs.github.com/en/code-security/dependabot) | Automated dependency updates | Continuous |

### Branch protection

All repositories use strict branch protection:

- **Main branch**: Requires pull request reviews, no force push, no deletion
- **Develop branch**: Requires pull request reviews, no force push
- **Release/hotfix branches**: No force push, no deletion

## Reporting vulnerabilities

{: .important }
> **Do not open public issues for security vulnerabilities.**

Report security issues via [GitHub Security Advisories](https://github.com/DistTopic/assets-and-map-editor/security/advisories/new). We aim to respond within 48 hours and provide a fix within 7 days for critical issues.

See each project's `SECURITY.md` for specific instructions.
