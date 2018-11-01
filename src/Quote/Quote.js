import React from 'react';

const quote = () => {
  return (
    <div>
      <p>Quote Nr. {Math.floor(Math.random() * 100)}:</p>
      <blockquote>
        "May you live every day of your life!"
        <footer>– Jonathan Swift</footer>
      </blockquote>
    </div>
  );
};

export default quote;
