# Interfaz

Un diseño moderno pensado para quienes trabajan con servidores Open Tibia a diario.

---

## Navegación por menús

### File

![Menú File](/assets/images/screenshots/editor-menu-file.png)

| Opción | Atajo | Descripción |
|--------|-------|-------------|
| Select Client Folder | — | Define la carpeta con los archivos `.dat` y `.spr` del cliente |
| Open OTB... | — | Abre un archivo de ítems del servidor |
| Open Map... | — | Abre un archivo de mapa `.otbm` |
| Save All | `⌘S` | Guarda el OTB y el mapa abiertos |
| Export Selected... | `⌘E` | Exporta los ítems seleccionados |

### Session

![Menú Session](/assets/images/screenshots/editor-menu-session.png)

| Opción | Descripción |
|--------|-------------|
| New Session | Crea una nueva sesión de edición |
| Transplant Item... | Mueve un ítem de otro OTB a la sesión actual |
| Merge Session Into Current... | Combina otra sesión con la actual conservando IDs |

### View

![Menú View](/assets/images/screenshots/editor-menu-view.png)

Controla qué se muestra en el visor del mapa: pisos, cuadrícula, zonas (PZ, PvP, NoLog), animaciones, waypoints e iluminación.

### Tools

![Menú Tools](/assets/images/screenshots/editor-menu-tools.png)

| Opción | Descripción |
|--------|-------------|
| Brush Editor | Crea y edita brushes para pintura en el mapa |
| Find Unmapped Client Items... | Lista ítems del cliente sin correspondencia en el servidor |
| Find Duplicate Items... | Detecta ítems con el mismo Client ID |
| Compact Sprites (Fill Empty Slots)... | Elimina huecos vacíos en la tabla de sprites |

### Edit — Border Automagic

![Edit — Border Automagic](/assets/images/screenshots/editor-menu-edit.png)

Cuando está activado, el editor genera bordes de transición automáticamente al pintar tiles adyacentes de tipos distintos.

### Menú contextual del mapa

![Menú contextual del mapa](/assets/images/screenshots/editor-map-context.png)

Clic derecho en cualquier tile para acceder a:

| Opción | Descripción |
|--------|-------------|
| Copy Server ID | Copia el ID del ítem en el servidor |
| Copy Client ID | Copia el ID del ítem en el cliente |
| Copy Position | Copia las coordenadas X, Y, Z del tile |
| Select RAW | Selecciona el tile en modo raw |
| Lookup in Collection | Localiza el ítem en la colección de brushes |
| Browse Tile | Abre el panel de inspección del tile |

---

## Qué encontrarás

- **Tema oscuro nativo** — ideal para analizar sprites en sesiones largas sin cansar la vista
- **Diseño de tres paneles** — navegación lateral, vista central y panel de propiedades siempre visibles
- **Atajos de teclado** — accede a las funciones principales sin interrumpir tu flujo de trabajo
- **Barra de estado** — ID, nombre y tipo del ítem seleccionado siempre visibles en la parte inferior
- **Totalmente portátil** — descomprime y abre, sin instalación ni dependencias adicionales

## Plataformas disponibles

| Sistema | Estado |
|---------|--------|
| Windows (x64 y ARM64) | ✅ Disponible |
| macOS (Intel y Apple Silicon) | ✅ Disponible |
| Linux (x64 y ARM64) | ✅ Disponible |
