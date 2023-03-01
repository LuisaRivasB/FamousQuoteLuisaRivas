import React, { useState } from "react";
import Quote from "./components/Quote/Quote";
import Author from "./components/Author/Author";
import quotes from "./assets/quotes.json";
import imgArr from "../public/img/image.json";
import { ramdomElement } from "./utils/ramdomElement";
import "./App.css";
 
function App() {
  /*Frases */
  const [quoteRamdom, setQuoteRamdom] = useState(
    ramdomElement(0, quotes.length - 1)
  );
  /*Imagenes y Estilos */
  const [imgRamdom, setImgRamdom] = useState(ramdomElement(0, imgArr.length - 1));

  const handleClick = () => {
    setImgRamdom(ramdomElement(0, imgArr.length - 1));
    setQuoteRamdom(ramdomElement(0, quotes.length - 1));
  };
  const imgStyle = {
    backgroundImage: imgArr[imgRamdom].img,
  };


  return (
    <section className="app" style={imgStyle}>
      <h1 className="title">Famous <br />Quotes</h1>
      <Quote
        quote={quotes[quoteRamdom]}
        handleClick={handleClick}
      />
      <Author
        quote={quotes[quoteRamdom]}
      />
    </section>
  );
}
export default App;
