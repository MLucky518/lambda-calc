import React,{ useState }from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
 const[special] = useState(specials);

  return (
    <div className = "spec">
      {
        special.map((spec,index) =>{
          return <SpecialButton key ={index} content = {spec}/>
        })
      }
    </div>
  );
};

export default Specials;

