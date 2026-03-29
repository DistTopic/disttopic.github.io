# Assets And Map Editor

**Editor visual cross-platform para assets do jogo Tibia — sprites, itens e outfits.**

[![Versão](https://img.shields.io/github/v/release/DistTopic/assets-and-map-editor?include_prereleases&label=versão&color=6e7681)](https://github.com/DistTopic/assets-and-map-editor/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/DistTopic/assets-and-map-editor/total?color=6e7681)](https://github.com/DistTopic/assets-and-map-editor/releases)
[![Segurança](https://img.shields.io/github/actions/workflow/status/DistTopic/assets-and-map-editor/security-scan.yml?label=security+scan&color=6e7681)](https://github.com/DistTopic/assets-and-map-editor/actions)
[![Licença](https://img.shields.io/github/license/DistTopic/assets-and-map-editor?color=6e7681)](https://github.com/DistTopic/assets-and-map-editor/blob/main/LICENSE)

[Baixar :material-download:](https://github.com/DistTopic/assets-and-map-editor/releases/latest){ .md-button .md-button--primary }
[Código Fonte :material-github:](https://github.com/DistTopic/assets-and-map-editor){ .md-button }
[Discord :fontawesome-brands-discord:](https://discord.gg/NrzbcBhh66){ .md-button }

---

## O que é?

O **Assets And Map Editor** é uma aplicação desktop para visualizar e editar arquivos de dados do Tibia. Desenvolvido para servidores Open Tibia, ele suporta os formatos **DAT**, **SPR**, **OTB** e **OTBM**, trazendo uma interface moderna e intuitiva para trabalhar com sprites, itens e mapas.

## Por que usar?

| Problema | Solução |
|----------|---------|
| Editores antigos só funcionam no Windows | ✅ Roda em Windows, macOS e Linux |
| Interface desatualizada | ✅ Interface moderna e intuitiva |
| Instalação complexa | ✅ Executável único, sem instalação |

## Plataformas suportadas

| Plataforma | Arquitetura | Formato |
|------------|-------------|---------|
| Windows | x64, ARM64 | `.zip` (portátil) |
| macOS | x64 (Intel), ARM64 (Apple Silicon) | `.zip` (app bundle) |
| Linux | x64, ARM64 | `.zip` (portátil) |

## Download rápido

=== "Windows"

    1. Baixe `AssetsEditor-windows-x64.zip` na [página de releases](https://github.com/DistTopic/assets-and-map-editor/releases/latest)
    2. Extraia o `.zip`
    3. Execute `AssetsEditor.exe`

    !!! warning "Aviso do Windows"
        O Windows pode exibir um aviso de segurança ao abrir o editor pela primeira vez. Clique em **Mais informações → Executar assim mesmo** para continuar.

=== "macOS"

    1. Baixe `AssetsEditor-macos-arm64.zip` (Apple Silicon) ou `...-x64.zip` (Intel)
    2. Extraia e execute
    3. Caso macOS bloqueie: `System Preferences → Security → Allow Anyway`

=== "Linux"

    ```bash
    unzip AssetsEditor-linux-x64.zip
    chmod +x AssetsEditor
    ./AssetsEditor
    ```

## Próximos passos

- [Funcionalidades completas →](features.md)
- [O que está sendo desenvolvido →](wip.md)
- [Galeria de screenshots →](gallery.md)
