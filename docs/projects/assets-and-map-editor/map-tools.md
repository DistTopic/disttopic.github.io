# Ferramentas de Mapa

Gerencie propriedades, consulte estatísticas e navegue por cidades diretamente no editor.

<!-- TODO: capturar screenshot do menu Map aberto mostrando as opções Map Properties, Map Statistics -->
![Menu Map com opções de propriedades e estatísticas](/assets/images/screenshots/v2-map-menu.png)

---

## Propriedades do mapa

Acesse **Map → Map Properties** para visualizar e editar os metadados do mapa.

<!-- TODO: capturar screenshot do diálogo Map Properties com os campos preenchidos -->
![Diálogo de Propriedades do Mapa](/assets/images/screenshots/v2-map-properties.png)

| Campo | Descrição |
|-------|-----------|
| Description | Texto descritivo do mapa |
| Width / Height | Dimensões do mapa em tiles |
| House File | Caminho do arquivo de houses (.xml) |
| Spawn File | Caminho do arquivo de spawns (.xml) |

---

## Estatísticas do mapa

Acesse **Map → Map Statistics** para ver um resumo numérico do mapa carregado.

<!-- TODO: capturar screenshot do diálogo Map Statistics mostrando contagens -->
![Diálogo de Estatísticas do Mapa](/assets/images/screenshots/v2-map-statistics.png)

O diálogo apresenta:

- Contagem total de tiles
- Contagem total de itens
- Número de spawns
- Número de houses

!!! info "Utilidade"
    Use as estatísticas para verificar se uma importação ou limpeza alterou o mapa como esperado — compare os números antes e depois.

---

## Navegação por cidades

O painel de propriedades agora inclui uma lista de cidades do mapa com busca integrada.

<!-- TODO: capturar screenshot do painel de propriedades mostrando a lista de cidades com o campo de busca -->
![Lista de cidades com busca no painel de propriedades](/assets/images/screenshots/v2-town-navigation.png)

- Digite no campo de busca para filtrar cidades por nome
- Clique em uma cidade para centralizar o mapa nela
- A lista é populada automaticamente ao carregar o mapa e restaurada entre sessões

---

## Minimap centralizado

O minimap agora renderiza centralizado na viewport, independente do tamanho do mapa.

<!-- TODO: capturar screenshot mostrando o minimap sobreposto ao mapa principal, centralizado na área visível -->
![Minimap centralizado na viewport](/assets/images/screenshots/v2-minimap-centered.png)

- Arraste o minimap para reposicioná-lo
- Redimensione conforme necessário
- A área visível é destacada com um retângulo de seleção no minimap

---

## Operações de limpeza

O menu Map também oferece operações de manutenção para manter o mapa saudável.

<!-- TODO: capturar screenshot do menu Map expandido mostrando opções de cleanup -->
![Opções de cleanup no menu Map](/assets/images/screenshots/v2-map-cleanup.png)

!!! warning "Atenção"
    Sempre salve o mapa antes de executar operações de limpeza. Embora reversíveis dentro da sessão, é prudente ter um backup.
