import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DataTable from './components/DataTable';
import Counter from './components/Counter';
import PersonForm from './components/PersonForm';

function App() {
  const [personen, setPersonen] = useState([
    { name: 'Max Mustermann', alter: 25, stadt: 'Berlin' },
    { name: 'Anna Schmidt', alter: 30, stadt: 'Hamburg' },
    { name: 'Tom Weber', alter: 28, stadt: 'München' },
  ]);

  const [counterValue, setCounterValue] = useState(0);

  const handlePersonAdd = (newPerson) => {
    setPersonen([...personen, newPerson]);
  };

  return (
    <div className="App">
      <Header title="Meine erste React-App" />
      <main>
        <div className="container">
          <Counter 
            initialValue={0} 
            onCountChange={setCounterValue} 
          />
          <p>Counter-Wert in App.js: {counterValue}</p>
          
          <PersonForm onPersonAdd={handlePersonAdd} />
          <DataTable data={personen} />
        </div>
      </main>
    </div>
  );
}

export default App;
