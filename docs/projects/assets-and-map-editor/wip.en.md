# Work in Progress

What's being built and what's planned.

!!! note "Transparency"
    This page reflects the real state of the project. Items marked 🚧 are actively being developed. Suggestions are welcome on [Discord](https://discord.gg/NrzbcBhh66) or via [GitHub Issues](https://github.com/DistTopic/assets-and-map-editor/issues).

---

## 🚧 Actively in Development

### DAT/SPR Writing
The editor currently loads and displays DAT and SPR files but cannot save changes back to these formats yet. This is the most-requested feature and is actively being worked on.

**Status:** Implementation in progress  
**Blocker:** Ensuring compatibility across multiple Tibia protocol versions

---

### OTBM Editing (maps)
The map viewer is functional. The next step is to enable tile editing, item placement/removal, and area export.

**Status:** Viewer ✅ | Editor 🚧

---

### Batch sprite export
Export all sprites from a category at once, with configurable format (PNG, spritesheet) and naming convention options.

**Status:** Design finalized, implementation pending

---

## 📋 Backlog

| Feature | Priority | Notes |
|---------|----------|-------|
| Batch sprite import | High | Depends on DAT/SPR write |
| OTB vs DAT validation | Medium | Detect inconsistencies |
| DAT version diff mode | Medium | Useful for client updates |
| Plugin system | Low | Extensibility via scripts |
| OBD export | Low | Object Builder compatibility |

---

## ✅ Recently Completed

| Version | Feature |
|---------|---------|
| v1.0.0-preview | DAT/SPR viewer |
| v1.0.0-preview | OTB reader |
| v1.0.0-preview | OTBM viewer |
| v1.0.0-preview | Cross-platform build (6 platforms) |
| v1.0.0-preview | SHA-256 checksums on releases |
| v1.0.0-preview | CI/CD with CodeQL |
