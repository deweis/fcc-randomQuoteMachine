import React, { Component } from 'react';
import './App.css';
import Quote from './Quote/Quote';

const quotes = [
  {
    author: 'Jonathan Swift',
    quote: 'May you live every day of your life.'
  },
  {
    author: 'George Bernard Shaw',
    quote: "Life isn't about finding yourself. Life is about creating yourself."
  },
  {
    author: 'Ernest Hemingway',
    quote:
      'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.'
  }
];

let theId = Math.floor(Math.random() * 3);
class App extends Component {
  newQuoteHandler = () => {
    console.log('clicked');
    theId = Math.floor(Math.random() * 3);
  };

  render() {
    return (
      <div className="App">
        <h1>Quote Generator</h1>
        <button onClick={this.newQuoteHandler}>New Quote</button>
        <Quote quote={quotes[theId].quote} author={quotes[theId].author} />
      </div>
    );
  }
}

export default App;
