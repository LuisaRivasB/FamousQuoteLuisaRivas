import React from 'react'
import NextQuote from "../NextQuote/NextQuote";
import './Quote.css'

const Quote = ({ quote, handleClick }) => {
  return (
    <>
      <NextQuote handleClick={handleClick} />
      <div className="quote_container" >
        <h1 className="quote">{quote.quote}</h1>
        <div className='detail'></div>
      </div>
    </>
  );
};

export default Quote
