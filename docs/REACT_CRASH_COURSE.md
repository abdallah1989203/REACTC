# React Crash-Kurs: Von 0 auf App

## Inhaltsverzeichnis
1. [Grundkonzepte](#1-grundkonzepte)
2. [Komponenten](#2-komponenten)
3. [Props und State](#3-props-und-state)
4. [Events und Formulare](#4-events-und-formulare)
5. [Hooks](#5-hooks)
6. [Routing](#6-routing)
7. [API-Aufrufe](#7-api-aufrufe)
8. [Praktische Beispiele](#8-praktische-beispiele)

## 1. Grundkonzepte

### Was ist React?
- Eine JavaScript-Bibliothek für Benutzeroberflächen
- Basiert auf Komponenten
- Verwendet JSX (JavaScript + HTML)

### JSX Basics
```jsx
// So sieht JSX aus
const element = (
  <div>
    <h1>Hallo</h1>
    <p>Dies ist JSX</p>
  </div>
);
```

### Wichtige Regeln
- Komponenten müssen mit Großbuchstaben beginnen
- JSX muss ein umschließendes Element haben
- JavaScript in JSX wird in {} geschrieben

## 2. Komponenten

### Funktionskomponenten (Modern)
```jsx
// Eine einfache Komponente
function Welcome({ name }) {
  return <h1>Hallo, {name}</h1>;
}

// Verwendung:
<Welcome name="Max" />
```

### Komponenten verschachteln
```jsx
function App() {
  return (
    <div>
      <Welcome name="Max" />
      <Welcome name="Anna" />
    </div>
  );
}
```

### Komponenten aufteilen
```jsx
// Button.js
function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

// App.js
function App() {
  return (
    <div>
      <Button text="Klick mich" onClick={() => alert('Hallo!')} />
    </div>
  );
}
```

## 3. Props und State

### Props (Eigenschaften)
```jsx
// Props weitergeben
function UserCard({ name, age, city }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Alter: {age}</p>
      <p>Stadt: {city}</p>
    </div>
  );
}

// Verwendung:
<UserCard 
  name="Max Mustermann"
  age={25}
  city="Berlin"
/>
```

### State (Zustand)
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anzahl: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Erhöhen
      </button>
    </div>
  );
}
```

## 4. Events und Formulare

### Events handhaben
```jsx
function Button() {
  const handleClick = (e) => {
    console.log('Button geklickt!', e);
  };

  return (
    <button onClick={handleClick}>
      Klick mich
    </button>
  );
}
```

### Formulare
```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gesendet:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Benutzername"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Passwort"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## 5. Hooks

### useState
```jsx
const [state, setState] = useState(initialWert);
```

### useEffect
```jsx
// Bei jedem Render
useEffect(() => {
  console.log('Komponente wurde aktualisiert');
});

// Nur beim ersten Render
useEffect(() => {
  console.log('Komponente wurde montiert');
}, []);

// Bei Änderung von count
useEffect(() => {
  console.log('Count hat sich geändert:', count);
}, [count]);
```

### Custom Hooks
```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Verwendung:
function App() {
  const [name, setName] = useLocalStorage('name', '');
  return <input value={name} onChange={e => setName(e.target.value)} />;
}
```

## 6. Routing

### Setup (react-router-dom)
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Über uns</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 7. API-Aufrufe

### Mit fetch
```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fehler:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Laden...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 8. Praktische Beispiele

### Todo-Liste
```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setTodos([...todos, {
      id: Date.now(),
      text: input,
      completed: false
    }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Neue Aufgabe"
        />
        <button type="submit">Hinzufügen</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Daten laden und anzeigen
```jsx
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Fehler beim Laden der Produkte');
      setLoading(false);
    }
  };

  if (loading) return <div>Laden...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
          <button onClick={() => alert(`${product.name} zum Warenkorb hinzugefügt`)}>
            Kaufen
          </button>
        </div>
      ))}
    </div>
  );
}
```

## Best Practices

### 1. Komponenten-Organisation
- Eine Komponente pro Datei
- Logische Gruppierung in Ordnern
- Wiederverwendbare Komponenten in `components/`

### 2. State Management
- State so nah wie möglich am Verwendungsort
- Vermeiden von prop drilling
- Context für globalen State

### 3. Performance
- useMemo für teure Berechnungen
- useCallback für Funktionen als Props
- React.memo für Pure Components

### 4. Fehlerbehandlung
```jsx
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <h1>Etwas ist schief gelaufen.</h1>;
  }

  return children;
}
```

## Nächste Schritte

1. **Erweiterte Konzepte lernen:**
   - Context API
   - Redux/Zustand
   - TypeScript mit React

2. **Tools kennenlernen:**
   - React Developer Tools
   - ESLint
   - Prettier

3. **Projekte bauen:**
   - Todo-App erweitern
   - Blog erstellen
   - E-Commerce-Seite entwickeln

## Debugging-Tipps

1. **React Developer Tools verwenden**
   - Komponenten inspizieren
   - Props und State überprüfen
   - Performance messen

2. **Console.log strategisch einsetzen**
```jsx
useEffect(() => {
  console.log('State geändert:', state);
}, [state]);
```

3. **Error Boundaries einsetzen**
```jsx
<ErrorBoundary>
  <MeineKomponente />
</ErrorBoundary>
```

## Häufige Fehler und Lösungen

### 1. Infinite Loops
```jsx
// FALSCH
useEffect(() => {
  setCount(count + 1);
}); // Fehlt Dependency Array

// RICHTIG
useEffect(() => {
  setCount(c => c + 1);
}, []); // Leeres Dependency Array
```

### 2. State Updates
```jsx
// FALSCH
setUsers(users.push(newUser));

// RICHTIG
setUsers([...users, newUser]);
```

### 3. Event Handler
```jsx
// FALSCH
<button onClick={handleClick()}>

// RICHTIG
<button onClick={handleClick}>
// oder
<button onClick={() => handleClick()}>
```

## Ressourcen zum Weiterlesen

1. **Offizielle Dokumentation**
   - [React Docs](https://reactjs.org/docs)
   - [Create React App](https://create-react-app.dev)

2. **Tutorials**
   - [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
   - [freeCodeCamp React Course](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)

3. **Community**
   - [React Subreddit](https://reddit.com/r/reactjs)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

## Übungen zum Lernen

1. **Counter App erweitern**
   - Reset-Button hinzufügen
   - Min/Max-Werte einbauen
   - Schrittgröße anpassbar machen

2. **Todo-Liste verbessern**
   - Kategorien hinzufügen
   - Filter-Funktionen
   - LocalStorage-Persistenz

3. **API-Integration üben**
   - Daten von einer öffentlichen API laden
   - Fehlerbehandlung implementieren
   - Loading-States verwalten
