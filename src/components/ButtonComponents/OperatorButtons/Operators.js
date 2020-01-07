import React, { useState } from "react";
import {operators} from "../../../data"; //delete this
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  
  const[operator] = useState(operators);
  
  return (
    <div className = "operators">
     {operator.map((oper,index) =>{
return <OperatorButton key = {index} operator = {oper.value}/>
     })}
    </div>
  );
};

export default Operators
