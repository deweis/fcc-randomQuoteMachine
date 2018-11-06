import React from 'react';

const quote = props => {
  return (
    <div>
      <blockquote>
        {/* {quotes[randomId].quote} */}
        {props.quote}
        <footer>– {props.author}</footer>
      </blockquote>
    </div>
  );
};

export default quote;
