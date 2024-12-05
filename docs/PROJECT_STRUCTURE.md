# React Projekt Struktur Erklärung

## Hauptverzeichnisse

```
meine-react-app/
├── node_modules/     # Enthält alle installierten Abhängigkeiten
├── public/          # Öffentliche statische Dateien
├── src/             # Quellcode der Anwendung
├── docs/            # Dokumentation
└── package.json     # Projekt-Konfiguration und Abhängigkeiten
```

## Detaillierte Erklärung

### 1. Public Verzeichnis (`/public`)
Enthält statische Dateien, die direkt vom Webserver bereitgestellt werden:
- `index.html`: Die Haupt-HTML-Datei, in die React eingebunden wird
- `favicon.ico`: Das Browser-Tab-Icon
- `manifest.json`: Konfiguration für Progressive Web Apps
- `robots.txt`: Anweisungen für Suchmaschinen-Crawler

### 2. Source Verzeichnis (`/src`)
Hier liegt der Hauptcode unserer Anwendung:

#### Hauptdateien
- `index.js`: Der Einstiegspunkt der Anwendung
  ```javascript
  // Startet die React-Anwendung und bindet sie in die DOM ein
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  ```

- `App.js`: Die Hauptkomponente
  ```javascript
  // Zentrale Komponente, die alle anderen Komponenten zusammenbringt
  // Verwaltet den globalen State (personen, counterValue)
  // Enthält die Hauptlogik für das Hinzufügen neuer Personen
  ```

- `App.css`: Globale Styles
  ```css
  /* Enthält alle Styles für:
   * - Grundlegendes Layout
   * - Komponenten-spezifische Styles
   * - Responsive Design Anpassungen
   */
  ```

#### Components Verzeichnis (`/src/components`)
Enthält alle wiederverwendbaren Komponenten:

1. `Header.js`
   ```javascript
   // Zweck: Zeigt den Titel der Anwendung
   // Props:
   // - title: Der anzuzeigende Titel
   ```

2. `DataTable.js`
   ```javascript
   // Zweck: Zeigt Daten in Tabellenform
   // Props:
   // - data: Array von Personen-Objekten
   // Verantwortlich für:
   // - Tabellarische Darstellung
   // - Mapping über Datenarrays
   ```

3. `Counter.js`
   ```javascript
   // Zweck: Demonstriert State-Management
   // Props:
   // - initialValue: Startwert
   // - onCountChange: Callback für Änderungen
   // State:
   // - count: Aktueller Zählerwert
   ```

4. `PersonForm.js`
   ```javascript
   // Zweck: Formular zum Hinzufügen neuer Personen
   // Props:
   // - onPersonAdd: Callback für neue Person
   // State:
   // - formData: Aktuelle Formulardaten
   // Funktionen:
   // - handleChange: Aktualisiert Formularfelder
   // - handleSubmit: Sendet neue Person
   ```

### 3. Package Management

#### package.json
```json
{
  "dependencies": {
    "react": "^18.x",    // React Kernbibliothek
    "react-dom": "^18.x" // React DOM-Manipulation
  },
  "scripts": {
    "start": "react-scripts start",   // Entwicklungsserver
    "build": "react-scripts build",   // Produktions-Build
    "test": "react-scripts test"      // Tests ausführen
  }
}
```

### 4. Dokumentation (`/docs`)
- `REACT_CONCEPTS.md`: Erklärt React-Grundkonzepte
- `PROJECT_STRUCTURE.md`: Diese Datei

## Datenfluss

```
App.js (Hauptstate)
├── Header (Props: title)
├── Counter (Props: initialValue, onCountChange)
├── PersonForm (Props: onPersonAdd)
└── DataTable (Props: data)
```

## State Management
1. **Globaler State** (in App.js):
   - `personen`: Liste aller Personen
   - `counterValue`: Aktueller Zählerstand

2. **Lokaler State**:
   - In `Counter.js`: Zählerstand
   - In `PersonForm.js`: Formulardaten

## Entwicklungs-Workflow
1. Start der Entwicklung:
   ```bash
   npm start
   ```
2. Neue Komponente erstellen:
   - Datei in `/src/components` anlegen
   - Komponente exportieren
   - In `App.js` importieren

3. Styling hinzufügen:
   - Styles in `App.css` definieren
   - Klassenname an Komponente übergeben

## Best Practices
1. **Komponenten-Organisation:**
   - Eine Komponente pro Datei
   - Klare Namensgebung
   - Komponenten im components-Verzeichnis

2. **State Management:**
   - State so nah wie möglich am Verwendungsort
   - Props für Datenübergabe nach unten
   - Callbacks für Daten nach oben

3. **Styling:**
   - Konsistente Klassennamen
   - Wiederverwendbare Styles
   - Responsive Design beachten
