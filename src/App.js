import React, { Component } from 'react';
import './App.css';
import Quote from './Quote/Quote';

class App extends Component {
  state = {
    quoteId: Math.floor(Math.random() * 90) // 90 = length of the quotes array... how to get it dynamically?
  };

  newQuoteHandler = () => {
    this.setState({
      quoteId: Math.floor(Math.random() * 90) // 90 = length of the quotes array... how to get it dynamically?
    });
  };

  apiQuoteHandler = () => {
    this.setState({
      quoteId: 100
    });
  };

  render() {
    return (
      <div className="App" id="quote-box">
        <h1>Quote Generator</h1>
        <button onClick={this.newQuoteHandler} id="new-quote">
          New Quote
        </button>
        <button onClick={this.apiQuoteHandler}>API Quote</button>
        <Quote quoteId={this.state.quoteId} />
      </div>
    );
  }
}

export default App;
