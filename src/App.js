import React from 'react';
import input from './input.json'
import Carousel from './components/Carousel/Carousel';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Making a Carousel!</h1>
      </header>
      <Carousel input={input} />
    </div>
  );
}

export default App;
