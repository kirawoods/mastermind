import React, { Component } from "react";
import "./Game.css";
import arrayEqual from "array-equal";
import ReactLoading from "react-loading";
import GuessHistory from "./GuessHistory";
import { guessesAllowed, allowedDigits } from "../evaluateGuesses";
import { getRandomCode } from "../getRandomCode";
import { WinPage } from "./WinPage";
import { LosePage } from "./LosePage";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGuessArray: [],
      guesses: [],
      code: undefined,
      codeLength: 5
    };
    document.addEventListener("keypress", e => {
      let keyValue = parseInt(String.fromCharCode(e.keyCode));

      console.log(e.keyCode);
      if (
        this.state.newGuessArray.length <= this.state.codeLength - 1 &&
        keyValue >= 0 &&
        keyValue <= allowedDigits
      ) {
        this.setState({
          newGuessArray: [...this.state.newGuessArray, keyValue]
        });
      } else if (
        e.keyCode === 13 &&
        this.state.newGuessArray.length === this.state.codeLength
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
    getRandomCode(this.state.codeLength).then(newCode =>
      this.setState({ code: newCode })
    );
  }

  handleInputButtonClick = value => {
    if (this.state.newGuessArray.length < this.state.codeLength) {
      this.setState({
        newGuessArray: [...this.state.newGuessArray, value]
      });
      console.log(this.state.newGuessArray);
    }
  };

  handleSubmitButtonClick = () => {
    if (this.state.newGuessArray.length === this.state.codeLength) {
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
      return (
        <ReactLoading
          className="loading"
          type="bubbles"
          color="black"
          height="20%"
          width="20%"
        />
      );
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
        return <LosePage code={this.state.code} />;
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
            <GuessHistory
              guesses={this.state.guesses}
              code={this.state.code}
              codeLength={this.state.codeLength}
            />
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
