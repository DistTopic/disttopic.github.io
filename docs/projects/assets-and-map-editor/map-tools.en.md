# Map Tools

Manage properties, check statistics, and navigate by town directly in the editor.

<!-- TODO: capture screenshot of Map menu open showing Map Properties, Map Statistics options -->
![Map menu with properties and statistics options](/assets/images/screenshots/v2-map-menu.png)

---

## Map properties

Go to **Map → Map Properties** to view and edit the map metadata.

<!-- TODO: capture screenshot of Map Properties dialog with fields filled in -->
![Map Properties dialog](/assets/images/screenshots/v2-map-properties.png)

| Field | Description |
|-------|-------------|
| Description | Descriptive text for the map |
| Width / Height | Map dimensions in tiles |
| House File | Path to the houses file (.xml) |
| Spawn File | Path to the spawns file (.xml) |

---

## Map statistics

Go to **Map → Map Statistics** to see a numeric summary of the loaded map.

<!-- TODO: capture screenshot of Map Statistics dialog showing counts -->
![Map Statistics dialog](/assets/images/screenshots/v2-map-statistics.png)

The dialog shows:

- Total tile count
- Total item count
- Number of spawns
- Number of houses

!!! info "Usefulness"
    Use statistics to verify if an import or cleanup changed the map as expected — compare numbers before and after.

---

## Town navigation

The properties panel now includes a town list with integrated search.

<!-- TODO: capture screenshot of properties panel showing the town list with search field -->
![Town list with search in the properties panel](/assets/images/screenshots/v2-town-navigation.png)

- Type in the search field to filter towns by name
- Click a town to center the map on it
- The list is populated automatically when loading the map and restored between sessions

---

## Centered minimap

The minimap now renders centered on the viewport, regardless of map size.

<!-- TODO: capture screenshot showing the minimap overlaid on the main map, centered on the visible area -->
![Minimap centered on viewport](/assets/images/screenshots/v2-minimap-centered.png)

- Drag the minimap to reposition it
- Resize as needed
- The visible area is highlighted with a selection rectangle on the minimap

---

## Cleanup operations

The Map menu also offers maintenance operations to keep the map healthy.

<!-- TODO: capture screenshot of expanded Map menu showing cleanup options -->
![Cleanup options in the Map menu](/assets/images/screenshots/v2-map-cleanup.png)

!!! warning "Caution"
    Always save the map before running cleanup operations. While reversible within the session, having a backup is prudent.
