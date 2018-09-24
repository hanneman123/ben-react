import React, { Component } from "react";

import "./App.css";

import Person from "./Person/Person.jsx";
import HeaderComponent from "./Header/Header.jsx";
import MainButton from "./Buttons/MainButton.jsx";

class App extends Component {
  state = {
    persons: [
      { name: "Ben", age: 33 },
      { name: "Bdahl", age: 34 },
      { name: "Bun", age: 35 }
    ],
    isListShown: true
  };

  showListHandler = () => {
    this.setState({ isListShown: true });
  };

  hideListHandler = () => {
    this.setState({ isListShown: false });
  };

  render() {
    return (
      <div className="App">
        <div className="HeaderContainer">
          <HeaderComponent
            toggleListOnClick={
              this.state.isListShown
                ? this.hideListHandler
                : this.showListHandler
            }
            toggleButtonName={
              this.state.isListShown ? "Hide List" : "Show List"
            }
          />
        </div>

        <div className="PersonsContainer">
          <h1>Good Boy!!</h1>
          <p>It's going gud</p>

          <MainButton
            buttonName="Switch Name New"
            click={this.switchNameHandler.bind(this, "Button Bind")}
          />

          <div
            className={
              "PersonsList " + (this.state.isListShown ? "visible" : "hidden")
            }
          >
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Ben Bind")}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        </div>
        <div className="BurgerContainer" />
      </div>
    );
  }
}

export default App;
