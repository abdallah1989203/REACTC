# React für Anfänger - Eine einfache Einführung

## Was ist React?
React ist eine JavaScript-Bibliothek, die das Erstellen von Benutzeroberflächen (UIs) einfach macht. Stell dir React wie einen Baukasten vor, bei dem du verschiedene Bausteine (Komponenten) zusammenfügst, um deine Webseite zu bauen.

## Wichtige Grundkonzepte

### 1. Komponenten
Komponenten sind wie Legosteine. Jeder Stein hat eine bestimmte Aufgabe:
- Sie sind wiederverwendbar
- Sie können eigenständig funktionieren
- Sie können miteinander kommunizieren

In unserem Beispiel haben wir:
- `Header.js`: Zeigt den Titel an
- `DataTable.js`: Zeigt unsere Daten in Tabellenform
- `App.js`: Fügt alles zusammen

### 2. Props
Props sind wie Nachrichten, die du zwischen Komponenten verschickst:
```javascript
// So übergeben wir Props
<Header title="Meine erste React-App" />

// So empfangen wir sie
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};
```

### 3. State (Zustand)
State ist wie das Gedächtnis deiner App. Hier speicherst du Daten, die sich ändern können:
```javascript
const [personen] = useState([
  { name: 'Max', alter: 25 }
]);
```

## Projektstruktur
```
meine-react-app/
  ├── src/
  │   ├── components/     # Hier leben unsere Komponenten
  │   │   ├── Header.js
  │   │   └── DataTable.js
  │   ├── App.js         # Hauptkomponente
  │   └── App.css        # Styling
  └── public/            # Statische Dateien
```

## Erste Schritte
1. Starte die App:
   ```bash
   npm start
   ```
2. Öffne http://localhost:3000 im Browser
3. Experimentiere mit dem Code:
   - Ändere den Titel im Header
   - Füge neue Personen zur Tabelle hinzu
   - Passe das Styling in App.css an

## Tipps für Anfänger
- Fange klein an und erweitere schrittweise
- Nutze die React Developer Tools im Browser
- Lerne die JSX-Syntax (HTML in JavaScript)
- Verstehe den Unterschied zwischen Props und State

## Nächste Schritte
- Füge Buttons hinzu
- Implementiere Formulare
- Lerne über Event Handling
- Experimentiere mit useEffect

## Hilfreiche Links
- [Offizielle React Dokumentation](https://reactjs.org/)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Create React App Dokumentation](https://create-react-app.dev/)
