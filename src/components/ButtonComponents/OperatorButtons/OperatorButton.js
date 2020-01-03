import React from "react";
import {operators} from "../../../data";




const OperatorButton = (props) => {
  console.log(operators);
  return (
  <button  className = "opButtons">{props.operator}</button>
  );
};

export default OperatorButton;
