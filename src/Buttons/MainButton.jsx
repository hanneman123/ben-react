import React from "react";
import "./Buttons.css";

const MainButton = props => {
  return (
    <button className="MainButton" onClick={props.onClick}>
      {props.buttonName}
    </button>
  );
};

export default MainButton;
