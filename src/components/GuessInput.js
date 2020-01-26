import React, { Component } from "react";
import "./GuessInput.css";
import { codeLength, allowedDigits } from "../evaluateGuesses";

// const handleClick = e => {
//   e.preventDefault();
//   let guess = document.getElementById("input").value;
//   let guessArray = Array.from(guess).map(el => parseInt(el));
//   guesses.push(guessArray);
//   console.log(guesses);
//   let form = document.getElementById("input-form");
//   form.reset();
// };

class GuessInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="GuessInput">
        <form id="input-form" autoComplete="off">
          <input
            id="input"
            type="text"
            className="digit-input"
            pattern={"[0-" + allowedDigits + "]{" + codeLength + "}"}
            required
          ></input>

          <br></br>
          <button /*onClick={handleClick}*/ className="guess-button">
            Make Guess
          </button>
        </form>
      </div>
    );
  }
}

export default GuessInput;
