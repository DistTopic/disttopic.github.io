# Security Policy

## Scope

This policy covers the `disttopic.github.io` repository (site content and deployment workflows).

For security issues in individual projects, see the `SECURITY.md` in each project repository.

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report privately via [GitHub Security Advisories](https://github.com/DistTopic/disttopic.github.io/security/advisories/new).

Include:
- A description of the issue
- Steps to reproduce or a proof of concept
- The potential impact

We aim to respond within **48 hours** and resolve within **7 days** for critical issues.

## Security measures

### Content Security Policy

All pages include a strict CSP blocking:

- Inline `<script>` execution
- External script loading
- Frames and embeds
- External form submissions
- Object/plugin loading

### Static site

This is a static Jekyll site with no server-side code, no database, and no user input processing. The attack surface is limited to:

- Injected content via pull requests (mitigated by PR review)
- Vulnerable dependencies in the build pipeline (mitigated by Dependabot)

### Workflow hardening

GitHub Actions workflows use:

- `permissions: contents: read` (least privilege)
- Pinned action versions with `@v4` / `@v3` tags
- No secrets beyond the built-in `GITHUB_TOKEN`

## Supported versions

Only the current `main` branch is supported.
