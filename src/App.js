import React, { Component } from 'react';
import './App.css';
import ButtonOne from './components/Button-One/Button';
import ButtonTwo from './components/Button-Two/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ButtonOne />
          <ButtonTwo />
          <h2>Apadrinha.me</h2>
        </div>
      </div>
    );
  }
}

export default App;