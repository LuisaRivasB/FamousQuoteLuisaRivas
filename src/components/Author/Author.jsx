import React from "react";
import "./Author.css";

const Author = ({ quote }) => {
  return (
    <>
      <div className="author_container">
        <p className="author">{quote.author}</p>
      </div>
    </>
  );
};

export default Author;
 