# Versões Compatíveis

Formatos de arquivo suportados para leitura e escrita.

---

## DAT / SPR — Assets visuais do cliente Tibia

Os arquivos `.dat` e `.spr` armazenam metadados e sprites de todos os objetos do jogo. O editor suporta múltiplas versões do protocolo gráfico:

| Protocolo | Clientes compatíveis | Leitura | Escrita |
|-----------|---------------------|---------|---------|
| 7.72 | Tibia 7.x | ✅ | 🚧 |
| 8.60 | Tibia 8.x | ✅ | 🚧 |
| 9.86 | Tibia 9.x | ✅ | 🚧 |
| 10.x | Tibia 10.0–10.98 | ✅ | 🚧 |
| 12.x (extended) | Tibia 12.x+ | ✅ | 🚧 |

!!! note "Escrita em andamento"
    A escrita para DAT/SPR está sendo implementada. Acompanhe o progresso no [roadmap](wip.md).

---

## OTB — Itens do servidor (Open Tibia Binary)

O arquivo `items.otb` define atributos e propriedades de todos os itens utilizados pelo servidor OpenTibia.

| Versão OTB | Leitura | Escrita |
|-----------|---------|---------|
| v1 | ✅ | ✅ |
| v2 | ✅ | ✅ |
| v3 | ✅ | ✅ |

---

## OTBM — Mapas (Open Tibia Binary Map)

O arquivo `.otbm` armazena o mapa do mundo do servidor, incluindo terrenos, itens e tiles.

| Versão OTBM | Leitura | Escrita |
|------------|---------|---------|
| v1 | ✅ | 🚧 |
| v2 | ✅ | 🚧 |

---

## Legenda

| Símbolo | Significado |
|---------|-------------|
| ✅ | Suportado e estável |
| 🚧 | Em desenvolvimento |
