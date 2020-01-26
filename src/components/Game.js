import React, { Component } from "react";
import "./Game.css";
import GuessHistory from "./GuessHistory";
import arrayEqual from "array-equal";
import { codeLength, allowedDigits, guessesAllowed } from "../evaluateGuesses";
import code from "../code";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      isGameOver: false
    };
  }

  allowedValues = (length, digits) => {
    let value = 0;
    for (let i = 0; i <= length - 1; i++) {
      value += digits * Math.pow(10, i);
    }
    return value;
  };

  isGameOver = (code, guessObject) => {
    if (
      arrayEqual(code, guessObject[guessObject.length - 1]) ||
      (guessObject[guessObject.length - 1] !== code &&
        guessObject.length >= guessesAllowed)
    ) {
      return true;
    }
  };

  handleClick = e => {
    e.preventDefault();
    const guess = document.getElementById("input").value;
    const allowedValue = this.allowedValues(codeLength, allowedDigits);
    if (guess <= allowedValue && guess.length === codeLength) {
      const guessArray = Array.from(guess).map(el => parseInt(el));

      this.setState({
        guesses: [...this.state.guesses, guessArray],
        isGameOver: false
      });

      let form = document.getElementById("input-form");
      form.reset();
    } else {
      window.alert(
        "Please enter a " +
          codeLength +
          " digit value between 0000 and " +
          allowedValue
      );
    }
  };
  render() {
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
            <button
              onClick={this.handleClick}
              className="guess-button"
              disabled={this.state.isGameOver}
            >
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
