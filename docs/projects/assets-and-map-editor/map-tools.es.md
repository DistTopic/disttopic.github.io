# Herramientas de Mapa

Gestiona propiedades, consulta estadísticas y navega por ciudades directamente en el editor.

![Menú Map con opciones de propiedades y estadísticas](/assets/images/screenshots/v2-map-menu.png)

---

## Propiedades del mapa

Accede a **Map → Map Properties** para visualizar y editar los metadatos del mapa.

![Diálogo de Propiedades del Mapa](/assets/images/screenshots/v2-map-properties.png)

| Campo | Descripción |
|-------|-------------|
| Description | Texto descriptivo del mapa |
| Width / Height | Dimensiones del mapa en tiles |
| House File | Ruta del archivo de houses (.xml) |
| Spawn File | Ruta del archivo de spawns (.xml) |

---

## Estadísticas del mapa

Accede a **Map → Map Statistics** para ver un resumen numérico del mapa cargado.

![Diálogo de Estadísticas del Mapa](/assets/images/screenshots/v2-map-statistics.png)

El diálogo muestra:

- Conteo total de tiles
- Conteo total de ítems
- Número de spawns
- Número de houses

!!! info "Utilidad"
    Usa las estadísticas para verificar si una importación o limpieza alteró el mapa como esperabas — compara los números antes y después.

---

## Navegación por ciudades

El panel de propiedades ahora incluye una lista de ciudades del mapa con búsqueda integrada.

![Lista de ciudades con búsqueda en el panel de propiedades](/assets/images/screenshots/v2-town-navigation.png)

- Escribe en el campo de búsqueda para filtrar ciudades por nombre
- Haz clic en una ciudad para centrar el mapa en ella
- La lista se carga automáticamente al abrir el mapa y se restaura entre sesiones

---

## Minimap centrado

El minimap ahora se renderiza centrado en la viewport, independiente del tamaño del mapa.

![Minimap centrado en la viewport](/assets/images/screenshots/v2-minimap-centered.png)

- Arrastra el minimap para reposicionarlo
- Redimensiona según necesites
- El área visible se destaca con un rectángulo de selección en el minimap


