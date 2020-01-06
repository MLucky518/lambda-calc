import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";


const Numbers = () => { // button container
  const [number] = useState(numbers);
  console.log(number);

  
const handleClicker= (e)=>{
  let string = "";
  string = e.target.value;
  console.log(string);
}
 

  return (
    <div className = "numbers">
      
      {number.map((num,index) =>{ //need the index to assign a key to each value
        return <NumberButton  value = {num} key= {index} number = {num}/> // prop is passed to the child
      })}
    </div>
  );
};

export default Numbers;
