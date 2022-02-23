import React, { useState } from "react";
import "./App.css";
import atanagildo from "./reyes/rey_atanagildo.png";
import ervigio from "./reyes/rey_ervigio.png";
import ataulfo from "./reyes/rey_ataulfo.png";
import leogivildo from "./reyes/rey_leogivildo.png";
import recesvinto from "./reyes/rey_recesvinto.png";
import sisebuto from "./reyes/rey_sisebuto.png";


const NewComponent = () => {


  const [total, setTotal] = useState(0)
  const calculate = () => {
    setTotal(128 + total)
  }

  const kings = [
    {
      name: "Atanagildo",
      color: "darkolivegreen",
      price: 178,
    },
    {
      name: "Ervigio",
      color: "crimson",
      price: 169,
    },
    {
      name: "Ataúlfo",
      color: "peru",
      price: 81,
    },
    {
      name: "Leogivildo",
      color: "darkmagenta",
      price: 126,
    },
    {
      name: "Recesvinto",
      color: "royalblue",
      price: 141,
    },
    {
      name: "Sisebuto",
      color: "teal",
      price: 69,
    },
  ];
  return (
    <>
      <h2>Total to pay: ${total}</h2>
      <div className="container">
        <div className="card atanagildo">
          <h2>King {kings[0].name}</h2>
          <img src={atanagildo} alt="" />
          <p>Price: ${kings[0].price}</p>
          <button onClick={calculate}>Buy</button>
        </div>
        <div className="card ervigio">
          <h2>King {kings[1].name}</h2>
          <img src={ervigio} alt="" />
          <p>Price: ${kings[1].price}</p>
          <button onClick={calculate}>Buy</button>
        </div>
        <div className="card ataulfo">
          <h2>King {kings[2].name}</h2>
          <img src={ataulfo} alt="" />
          <p>Price: ${kings[2].price}</p>
          <button onClick={calculate}>Buy</button>
        </div>
        <div className="card leogivildo">
          <h2>King {kings[3].name}</h2>
          <img src={leogivildo} alt="" />
          <p>Price: ${kings[3].price}</p>
          <button onClick={calculate}>Buy</button>
        </div>
        <div className="card recesvinto">
          <h2>King {kings[4].name}</h2>
          <img src={recesvinto} alt="" />
          <p>Price: ${kings[4].price}</p>
          <button onClick={calculate}>Buy</button>
        </div>
        <div className="card sisebuto">
          <h2>King {kings[5].name}</h2>
          <img src={sisebuto} alt="" />
          <p>Price: ${kings[5].price}</p>
          <button onClick={() => { alert('Hola') }}>Buy</button>
        </div>
      </div>
    </>
  );
};

export default NewComponent;
