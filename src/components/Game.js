import React, { Component } from "react";
import "./Game.css";
import GuessHistory from "./GuessHistory";
import { codeLength, allowedDigits } from "../evaluateGuesses";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: []
    };
  }

  allowedValues = (length, digits) => {
    let value = 0;
    for (let i = 0; i <= length - 1; i++) {
      value += digits * Math.pow(10, i);
    }
    return value;
  };

  handleClick = e => {
    e.preventDefault();
    const guess = document.getElementById("input").value;
    const allowedValue = this.allowedValues(codeLength, allowedDigits);
    if (guess <= allowedValue) {
      const guessArray = Array.from(guess).map(el => parseInt(el));
      console.log(guessArray);
      this.setState({
        guesses: [...this.state.guesses, guessArray]
      });
      console.log(this.state);
      let form = document.getElementById("input-form");
      form.reset();
    } else {
      window.alert("Please enter a value between 0000 and " + allowedValue);
    }
  };
  render() {
    console.log(this.allowedValues(codeLength, allowedDigits));
    return (
      <div>
        <div className="GuessInput">
          <form id="input-form" autoComplete="off">
            <input
              id="input"
              type="text"
              className="digit-input"
              required
            ></input>

            <br></br>
            <button onClick={this.handleClick} className="guess-button">
              Make Guess
            </button>
          </form>
        </div>
        <GuessHistory guesses={this.state.guesses} />
      </div>
    );
  }
}

export default Game;
