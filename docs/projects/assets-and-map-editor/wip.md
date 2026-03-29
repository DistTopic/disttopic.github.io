# Em Desenvolvimento

O que está sendo construído atualmente e o que está planejado.

!!! note "Transparência"
    Esta página reflete o estado real do projeto. Itens marcados como 🚧 estão sendo desenvolvidos ativamente. Sugestões são bem-vindas no [Discord](https://discord.gg/NrzbcBhh66) ou via [issues no GitHub](https://github.com/DistTopic/assets-and-map-editor/issues).

---

## 🚧 Em desenvolvimento ativo

### Escrita de DAT/SPR
Atualmente o editor carrega e visualiza arquivos DAT e SPR, mas ainda não permite salvar alterações de volta nesses formatos. Esta é a funcionalidade mais solicitada e está em desenvolvimento.

**Status:** Implementação em progresso  
**Bloqueio:** Garantir compatibilidade com múltiplas versões do protocolo Tibia

---

### Edição de OTBM (mapas)
O visualizador de mapas está funcional. O próximo passo é permitir edição de tiles, adição/remoção de itens e exportação de áreas do mapa.

**Status:** Visualizador ✅ | Editor 🚧

---

### Exportação em lote de sprites
Exportar todos os sprites de uma categoria de uma vez, com opções de formato (PNG, spritesheet) e naming convention configurável.

**Status:** Design definido, implementação pendente

---

## 📋 Planejado (backlog)

| Funcionalidade | Prioridade | Notas |
|---------------|-----------|-------|
| Importação em lote de sprites | Alta | Dependente da escrita DAT/SPR |
| Validação de OTB contra DAT | Média | Detectar inconsistências |
| Modo comparação de versões DAT | Média | Útil para atualizações de cliente |
| Plugin system | Baixa | Extensibilidade via scripts |
| Exportação para formato OBD | Baixa | Compatibilidade com Object Builder |
| Interface em português | Alta | UI do app em pt-BR |
| Dark/light mode toggle | Baixa | Já é dark-only |

---

## ✅ Concluído recentemente

| Versão | Funcionalidade |
|--------|---------------|
| v1.0.0-preview | Visualizador de DAT/SPR |
| v1.0.0-preview | Leitor de OTB |
| v1.0.0-preview | Visualizador de OTBM |
| v1.0.0-preview | Build cross-platform (6 plataformas) |
| v1.0.0-preview | Checksums SHA-256 nos releases |
| v1.0.0-preview | CI/CD com CodeQL |

---

## 💬 Quer contribuir?

Qualquer ajuda é bem-vinda! Veja o [guia de contribuição](https://github.com/DistTopic/assets-and-map-editor/blob/main/CONTRIBUTING.md) e entre no [Discord](https://discord.gg/NrzbcBhh66) para discutir.
