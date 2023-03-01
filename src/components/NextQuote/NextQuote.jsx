import React from 'react'
import './NextQuote.css'

const NextQuote = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="NextQuote">
      Next Quote
    </button>
  );
}

export default NextQuote
