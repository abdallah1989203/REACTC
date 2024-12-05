# React Dateien und ihre Bedeutung

## Projektstruktur-Übersicht
```
meine-react-app/
├── node_modules/       # Abhängigkeiten
├── public/            # Statische Dateien
├── src/               # Quellcode
├── package.json       # Projektkonfiguration
└── README.md         # Projektdokumentation
```

## 1. Konfigurationsdateien

### package.json
```json
{
  "name": "meine-react-app",
  "version": "0.1.0",
  "dependencies": {
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "react-scripts": "5.x.x"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```
**Zweck:**
- Liste aller Abhängigkeiten
- Projekt-Metadaten
- NPM-Skripte für verschiedene Befehle

### package-lock.json
- Exakte Versionen aller Abhängigkeiten
- Wird automatisch generiert
- Sichert konsistente Installationen

### .gitignore
```plaintext
node_modules
build
.env
```
**Zweck:**
- Liste von Dateien, die nicht in Git aufgenommen werden
- Verhindert das Hochladen von großen oder sensiblen Dateien

## 2. Public-Verzeichnis

### public/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
**Zweck:**
- Haupt-HTML-Datei
- Enthält den "root" div für React
- Meta-Tags und Titel

### public/manifest.json
```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone"
}
```
**Zweck:**
- PWA (Progressive Web App) Konfiguration
- App-Icons und -Name
- Display-Einstellungen

## 3. Source-Verzeichnis (src)

### src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
**Zweck:**
- Einstiegspunkt der Anwendung
- Rendert die App-Komponente
- Initialisiert React

### src/App.js
```javascript
import React from 'react';
import './App.css';
import Header from './components/Header';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="App">
      <Header title="Meine App" />
      <DataTable data={[]} />
    </div>
  );
}

export default App;
```
**Zweck:**
- Hauptkomponente
- Layout-Struktur
- Komponenten-Zusammensetzung

### src/App.css
```css
.App {
  text-align: center;
  padding: 20px;
}

.header {
  background-color: #282c34;
  color: white;
}
```
**Zweck:**
- Globale Styles
- App-weites Styling
- Layout-Definitionen

## 4. Komponenten-Verzeichnis

### src/components/Header.js
```javascript
import React from 'react';

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
```
**Zweck:**
- Wiederverwendbare UI-Komponente
- Nimmt Props entgegen
- Rendert einen bestimmten Teil der UI

### src/components/DataTable.js
```javascript
import React from 'react';

function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Alter</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
```
**Zweck:**
- Datenvisualisierung
- Dynamisches Rendering
- Wiederverwendbare Tabellenkomponente

## 5. Assets-Verzeichnis

### src/assets/
- Bilder
- Fonts
- Icons
- Andere statische Ressourcen

## 6. Styles-Verzeichnis

### src/styles/
```
styles/
├── variables.css    # CSS-Variablen
├── global.css       # Globale Styles
└── components/      # Komponenten-spezifische Styles
```

## 7. Utils-Verzeichnis

### src/utils/
```javascript
// api.js
export const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// helpers.js
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};
```
**Zweck:**
- Hilfsfunktionen
- API-Aufrufe
- Formatierungsfunktionen

## 8. Hooks-Verzeichnis

### src/hooks/
```javascript
// useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```
**Zweck:**
- Custom Hooks
- Wiederverwendbare Logik
- State-Management-Helfer

## 9. Context-Verzeichnis

### src/context/
```javascript
// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```
**Zweck:**
- Globaler State
- Theme-Management
- App-weite Einstellungen

## 10. Services-Verzeichnis

### src/services/
```javascript
// authService.js
export const login = async (credentials) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
  return response.json();
};

// userService.js
export const getUsers = async () => {
  const response = await fetch('/api/users');
  return response.json();
};
```
**Zweck:**
- API-Integration
- Backend-Kommunikation
- Service-Logik

## 11. Test-Dateien

### src/__tests__/
```javascript
// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
**Zweck:**
- Unit Tests
- Integration Tests
- Test-Utilities

## Datei-Beziehungen

### Import/Export-Fluss
```javascript
// Komponenten importieren andere Komponenten
import Header from './components/Header';

// Styles importieren
import './App.css';

// Hooks und Context verwenden
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

// Services in Komponenten nutzen
import { getUsers } from './services/userService';
```

## Best Practices

### 1. Dateiorganisation
- Logische Gruppierung in Verzeichnissen
- Klare Namenskonventionen
- Modulare Struktur

### 2. Imports/Exports
- Saubere Import-Reihenfolge
- Explizite Exports
- Vermeidung zirkulärer Abhängigkeiten

### 3. Komponenten
- Eine Komponente pro Datei
- Aussagekräftige Namen
- JSDoc-Kommentare für Dokumentation

### 4. Styles
- Komponenten-spezifische CSS-Module
- Globale Styles minimieren
- CSS-Variablen für Themes

## Entwicklungs-Workflow

1. **Neue Komponente erstellen:**
   ```bash
   touch src/components/NewComponent.js
   ```

2. **Komponente implementieren:**
   ```javascript
   import React from 'react';
   
   function NewComponent() {
     return <div>Neue Komponente</div>;
   }
   
   export default NewComponent;
   ```

3. **Styles hinzufügen:**
   ```bash
   touch src/styles/components/NewComponent.css
   ```

4. **Tests schreiben:**
   ```bash
   touch src/__tests__/NewComponent.test.js
   ```

## Debugging und Entwicklung

### 1. Console.log Strategien
```javascript
useEffect(() => {
  console.log('Props:', props);
  console.log('State:', state);
}, [props, state]);
```

### 2. React Developer Tools
- Komponenten-Inspektor
- Props/State-Überwachung
- Performance-Profiling

### 3. Error Boundaries
```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Etwas ist schief gelaufen.</h1>;
    }
    return this.props.children;
  }
}
```

## Sicherheitsaspekte

### 1. Umgebungsvariablen
```plaintext
# .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key
```

### 2. Sensitive Daten
- Nie API-Keys im Code
- Env-Variablen für Konfiguration
- HTTPS für API-Calls

## Build und Deployment

### 1. Build-Prozess
```bash
npm run build
```
Erstellt optimierte Produktions-Dateien in `/build`

### 2. Deployment-Konfiguration
```json
{
  "homepage": "https://meine-domain.com",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

## Wartung und Updates

### 1. Abhängigkeiten aktualisieren
```bash
npm update
npm audit fix
```

### 2. Code-Qualität
- ESLint für Linting
- Prettier für Formatierung
- TypeScript für Typsicherheit
