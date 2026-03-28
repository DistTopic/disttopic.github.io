---
title: Assets And Map Editor
layout: default
parent: Projects
nav_order: 1
description: "Cross-platform visual editor for Tibia game assets."
permalink: /projects/assets-and-map-editor
---

# Assets And Map Editor
{: .fs-8 }

A cross-platform visual editor for Tibia game assets — sprites, items, and outfits.
{: .fs-5 .fw-300 }

![Latest Release](https://img.shields.io/github/v/release/DistTopic/assets-and-map-editor?include_prereleases&label=version&color=b4befe)
![Downloads](https://img.shields.io/github/downloads/DistTopic/assets-and-map-editor/total?color=89b4fa)
![Security](https://img.shields.io/github/actions/workflow/status/DistTopic/assets-and-map-editor/security-scan.yml?label=security%20scan&color=a6e3a1)

[Download Latest](https://github.com/DistTopic/assets-and-map-editor/releases/latest){: .btn .btn-primary .mr-2 }
[Source Code](https://github.com/DistTopic/assets-and-map-editor){: .btn .mr-2 }
[Report Issue](https://github.com/DistTopic/assets-and-map-editor/issues/new/choose){: .btn }

---

## Overview

The Assets And Map Editor is a desktop application for viewing and editing Tibia game data files. It supports the DAT, SPR, OTB, and OTBM file formats used by Open Tibia servers.

### Key features

- **Cross-platform** — Runs natively on Windows (x64/ARM64), macOS (x64/ARM64), and Linux (x64/ARM64)
- **Single-file executable** — No installation required, just download and run
- **Modern UI** — Built with Avalonia UI 11 for a native look on each platform
- **Verified builds** — Every release includes SHA-256 checksums

## Supported platforms

| Platform | Architecture | Format |
|----------|-------------|--------|
| Windows | x64, ARM64 | `.zip` (portable) |
| macOS | x64 (Intel), ARM64 (Apple Silicon) | `.zip` (app bundle) |
| Linux | x64, ARM64 | `.zip` (portable) |

## Technology stack

| Component | Technology |
|-----------|-----------|
| Runtime | .NET 10 LTS |
| Language | C# 13 |
| UI Framework | Avalonia UI 11.3 |
| MVVM | CommunityToolkit.Mvvm 8.4 |
| Compression | SharpCompress 0.38 |
| CI/CD | GitHub Actions |
| Security | CodeQL, Dependency Review |

## Download & verify

1. Download the latest release for your platform from [GitHub Releases](https://github.com/DistTopic/assets-and-map-editor/releases/latest)
2. Download the `checksums.sha256` file from the same release
3. Verify the integrity of your download:

```bash
# Linux / macOS
sha256sum -c checksums.sha256 --ignore-missing

# Windows (PowerShell)
(Get-FileHash .\AssetsEditor-*.zip -Algorithm SHA256).Hash
# Compare with the hash in checksums.sha256
```

{: .warning }
> **Windows SmartScreen**: Windows may show a SmartScreen warning because the binary is not code-signed. This is expected for open source projects. Verify the SHA-256 checksum to confirm the file is authentic. See the [Security documentation](https://github.com/DistTopic/assets-and-map-editor/blob/main/SECURITY.md) for details.

## Documentation

Full project documentation is available in the repository:

- [Getting Started](https://github.com/DistTopic/assets-and-map-editor/blob/main/docs/GETTING_STARTED.md)
- [Architecture](https://github.com/DistTopic/assets-and-map-editor/blob/main/docs/ARCHITECTURE.md)
- [File Formats](https://github.com/DistTopic/assets-and-map-editor/blob/main/docs/FILE_FORMATS.md)
- [Build & Verification](https://github.com/DistTopic/assets-and-map-editor/blob/main/docs/BUILD_AND_VERIFICATION.md)
- [Branching Strategy](https://github.com/DistTopic/assets-and-map-editor/blob/main/docs/BRANCHING_STRATEGY.md)
- [Contributing](https://github.com/DistTopic/assets-and-map-editor/blob/main/CONTRIBUTING.md)
- [Changelog](https://github.com/DistTopic/assets-and-map-editor/blob/main/CHANGELOG.md)

## License

This project is licensed under the [GNU General Public License v3.0](https://github.com/DistTopic/assets-and-map-editor/blob/main/LICENSE).
