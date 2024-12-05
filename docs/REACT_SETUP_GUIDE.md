# Vollständige React Setup-Anleitung

## Inhaltsverzeichnis
1. [Systemvoraussetzungen](#1-systemvoraussetzungen)
2. [Node.js Installation](#2-nodejs-installation)
3. [Projekt-Setup](#3-projekt-setup)
4. [Projektstruktur verstehen](#4-projektstruktur-verstehen)
5. [Development-Server starten](#5-development-server-starten)
6. [Erste Schritte im Code](#6-erste-schritte-im-code)
7. [Deployment](#7-deployment)
8. [Häufige Probleme & Lösungen](#8-häufige-probleme--lösungen)

## 1. Systemvoraussetzungen

### Minimum-Anforderungen:
- Computer mit Windows, macOS oder Linux
- Mindestens 4GB RAM (8GB empfohlen)
- Internetverbindung
- Code-Editor (empfohlen: VS Code)

### Empfohlene Tools:
- Git für Versionskontrolle
- Chrome oder Firefox für React Developer Tools
- Terminal/Kommandozeile

## 2. Node.js Installation

### Windows:
1. Gehe zu [nodejs.org](https://nodejs.org/)
2. Lade die LTS (Long Term Support) Version herunter
3. Führe den Installer aus
4. Folge den Installationsanweisungen
5. Öffne cmd und prüfe die Installation:
   ```bash
   node --version
   npm --version
   ```

### macOS:
1. Option 1 - Direkter Download:
   - Gehe zu [nodejs.org](https://nodejs.org/)
   - Lade die macOS LTS Version herunter
   - Führe den Installer aus

2. Option 2 - Homebrew (empfohlen):
   ```bash
   brew install node
   ```

### Linux (Ubuntu/Debian):
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## 3. Projekt-Setup

### Create React App installieren:
```bash
npm install -g create-react-app
```

### Neues Projekt erstellen:
```bash
npx create-react-app mein-projekt-name
cd mein-projekt-name
```

### Wichtige npm Befehle:
```bash
npm start      # Startet den Entwicklungsserver
npm test      # Startet den Test Runner
npm run build # Erstellt eine Production-Build
npm eject    # Erweiterte Konfiguration (Vorsicht: Einweg-Operation!)
```

### Zusätzliche Pakete installieren:
```bash
# Routing
npm install react-router-dom

# State Management
npm install redux react-redux

# UI Komponenten
npm install @material-ui/core    # Material UI
npm install react-bootstrap      # Bootstrap für React

# HTTP-Anfragen
npm install axios
```

## 4. Projektstruktur verstehen

### Basis-Struktur:
```
mein-projekt/
├── node_modules/    # Alle installierten Pakete
├── public/         # Statische Dateien
│   ├── index.html  # HTML-Template
│   └── favicon.ico # Browser-Icon
├── src/            # React-Quellcode
│   ├── index.js    # Einstiegspunkt
│   ├── App.js      # Hauptkomponente
│   └── App.css     # Styles
└── package.json    # Projekt-Konfiguration
```

### Empfohlene erweiterte Struktur:
```
src/
├── components/     # Wiederverwendbare Komponenten
├── pages/         # Seitenkomponenten
├── services/      # API-Aufrufe
├── utils/         # Hilfsfunktionen
├── hooks/         # Custom Hooks
├── context/       # React Context
└── assets/        # Bilder, Fonts etc.
```

## 5. Development-Server starten

### Standard-Start:
```bash
npm start
```
- Öffnet http://localhost:3000
- Hot Reloading aktiviert
- Zeigt Fehler im Browser

### Mit benutzerdefinierten Einstellungen:
```bash
# Port ändern
PORT=4000 npm start

# HTTPS aktivieren
HTTPS=true npm start

# Umgebungsvariablen
REACT_APP_API_URL=https://api.example.com npm start
```

## 6. Erste Schritte im Code

### 1. App.js aufräumen:
```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meine erste React-App</h1>
    </div>
  );
}

export default App;
```

### 2. Erste Komponente erstellen:
```javascript
// src/components/Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
```

### 3. State und Events:
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Zähler: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Erhöhen
      </button>
    </div>
  );
}
```

## 7. Deployment

### Build erstellen:
```bash
npm run build
```
Erstellt optimierte Dateien in `/build`

### Deployment-Optionen:

1. **GitHub Pages:**
   ```bash
   npm install gh-pages
   ```
   In package.json hinzufügen:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

2. **Netlify:**
   - Account erstellen auf netlify.com
   - Repository verbinden
   - Build-Einstellungen:
     - Build command: `npm run build`
     - Publish directory: `build`

3. **Vercel:**
   - Account auf vercel.com
   - Vercel CLI installieren:
     ```bash
     npm i -g vercel
     vercel login
     vercel
     ```

## 8. Häufige Probleme & Lösungen

### npm Start funktioniert nicht:
1. node_modules löschen
2. package-lock.json löschen
3. Neu installieren:
   ```bash
   npm install
   ```

### Port bereits in Verwendung:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Weiße Seite im Browser:
1. Console-Fehler prüfen
2. React Developer Tools installieren
3. Cache leeren
4. In package.json prüfen:
   - React und ReactDOM Versionen
   - Scripts-Bereich

### Build-Fehler:
1. Dependencies aktualisieren:
   ```bash
   npm update
   ```
2. Cache leeren:
   ```bash
   npm cache clean --force
   ```

## Entwicklungs-Best-Practices

### 1. Code-Organisation:
- Eine Komponente pro Datei
- Aussagekräftige Namen verwenden
- Komponenten in logische Ordner gruppieren

### 2. State Management:
- useState für lokalen State
- useContext für globalen State
- Redux nur bei Bedarf

### 3. Performance:
- React.memo für Pure Components
- useCallback für Funktionen
- useMemo für berechnete Werte

### 4. Testing:
```bash
# Test ausführen
npm test

# Coverage Report
npm test -- --coverage
```

### 5. Debugging:
1. React Developer Tools installieren
2. console.log strategisch einsetzen
3. Error Boundaries verwenden
4. Performance-Tab im Chrome DevTools nutzen

## Nützliche Extensions für VS Code

1. ES7+ React/Redux/React-Native snippets
2. Prettier - Code formatter
3. ESLint
4. Auto Import
5. Path Intellisense

## Weiterführende Ressourcen

### Offizielle Dokumentation:
- [React Docs](https://reactjs.org/docs)
- [Create React App Docs](https://create-react-app.dev)

### Lern-Plattformen:
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [freeCodeCamp](https://www.freecodecamp.org)
- [Egghead.io](https://egghead.io)

### Community:
- [React Discord](https://discord.gg/react)
- [Reddit r/reactjs](https://reddit.com/r/reactjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)
