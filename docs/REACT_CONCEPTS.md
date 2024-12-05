# React Developer Tools und Props vs. State

## React Developer Tools
React Developer Tools ist eine Browser-Erweiterung, die dir hilft, deine React-Anwendung zu debuggen und zu verstehen.

### Installation
1. Für Chrome: [React Developer Tools im Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
2. Für Firefox: [React Developer Tools im Firefox Add-ons Store](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Was kannst du damit machen?
1. **Komponenten-Inspektor**
   - Zeigt die Hierarchie deiner Komponenten
   - Sichtbar als neuer Tab "Components" in den Browser-Entwicklertools
   - Du kannst sehen, wie Komponenten verschachtelt sind

2. **Props und State überwachen**
   - Zeigt alle Props und State-Werte in Echtzeit
   - Du kannst Werte direkt im Browser ändern und siehst die Auswirkungen

3. **Performance-Profiling**
   - Hilft dir zu verstehen, welche Komponenten neu gerendert werden
   - Zeigt, wie lange Renders dauern

## Props vs. State: Der große Unterschied

### Props (Properties)
Props sind wie **Einstellungen**, die eine Komponente von außen erhält:
```javascript
// Beispiel aus unserer DataTable.js
const DataTable = ({ data }) => {  // data ist hier ein Prop
  return (
    <table>
      {data.map(item => (
        <tr>{item.name}</tr>
      ))}
    </table>
  );
};

// Verwendung:
<DataTable data={personenListe} />
```

#### Wichtige Eigenschaften von Props:
- Können nicht von der Komponente selbst geändert werden (read-only)
- Werden von der Eltern-Komponente übergeben
- Änderungen in Props führen zu einem neuen Rendering
- Gut für: Konfiguration, Datenübergabe von oben nach unten

### State
State ist wie ein **interner Speicher** der Komponente:
```javascript
// Beispiel eines Counters
const Counter = () => {
  const [count, setCount] = useState(0);  // count ist State

  return (
    <div>
      <p>Anzahl: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Erhöhen
      </button>
    </div>
  );
};
```

#### Wichtige Eigenschaften von State:
- Kann von der Komponente selbst geändert werden
- Bleibt bei der Komponente
- Änderungen führen zu neuem Rendering
- Gut für: Interaktive Daten, temporäre Werte, Formularzustände

### Wann benutzt du was?

#### Verwende Props für:
- Daten, die von einer übergeordneten Komponente kommen
- Konfigurationswerte
- Callback-Funktionen
- Beispiel: Tabellendaten, Überschriften, Styling-Informationen

#### Verwende State für:
- Daten, die sich über Zeit ändern
- Benutzereingaben
- Temporäre UI-Zustände
- Beispiel: Formulardaten, Toggle-Zustände, Loading-Status

### Praktisches Beispiel
```javascript
// Eine Komponente mit beiden
const UserForm = ({ onSubmit }) => {  // onSubmit ist ein Prop
  const [name, setName] = useState('');  // name ist State
  const [email, setEmail] = useState(''); // email ist State

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });  // Verwendet Prop-Funktion mit State-Daten
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Speichern</button>
    </form>
  );
};
```

## Tipps für die Entwicklung
1. **Verwende die React Dev Tools um zu sehen:**
   - Welche Props deine Komponenten bekommen
   - Wie sich der State über Zeit ändert
   - Welche Komponente gerade neu gerendert wird

2. **Debugging mit React Dev Tools:**
   - Komponente in der Hierarchie auswählen
   - Props und State im rechten Panel prüfen
   - Werte temporär ändern um Verhalten zu testen

3. **Best Practices:**
   - Halte State so lokal wie möglich
   - Nutze Props für die Datenweitergabe nach unten
   - Vermeide es, zu viele Daten im State zu speichern
