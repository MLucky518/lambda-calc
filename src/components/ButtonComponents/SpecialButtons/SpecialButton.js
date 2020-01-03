import React from "react";

const SpecialButton = (props) => {
  return (
    <button className = "specButtons">
      {props.content}
    </button>
  );
};


export default SpecialButton;
