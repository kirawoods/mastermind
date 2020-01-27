import React, { Component } from "react";
import "./Game.css";
import GuessHistory from "./GuessHistory";

import { codeLength, allowedDigits } from "../evaluateGuesses";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuessArray: [],
      guesses: [],
      isGameOver: false,
      code: [1, 2, 3, 4]
    };
  }

  handleInputButtonClick = value => {
    if (this.state.newGuessArray.length < codeLength) {
      this.setState({
        newGuessArray: [...this.state.newGuessArray, value],
        guesses: [],
        isGameOver: false
      });
      console.log(this.state.newGuessArray);
    }
  };

  handleSubmitButtonClick = () => {
    if (this.state.newGuessArray.length === codeLength) {
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
        <GuessHistory guesses={this.state.guesses} code={this.state.code} />
      </div>
    );
  }
}

export default Game;
