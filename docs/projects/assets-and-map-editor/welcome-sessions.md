# Tela de Boas-Vindas e Sessões

Escolha rapidamente o que fazer ao abrir o editor — continue de onde parou ou comece do zero.

![Tela de boas-vindas com histórico de sessões](/assets/images/screenshots/v2-welcome-window.png)

---

## Tela de boas-vindas

Ao iniciar o editor, a tela de boas-vindas apresenta duas opções:

![Opções da tela inicial](/assets/images/screenshots/v2-welcome-actions.png)

| Ação | O que faz |
|------|-----------|
| **Restore Last Session** | Reabre exatamente os arquivos e configurações da última vez |
| **Open Files** | Inicia uma sessão em branco para abrir novos arquivos |

### Histórico de sessões

A lateral direita lista as últimas sessões usadas, com data de fechamento e os arquivos de cada uma.

![Histórico de sessões recentes](/assets/images/screenshots/v2-session-history.png)

- Clique em qualquer sessão do histórico para restaurá-la diretamente
- O histórico mantém até **20 sessões** recentes
- Cada entrada registra os arquivos abertos e as configurações de visualização do mapa

!!! tip "Dica"
    O histórico inclui configurações de View (floors visíveis, grades, animações) — tudo é restaurado automaticamente.

---

## Restauração de sessão

Ao restaurar uma sessão, o editor recupera:

| Dado restaurado | Descrição |
|----------------|-----------|
| Arquivos abertos | Pasta do cliente, OTB e mapa |
| Viewport do mapa | Posição X/Y, andar e zoom |
| Configurações de View | Todas as opções do menu View |
| Lista de cidades | Cidades do mapa carregadas na lista de navegação |

!!! info "Sessões múltiplas"
    Cada sessão funciona de forma independente. Abra vários conjuntos de .spr + .dat em sessões separadas e transplante itens entre elas sem conflitos.

---

## Animações

### Animate Always

A propriedade "Animate Always" nos itens agora é um checkbox editável no painel de animação.

![Checkbox Animate Always no painel de animação](/assets/images/screenshots/v2-animate-always.png)

Marque ou desmarque para controlar se o item anima continuamente no cliente.

### Play preservado

O botão Play da animação agora permanece ativo ao navegar entre itens que possuem animação. Não é mais necessário clicar Play toda vez que selecionar um novo item.
