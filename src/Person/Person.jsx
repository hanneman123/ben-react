import React from "react";
import "./Person.css";
import MainButton from "../Buttons/MainButton";

const person = props => {
  return (
    <div className="Person">
      <div className="DataContainer">
        <p onClick={props.click}>
          I'm {props.name} and I am a {props.age} old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
      <div className="ButtonContainer" />
      <MainButton buttonName="Remove this card" />
    </div>
  );
};

export default person;
