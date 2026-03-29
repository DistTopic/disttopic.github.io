# Versiones Compatibles

Formatos de archivo soportados para lectura y escritura.

---

## DAT / SPR — Assets visuales del cliente Tibia

Los archivos `.dat` y `.spr` almacenan metadatos y sprites de todos los objetos del juego. El editor soporta múltiples versiones del protocolo gráfico:

| Protocolo | Clientes compatibles | Lectura | Escritura |
|-----------|---------------------|---------|-----------|
| 7.72 | Tibia 7.x | ✅ | 🚧 |
| 8.60 | Tibia 8.x | ✅ | 🚧 |
| 9.86 | Tibia 9.x | ✅ | 🚧 |
| 10.x | Tibia 10.0–10.98 | ✅ | 🚧 |
| 12.x (extended) | Tibia 12.x+ | ✅ | 🚧 |

!!! note "Escritura en progreso"
    La escritura para DAT/SPR está siendo implementada. Sigue el progreso en el [roadmap](wip.md).

---

## OTB — Ítems del servidor (Open Tibia Binary)

El archivo `items.otb` define atributos y propiedades de todos los ítems utilizados por un servidor OpenTibia.

| Versión OTB | Lectura | Escritura |
|------------|---------|-----------|
| v1 | ✅ | ✅ |
| v2 | ✅ | ✅ |
| v3 | ✅ | ✅ |

---

## OTBM — Mapas (Open Tibia Binary Map)

El archivo `.otbm` almacena el mapa del mundo del servidor, incluyendo terrenos, ítems y tiles.

| Versión OTBM | Lectura | Escritura |
|-------------|---------|-----------|
| v1 | ✅ | 🚧 |
| v2 | ✅ | 🚧 |

---

## Leyenda

| Símbolo | Significado |
|---------|-------------|
| ✅ | Soportado y estable |
| 🚧 | En desarrollo |
