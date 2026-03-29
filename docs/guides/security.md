---
title: Security Practices
description: Security practices across DistTopic projects.
---

# Security Practices

How we approach security across all DistTopic projects.

## Website security

This website is hardened with multiple layers of defense:

### Content Security Policy

Every page includes a strict CSP that prevents:

| Threat | Mitigation |
|--------|-----------|
| Cross-site scripting (XSS) | `script-src 'self' 'unsafe-inline'` — no external scripts |
| Data exfiltration | `connect-src 'self'` — no external API calls |
| Clickjacking | `frame-ancestors 'none'` + `X-Frame-Options: DENY` |
| MIME sniffing | `X-Content-Type-Options: nosniff` |
| Form hijacking | `form-action 'none'` — no form submissions |
| Object injection | `object-src 'none'` — no plugins or embeds |
| Base URI manipulation | `base-uri 'self'` — prevents base tag injection |

!!! note "Why `unsafe-inline`?"
    MkDocs Material requires `'unsafe-inline'` for scripts because it injects a small theme initialization script directly in the `<head>`. Since this is a static site with no user-generated content, XSS via inline scripts is not a realistic risk. The policy still prevents loading scripts from any external domain, which is the primary attack vector.

### Additional protections

- **Referrer Policy**: `strict-origin-when-cross-origin` — limits information leakage
- **Permissions Policy**: Camera, mic, geolocation, payment, USB, and sensors all disabled
- **No external JS/CSS** — all assets served from the same origin
- **Static site** — no server-side code, no database, no user input processing

## Release security

All DistTopic project releases include:

### SHA-256 checksums

Every release includes a `checksums.sha256` file. Always verify downloads:

=== "Linux / macOS"

    ```bash
    sha256sum -c checksums.sha256 --ignore-missing
    ```

=== "Windows (PowerShell)"

    ```powershell
    (Get-FileHash .\file.zip -Algorithm SHA256).Hash
    # Compare manually with checksums.sha256
    ```

### Automated security scanning

| Tool | Purpose | Frequency |
|------|---------|-----------|
| [CodeQL](https://codeql.github.com/) | Static analysis for vulnerabilities | Every push and PR to main, weekly |
| [Dependency Review](https://github.com/actions/dependency-review-action) | Detect vulnerable dependencies | Every PR |
| [Dependabot](https://docs.github.com/en/code-security/dependabot) | Automated dependency updates | Continuous |

### Branch protection

All repositories use strict branch protection via GitHub Rulesets:

- **Main branch**: Requires pull request reviews, no force push, no deletion
- **Develop branch** (where applicable): Requires PR review, no force push
- **Release/hotfix branches**: No force push, no deletion

## Reporting vulnerabilities

!!! danger "Do not open public issues for security vulnerabilities"
    Report privately via [GitHub Security Advisories](https://github.com/DistTopic/assets-and-map-editor/security/advisories/new).
    We aim to respond within **48 hours** and resolve within **7 days** for critical issues.

See each project's `SECURITY.md` for specific instructions.
