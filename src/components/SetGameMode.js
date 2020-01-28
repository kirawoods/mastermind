import React, { Component } from "react";
import "./SetGameMode.css";
import Logo from "./MastermindLogo.PNG";

class SetGameMode extends Component {
  render() {
    return (
      <div className="SetGameMode">
        <img className="set-game-mode-header" src={Logo}></img>
        <div className="difficulty-buttons">
          <button
            className="difficulty-button easy"
            onClick={() => {
              this.props.onChange(3);
            }}
          >
            Easy
          </button>
          <button
            className="difficulty-button medium"
            onClick={() => {
              this.props.onChange(4);
            }}
          >
            Medium
          </button>
          <button
            className="difficulty-button expert"
            onClick={() => {
              this.props.onChange(5);
            }}
          >
            Expert
          </button>
        </div>
      </div>
    );
  }
}

export default SetGameMode;
