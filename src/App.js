import React, { useState } from 'react';
import './App.css';
import './styles/Blog.css';
import Header from './components/Header';
import DataTable from './components/DataTable';
import Counter from './components/Counter';
import PersonForm from './components/PersonForm';
import BlogList from './components/BlogList';
import NewPostForm from './components/NewPostForm';

function App() {
  const [personen, setPersonen] = useState([
    { name: 'Max Mustermann', alter: 25, stadt: 'Berlin' },
    { name: 'Anna Schmidt', alter: 30, stadt: 'Hamburg' },
    { name: 'Tom Weber', alter: 28, stadt: 'München' },
  ]);

  const [counterValue, setCounterValue] = useState(0);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Willkommen zu React',
      content: 'Dies ist unser erster Blog-Beitrag über React!',
      author: 'Max Mustermann',
      date: '2024-01-20T12:00:00.000Z'
    }
  ]);

  const handlePersonAdd = (newPerson) => {
    setPersonen([...personen, newPerson]);
  };

  const handleNewPost = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
  };

  return (
    <div className="App">
      <Header title="Meine erste React-App" />
      <header className="App-header">
        <h1>Mein React Blog</h1>
      </header>
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
        <NewPostForm onSubmit={handleNewPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
}

export default App;
