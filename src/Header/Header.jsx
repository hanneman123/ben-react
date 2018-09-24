import React from "react";
import "./Header.css";
import MainButton from "../Buttons/MainButton.jsx";

const HeaderComponent = props => {
  return (
    <div className="HeaderComponent">
      <MainButton
        buttonName={props.toggleButtonName}
        onClick={props.toggleListOnClick}
      />
    </div>
  );
};

export default HeaderComponent;
