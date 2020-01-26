import React, { Component } from "react";
import "./Game.css";
import GuessHistory from "./GuessHistory";
import arrayEqual from "array-equal";
import axios from "axios";
import uniqueID from "uniqid";
import { WinPage } from "./WinPage";
import { LosePage } from "./LosePage";
import {
  codeLength,
  allowedDigits,
  evaluateGuess,
  guessesAllowed
} from "../evaluateGuesses";

let code = [];
axios
  .get(
    `https://www.random.org/integers/?num=4&min=0&max=7&col=4&base=10&format=plain&rnd=new`
  )
  .then(response => {
    const codeInfo = response.data;
    code = codeInfo
      .replace(/\s/g, "")
      .split("")
      .map(el => parseInt(el));
    console.log(code);
  })
  .catch(error => {
    console.log(error);
  });

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: []
    };
  }

  displayGuess = guess => {
    return (
      <div key={uniqueID()} className="each-guess">
        <div className="guess">{guess.join("")}</div>
        <div className="feedback">{evaluateGuess(code, guess)}</div>
      </div>
    );
  };

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
    if (guess <= allowedValue && guess.length === codeLength) {
      const guessArray = Array.from(guess).map(el => parseInt(el));

      this.setState({
        guesses: [...this.state.guesses, guessArray]
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
    if (this.guesses.length !== 0) {
      if (arrayEqual(code, this.guesses[this.guesses.length - 1])) {
        return <WinPage />;
      } else if (
        this.guesses[this.guesses.length - 1] !== code &&
        this.guesses.length >= guessesAllowed
      ) {
        return <LosePage />;
      } else {
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
            <GuessHistory
              guesses={this.state.guesses}
              displayGuess={this.displayGuess}
            />
          </div>
        );
      }
    }
  }
}
export default Game;
