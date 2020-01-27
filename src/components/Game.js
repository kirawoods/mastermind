import React, { Component } from "react";
import "./Game.css";
import GuessHistory from "./GuessHistory";

import arrayEqual from "array-equal";
import { codeLength, allowedDigits, guessesAllowed } from "../evaluateGuesses";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuessArray: [],
      guesses: [],
      isGameOver: false
    };
  }

  handleInputButtonClick = value => {
    if (this.state.newGuessArray.length < 4) {
      this.setState({
        newGuessArray: [...this.state.newGuessArray, value],
        guesses: [],
        isGameOver: false
      });
      console.log(this.state.newGuessArray);
    }
  };

  handleSubmitButtonClick = () => {
    if (this.state.newGuessArray.length === 4) {
      this.setState({
        guesses: [...this.state.guesses, this.state.newGuessArray]
      });
      this.setState({
        newGuessArray: []
      });
      console.log(this.state.guesses);
    }
  };

  renderButtons = digits => {
    const ButtonValueArray = [];
    for (let i = 0; i <= digits; i++) {
      ButtonValueArray.push(i);
    }
    const buttons = ButtonValueArray.map(value => (
      <button
        className="input-button"
        key={value}
        onClick={() => this.handleInputButtonClick(value)}
      >
        {value}
      </button>
    ));
    return buttons;
  };

  render() {
    return (
      <div>
        <div className="currentGuess">{this.state.newGuessArray}</div>
        <div className="input-buttons">{this.renderButtons(allowedDigits)}</div>
        <button
          className="guess-button"
          onClick={() => this.handleSubmitButtonClick()}
        >
          Make Guess
        </button>
        <GuessHistory guesses={this.state.guesses} />
      </div>
    );
  }

  // allowedValues = (length, digits) => {
  //   let value = 0;
  //   for (let i = 0; i <= length - 1; i++) {
  //     value += digits * Math.pow(10, i);
  //   }
  //   return value;
  // };

  // isGameOver = (code, guessObject) => {
  //   if (
  //     arrayEqual(code, guessObject[guessObject.length - 1]) ||
  //     (guessObject[guessObject.length - 1] !== code &&
  //       guessObject.length >= guessesAllowed)
  //   ) {
  //     return true;
  //   }
  // };

  // handleClick = e => {
  //   e.preventDefault();
  //   const guess = document.getElementById("input").value;
  //   const allowedValue = this.allowedValues(codeLength, allowedDigits);
  //   if (guess <= allowedValue && guess.length === codeLength) {
  //     const guessArray = Array.from(guess).map(el => parseInt(el));

  //     this.setState({
  //       guesses: [...this.state.guesses, guessArray],
  //       isGameOver: false
  //     });

  //     let form = document.getElementById("input-form");
  //     form.reset();
  //   } else {
  //     window.alert(
  //       "Please enter a " +
  //         codeLength +
  //         " digit value between 0000 and " +
  //         allowedValue
  //     );
  //   }
  // };
  // render() {
  //   return (
  //     <div>
  //       <div className="GuessInput">
  //         <form id="input-form" autoComplete="off">
  //           <input
  //             id="input"
  //             type="text"
  //             className="digit-input"
  //             required
  //           ></input>

  //           <br></br>
  //           <button
  //             onClick={this.handleClick}
  //             className="guess-button"
  //             disabled={this.state.isGameOver}
  //           >
  //             Make Guess
  //           </button>
  //         </form>
  //       </div>
  //       <GuessHistory guesses={this.state.guesses} />
  //     </div>
  //   );
  // }
}

export default Game;
