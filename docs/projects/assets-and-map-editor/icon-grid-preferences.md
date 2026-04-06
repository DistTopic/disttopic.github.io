# Grade de Ícones e Preferências

Alterne entre lista e grade compacta de ícones no painel de itens, e configure o editor do seu jeito.

<!-- TODO: capturar screenshot mostrando o painel de itens no modo grade de ícones -->
![Painel de itens no modo grade de ícones](/assets/images/screenshots/v2-icon-grid-view.png)

---

## Grade de ícones

O botão de alternância fica ao lado da barra de busca, no canto superior direito do painel de itens.

<!-- TODO: capturar screenshot destacando o botão de toggle (ícone de grade) na barra de busca -->
![Botão de alternância entre lista e grade](/assets/images/screenshots/v2-icon-grid-toggle.png)

### Modo lista

Exibe cada item com sprite e ID em uma linha — ideal para leitura rápida e navegação sequencial.

<!-- TODO: capturar screenshot do painel de itens no modo lista tradicional -->
![Modo lista com sprite e ID](/assets/images/screenshots/v2-list-view.png)

### Modo grade

Exibe apenas os sprites em uma grade compacta — ideal para localização visual rápida quando você já sabe o que procura.

<!-- TODO: capturar screenshot do painel de itens no modo grade compacta -->
![Modo grade compacta de sprites](/assets/images/screenshots/v2-grid-view.png)

!!! tip "Dica"
    Passe o mouse sobre qualquer ícone na grade para ver o ID do item no tooltip.

---

## Preferências

Acesse **File → Preferences** para abrir a janela de configurações do editor.

<!-- TODO: capturar screenshot da janela de Preferences aberta -->
![Janela de Preferências](/assets/images/screenshots/v2-preferences-window.png)

### Itens por página

Controla quantos itens aparecem por vez no painel de itens. O valor padrão é **100**.

| Configuração | Valor |
|-------------|-------|
| Mínimo | 10 |
| Máximo | 1000 |
| Incremento | 10 |
| Padrão | 100 |

A alteração é aplicada imediatamente e persistida entre sessões — ao reabrir o editor, o valor configurado será mantido.

!!! info "Quando aumentar"
    Para projetos com muitos itens, aumente para 200–500 para reduzir a navegação entre páginas. Valores muito altos podem deixar a rolagem mais lenta em máquinas modestas.

---

## Painéis redimensionáveis

As três colunas do editor agora podem ser redimensionadas arrastando os divisores entre elas.

<!-- TODO: capturar screenshot mostrando os splitters/divisores entre os painéis, com cursor de redimensionamento visível -->
![Divisores entre painéis redimensionáveis](/assets/images/screenshots/v2-resizable-panels.png)

| Painel | Posição | Conteúdo |
|--------|---------|----------|
| Esquerdo | Itens do cliente | Lista/grade de sprites, barra de busca, paginação |
| Central | Editor | Abas de Texture e Properties, composição de sprites |
| Direito | Detalhe OTB | Propriedades do item no servidor |

Arraste qualquer divisor para dar mais espaço à área que está usando no momento.
