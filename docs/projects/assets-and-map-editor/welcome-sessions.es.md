# Pantalla de Bienvenida y Sesiones

Elige rápidamente qué hacer al abrir el editor — continúa donde lo dejaste o empieza de cero.

![Pantalla de bienvenida con historial de sesiones](/assets/images/screenshots/v2-welcome-window.png)

---

## Pantalla de bienvenida

Al iniciar el editor, la pantalla de bienvenida presenta dos opciones:

![Opciones de la pantalla inicial](/assets/images/screenshots/v2-welcome-actions.png)

| Acción | Qué hace |
|--------|----------|
| **Restore Last Session** | Reabre exactamente los archivos y configuraciones de la última vez |
| **Open Files** | Inicia una sesión en blanco para abrir nuevos archivos |

### Historial de sesiones

El lado derecho lista las últimas sesiones usadas, con fecha de cierre y los archivos de cada una.

![Historial de sesiones recientes](/assets/images/screenshots/v2-session-history.png)

- Haz clic en cualquier sesión del historial para restaurarla directamente
- El historial mantiene hasta **20 sesiones** recientes
- Cada entrada registra los archivos abiertos y las configuraciones de visualización del mapa

!!! tip "Consejo"
    El historial incluye configuraciones de View (pisos visibles, cuadrículas, animaciones) — todo se restaura automáticamente.

---

## Restauración de sesión

Al restaurar una sesión, el editor recupera:

| Dato restaurado | Descripción |
|----------------|-------------|
| Archivos abiertos | Carpeta del cliente, OTB y mapa |
| Viewport del mapa | Posición X/Y, piso y zoom |
| Configuraciones de View | Todas las opciones del menú View |
| Lista de ciudades | Ciudades del mapa cargadas en la lista de navegación |

!!! info "Sesiones múltiples"
    Cada sesión funciona de forma independiente. Abre varios conjuntos de .spr + .dat en sesiones separadas y trasplanta ítems entre ellas sin conflictos.

---

## Animaciones

### Animate Always

La propiedad "Animate Always" en los ítems ahora es un checkbox editable en el panel de animación.

![Checkbox Animate Always en el panel de animación](/assets/images/screenshots/v2-animate-always.png)

Marca o desmarca para controlar si el ítem anima continuamente en el cliente.

### Play preservado

El botón Play de la animación ahora permanece activo al navegar entre ítems que tienen animación. Ya no es necesario hacer clic en Play cada vez que seleccionas un nuevo ítem.
