import React, { Component } from "react";
import "./SetGameMode.css";
import Logo from "./MastermindLogo.PNG";

class SetGameMode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeLength: undefined
    };
  }
  render() {
    return (
      <div className="SetGameMode">
        <img className="set-game-mode-header" src={Logo}></img>
        <div className="difficulty-buttons">
          <button
            className="difficulty-button easy"
            onClick={() => {
              this.setState({ codeLength: 3 });
              console.log(this.state.codeLength);
            }}
          >
            Easy
          </button>
          <button
            className="difficulty-button medium"
            onClick={() => {
              this.setState({ codeLength: 4 });
              console.log(this.state.codeLength);
            }}
          >
            Medium
          </button>
          <button
            className="difficulty-button expert"
            onClick={() => {
              this.setState({ codeLength: 5 });
              console.log(this.state.codeLength);
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
