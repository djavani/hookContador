import React, { useState, useEffect } from "react";

import "./Ifoodcounter.css";

export default function Ifoodcounter() {
    
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState ("counter-button-minus-active")

  useEffect(() => {    
    
    if( value < 1){
        alert("Carrinho zerado vei") ;  
    }     
    document.getElementById("moeda").innerHTML = 2.0 * value;
  }, [value]);

  function handleAumentar() {
    setValue(value + 1);
    setButtonStyle("counter-button-minus-active")
  }

  function handleDiminuir() {
    
     if(value <= 1){
         //mudar o css
         setButtonStyle("counter-button-minus-desactive")
     }

      if(value > 0) {
          setValue(value - 1);
      }
  }

  return (
    <div className="counter-wrapper">
      <button 
        className={buttonStyle} 
        onClick={handleDiminuir}
        >
        -
      </button>
      <p>{value}</p>
      <button 
        className="counter-button-plus-active" 
        onClick={handleAumentar}
       >
        +
      </button>
      <button id="moeda">12,00</button>
    </div>
  );
}
