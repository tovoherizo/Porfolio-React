import React from 'react'
import { useState } from "react";
import './Increment.css'

function Increment() {
    let [afficherNum, setafficherNum] = useState(0);
  let incrementer = () => {
    if (afficherNum < 20) {
      setafficherNum(Number(afficherNum) + 1);
    }
  };
  let decrementer = () => {
    if (afficherNum > 0)
    {
      setafficherNum(afficherNum - 1);
      }
  }
  let handleChange = (e) => {
    setafficherNum(e.target.value);
  }
  return (
    <>
      <div className="compteur">
        <button className="boutton" type="bouton" onClick={decrementer}>
          -
        </button>
        <input
          className="output"
          type="text "
          value={afficherNum}
          onChange={handleChange}
        />
        <button className="boutton" type="bouton" onClick={incrementer}>
          +
        </button>
      </div>
    </>
  );
}

export default Increment