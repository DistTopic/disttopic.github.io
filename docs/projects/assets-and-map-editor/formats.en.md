# Compatible Versions

Supported file formats for reading and writing.

---

## DAT / SPR — Tibia client visual assets

The `.dat` and `.spr` files store metadata and sprites for all in-game objects. The editor supports multiple versions of the graphics protocol:

| Protocol | Compatible clients | Read | Write |
|---------|--------------------|------|-------|
| 7.72 | Tibia 7.x | ✅ | 🚧 |
| 8.60 | Tibia 8.x | ✅ | 🚧 |
| 9.86 | Tibia 9.x | ✅ | 🚧 |
| 10.x | Tibia 10.0–10.98 | ✅ | 🚧 |
| 12.x (extended) | Tibia 12.x+ | ✅ | 🚧 |

!!! note "Write support in progress"
    DAT/SPR writing is being implemented. Track progress in the [roadmap](wip.md).

---

## OTB — Server items (Open Tibia Binary)

The `items.otb` file defines attributes and properties for all items used by an OpenTibia server.

| OTB Version | Read | Write |
|------------|------|-------|
| v1 | ✅ | ✅ |
| v2 | ✅ | ✅ |
| v3 | ✅ | ✅ |

---

## OTBM — Maps (Open Tibia Binary Map)

The `.otbm` file stores the server world map, including terrain, items, and tiles.

| OTBM Version | Read | Write |
|-------------|------|-------|
| v1 | ✅ | 🚧 |
| v2 | ✅ | 🚧 |

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Supported and stable |
| 🚧 | In development |
