import React from "react";


const NumberButton = (props) => { // individual buttons
  console.log(props); // uses the passed prop from numbers.js below
  return (

<button className = "numButtons" >{props.number}</button>  

    
  );
};

export default NumberButton;