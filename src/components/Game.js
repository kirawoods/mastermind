import React, { Component } from "react";
import "./Game.css";
import arrayEqual from "array-equal";
import GuessHistory from "./GuessHistory";
import { guessesAllowed, codeLength, allowedDigits } from "../evaluateGuesses";
import { getRandomCode } from "../getRandomCode";
import { WinPage } from "./WinPage";
import { LosePage } from "./LosePage";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGuessArray: [],
      guesses: [],
      code: undefined
    };
    document.addEventListener("keypress", e => {
      let keyValue = parseInt(String.fromCharCode(e.keyCode));

      console.log(e.keyCode);
      if (
        this.state.newGuessArray.length <= codeLength - 1 &&
        keyValue >= 0 &&
        keyValue <= allowedDigits
      ) {
        this.setState({
          newGuessArray: [...this.state.newGuessArray, keyValue]
        });
      } else if (
        e.keyCode === 13 &&
        this.state.newGuessArray.length === codeLength
      ) {
        this.setState({
          guesses: [...this.state.guesses, this.state.newGuessArray]
        });
        this.setState({
          newGuessArray: []
        });
      } else if (String.fromCharCode(e.keyCode).toLowerCase() === "c") {
        this.setState({ newGuessArray: [] });
        e.preventDefault();
      }
      console.log(this.state.guesses);
      console.log(this.state.newGuessArray);
    });
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

  handleClear = () => {
    this.setState({
      newGuessArray: []
    });
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
              <button
                className="clear-button"
                onClick={() => this.handleClear()}
              >
                Clear (C)
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
            <button className="clear-button" onClick={() => this.handleClear()}>
              Clear (C)
            </button>
          </div>
          <GuessHistory guesses={this.state.guesses} code={this.state.code} />
        </div>
      );
    }
  }
}

export default Game;
