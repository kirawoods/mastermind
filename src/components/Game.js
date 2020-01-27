import React, { Component, useEffect } from "react";
import "./Game.css";
import arrayEqual from "array-equal";
import GuessHistory from "./GuessHistory";
import { guessesAllowed } from "../evaluateGuesses";
import { getRandomCode } from "../getRandomCode";
import { WinPage } from "./WinPage";
import { LosePage } from "./LosePage";

import { codeLength, allowedDigits } from "../evaluateGuesses";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuessArray: [],
      guesses: [],
      code: undefined
    };
  }

  componentWillMount() {
    getRandomCode().then(newCode => this.setState({ code: newCode }));
  }

  handleInputButtonClick = value => {
    if (this.state.newGuessArray.length < codeLength) {
      this.setState({
        newGuessArray: [...this.state.newGuessArray, value]
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
    if (this.state.code === undefined) {
      return <div className="Game"></div>;
    }
    if (this.state.guesses.length !== 0) {
      if (
        arrayEqual(
          this.state.code,
          this.state.guesses[this.state.guesses.length - 1]
        )
      ) {
        return <WinPage />;
      } else if (
        this.state.guesses[this.state.guesses.length - 1] !== this.state.code &&
        this.state.guesses.length >= guessesAllowed
      ) {
        return <LosePage />;
      } else {
        return (
          <div className="Game">
            <div className="guess-input">
              <div className="currentGuess">{this.state.newGuessArray}</div>
              <div className="input-buttons">
                {this.renderButtons(allowedDigits)}
              </div>
              <button
                className="guess-button"
                onClick={() => this.handleSubmitButtonClick()}
              >
                Make Guess
              </button>
            </div>
            <GuessHistory guesses={this.state.guesses} code={this.state.code} />
          </div>
        );
      }
    } else {
      return (
        <div className="Game">
          <div className="guess-input">
            <div className="currentGuess">{this.state.newGuessArray}</div>
            <div className="input-buttons">
              {this.renderButtons(allowedDigits)}
            </div>
            <button
              className="guess-button"
              onClick={() => this.handleSubmitButtonClick()}
            >
              Make Guess
            </button>
          </div>
          <GuessHistory guesses={this.state.guesses} code={this.state.code} />
        </div>
      );
    }
  }
}

export default Game;
