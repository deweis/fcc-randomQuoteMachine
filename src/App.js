import React, { Component } from 'react';
import './App.css';
import Quote from './Quote/Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Quote Generator</h1>
        <Quote />
      </div>
    );
  }
}

export default App;
