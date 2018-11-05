import React, { Component } from 'react';
import './App.css';
import Quote from './Quote/Quote';

class App extends Component {
  newQuoteHandler = () => {
    console.log('clicked');
  };

  render() {
    let theId = 2;
    return (
      <div className="App">
        <h1>Quote Generator</h1>
        <button onClick={this.newQuoteHandler}>New Quote</button>
        <Quote num={theId} />
      </div>
    );
  }
}

export default App;
