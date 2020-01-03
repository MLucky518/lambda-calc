import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => { // button container
  const [number] = useState(numbers);

  return (
    <div className = "numbers">
      
      {number.map((num,index) =>{ //need the index to assign a key to each value
        return <NumberButton key= {index} number = {num}/> // prop is passed to the child
      })}
    </div>
  );
};

export default Numbers;
