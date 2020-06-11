import React from 'react';
import './App.css';
import Stepper from './components/Stepper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stepper View Control</h1>
      </header>
      <div className="Body">
        <Stepper />
      </div>
    </div>
  );
}

export default App;
