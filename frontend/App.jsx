import React from 'react';
import Card from './src/components/Card';
import './App.css';

const cardsData = [
  { id: 1, title: 'React Basics', description: 'Learn the basics of React' },
  { id: 2, title: 'Props & Components', description: 'Understand props and component structure' },
  { id: 3, title: 'Vite + React', description: 'Fast frontend development with Vite' }
];

function App() {
  return (
    <div className="app">
      <h1>Full Stack Development CA</h1>
      <div className="card-container">
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
