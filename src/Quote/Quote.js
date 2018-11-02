import React from 'react';

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

const randomId = Math.floor(Math.random() * 3);

const quote = () => {
  return (
    <div>
      <blockquote>
        {quotes[randomId].quote}
        <footer>– {quotes[randomId].author}</footer>
      </blockquote>
    </div>
  );
};

export default quote;
