import React from "react";


const NumberButton = (props) => { // individual buttons

  const handleClicker= (e)=>{
    let string = "";
    string = e.target.value;
    console.log(string);
    return string;
  }
  
  return (

<button  onClick = {handleClicker} value = {props.value} className = "numButtons" >{props.number}</button>  

    
  );
};

export default NumberButton;