# Interface

Um visual moderno feito para quem trabalha com servidores Open Tibia no dia a dia.

---

## Navegação pelos menus

### File

![Menu File](/assets/images/screenshots/editor-menu-file.png)

| Opção | Atalho | Descrição |
|--------|--------|----------|
| Select Client Folder | — | Define a pasta com os arquivos `.dat` e `.spr` do cliente |
| Open OTB... | — | Abre um arquivo de itens do servidor |
| Open Map... | — | Abre um arquivo de mapa `.otbm` |
| Save All | `⌘S` | Salva OTB e mapa abertos |
| Export Selected... | `⌘E` | Exporta os itens selecionados |

### Session

![Menu Session](/assets/images/screenshots/editor-menu-session.png)

| Opção | Descrição |
|--------|----------|
| New Session | Cria uma nova sessão de edição |
| Transplant Item... | Move um item de outro OTB para a sessão atual |
| Merge Session Into Current... | Mescla outra sessão na atual, preservando IDs |

### View

![Menu View](/assets/images/screenshots/editor-menu-view.png)

Controla o que é exibido no visualizador de mapa: floors, grades, zonas (PZ, PvP, NoLog), animações, waypoints e iluminação.

### Tools

![Menu Tools](/assets/images/screenshots/editor-menu-tools.png)

| Opção | Descrição |
|--------|----------|
| Brush Editor | Cria e edita brushes para pintura no mapa |
| Find Unmapped Client Items... | Lista itens do cliente sem correspondência no servidor |
| Find Duplicate Items... | Detecta itens com o mesmo Client ID em entradas diferentes |
| Compact Sprites (Fill Empty Slots)... | Remove lacunas vazias na tabela de sprites |

### Edit — Border Automagic

![Menu Edit — Border Automagic](/assets/images/screenshots/editor-menu-edit.png)

Quando ativado, o editor gera bordas de transição automaticamente ao pintar tiles adjacentes de tipos diferentes.

### Context menu do mapa

![Context menu do mapa](/assets/images/screenshots/editor-map-context.png)

Clique direito em qualquer tile para acessar:

| Opção | Descrição |
|--------|----------|
| Copy Server ID | Copia o ID do item no servidor |
| Copy Client ID | Copia o ID do item no cliente |
| Copy Position | Copia as coordenadas X, Y, Z do tile |
| Select RAW | Seleciona o tile em modo raw |
| Lookup in Collection | Encontra o item na coleção de brushes |
| Browse Tile | Abre o painel de inspeção do tile |

---

## O que você encontra

- **Tema escuro nativo** — ideal para analisar sprites por longos períodos sem cansar a vista
- **Layout em três painéis** — navegação lateral, visualização central e painel de propriedades sempre visíveis
- **Atalhos de teclado** — acesse as principais funções sem tirar as mãos do teclado
- **Barra de status** — ID, nome e tipo do item selecionado sempre visíveis na parte inferior
- **Totalmente portátil** — descompacte e abra, sem instalação e sem dependências adicionais

## Plataformas disponíveis

| Sistema | Status |
|---------|--------|
| Windows (x64 e ARM64) | ✅ Disponível |
| macOS (Intel e Apple Silicon) | ✅ Disponível |
| Linux (x64 e ARM64) | ✅ Disponível |

