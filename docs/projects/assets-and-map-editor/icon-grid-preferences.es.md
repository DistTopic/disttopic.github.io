# Cuadrícula de Íconos y Preferencias

Alterna entre lista y cuadrícula compacta de íconos en el panel de ítems, y configura el editor a tu medida.

<!-- TODO: capturar screenshot mostrando el panel de ítems en modo cuadrícula de íconos -->
![Panel de ítems en modo cuadrícula de íconos](/assets/images/screenshots/v2-icon-grid-view.png)

---

## Cuadrícula de íconos

El botón de alternancia está junto a la barra de búsqueda, en la esquina superior derecha del panel de ítems.

<!-- TODO: capturar screenshot destacando el botón de toggle (ícono de cuadrícula) en la barra de búsqueda -->
![Botón de alternancia entre lista y cuadrícula](/assets/images/screenshots/v2-icon-grid-toggle.png)

### Modo lista

Muestra cada ítem con sprite e ID en una fila — ideal para lectura rápida y navegación secuencial.

<!-- TODO: capturar screenshot del panel de ítems en modo lista tradicional -->
![Modo lista con sprite e ID](/assets/images/screenshots/v2-list-view.png)

### Modo cuadrícula

Muestra solo los sprites en una cuadrícula compacta — ideal para localización visual rápida cuando ya sabes lo que buscas.

<!-- TODO: capturar screenshot del panel de ítems en modo cuadrícula compacta -->
![Modo cuadrícula compacta de sprites](/assets/images/screenshots/v2-grid-view.png)

!!! tip "Consejo"
    Pasa el mouse sobre cualquier ícono en la cuadrícula para ver el ID del ítem en el tooltip.

---

## Preferencias

Accede a **File → Preferences** para abrir la ventana de configuración del editor.

<!-- TODO: capturar screenshot de la ventana de Preferences abierta -->
![Ventana de Preferencias](/assets/images/screenshots/v2-preferences-window.png)

### Ítems por página

Controla cuántos ítems aparecen por vez en el panel de ítems. El valor por defecto es **100**.

| Configuración | Valor |
|--------------|-------|
| Mínimo | 10 |
| Máximo | 1000 |
| Incremento | 10 |
| Por defecto | 100 |

El cambio se aplica inmediatamente y se mantiene entre sesiones — al reabrir el editor, el valor configurado se preserva.

!!! info "Cuándo aumentar"
    Para proyectos con muchos ítems, aumenta a 200–500 para reducir la navegación entre páginas. Valores muy altos pueden ralentizar el desplazamiento en máquinas modestas.

---

## Paneles redimensionables

Las tres columnas del editor ahora pueden redimensionarse arrastrando los divisores entre ellas.

<!-- TODO: capturar screenshot mostrando los divisores entre paneles, con cursor de redimensionamiento visible -->
![Divisores entre paneles redimensionables](/assets/images/screenshots/v2-resizable-panels.png)

| Panel | Posición | Contenido |
|-------|----------|-----------|
| Izquierdo | Ítems del cliente | Lista/cuadrícula de sprites, barra de búsqueda, paginación |
| Central | Editor | Pestañas de Texture y Properties, composición de sprites |
| Derecho | Detalle OTB | Propiedades del ítem en el servidor |

Arrastra cualquier divisor para dar más espacio al área que estás usando en el momento.
