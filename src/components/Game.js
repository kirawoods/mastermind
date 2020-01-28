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
      hintNumber: 0,
      hints: []
    };

    document.addEventListener("keypress", e => {
      let keyValue = parseInt(String.fromCharCode(e.keyCode));

      if (
        this.state.newGuessArray.length <= this.props.codeLength - 1 &&
        keyValue >= 0 &&
        keyValue <= allowedDigits
      ) {
        this.setState({
          newGuessArray: [...this.state.newGuessArray, keyValue]
        });
      } else if (e.keyCode === 13) {
        e.preventDefault();
        if (this.state.newGuessArray.length === this.props.codeLength) {
          this.setState({
            guesses: [...this.state.guesses, this.state.newGuessArray],
            newGuessArray: []
          });
        }
      } else if (String.fromCharCode(e.keyCode).toLowerCase() === "c") {
        this.setState({ newGuessArray: [] });
        e.preventDefault();
      }
    });
  }

  componentDidMount() {
    getRandomCode(this.props.codeLength).then(newCode =>
      this.setState({ code: newCode })
    );
  }

  handleInputButtonClick = value => {
    if (this.state.newGuessArray.length < this.props.codeLength) {
      this.setState({
        newGuessArray: [...this.state.newGuessArray, value]
      });
    }
  };

  handleSubmitButtonClick = () => {
    if (this.state.newGuessArray.length === this.props.codeLength) {
      this.setState({
        guesses: [...this.state.guesses, this.state.newGuessArray]
      });
      this.setState({
        newGuessArray: []
      });
    }
  };

  handleClear = () => {
    this.setState({
      newGuessArray: []
    });
  };

  handleHint = () => {
    if (this.state.hintNumber + 1 <= this.props.codeLength) {
      this.setState({
        hintNumber: this.state.hintNumber + 1
      });
      let number = this.state.hintNumber;
      let nth = ["first", "second", "third", "fourth", "fifth"];
      let hint =
        "The " +
        nth[this.state.hintNumber] +
        " number of the code is " +
        this.state.code[number];
      this.setState({
        hints: [...this.state.hints, hint]
      });
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
      return (
        <div className="Game">
          <ReactLoading
            className="loading"
            type="bubbles"
            color="black"
            height="20%"
            width="20%"
          />
        </div>
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
              <button className="hint-button" onClick={() => this.handleHint()}>
                Hint
              </button>
              <div>
                {this.state.hints.map(hint => (
                  <p>{hint}</p>
                ))}
              </div>
            </div>
            <GuessHistory
              guesses={this.state.guesses}
              code={this.state.code}
              codeLength={this.props.codeLength}
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
            <button className="hint-button" onClick={() => this.handleHint()}>
              Hint
            </button>
            <div>
              {this.state.hints.map(hint => (
                <p>{hint}</p>
              ))}
            </div>
          </div>
          <GuessHistory
            guesses={this.state.guesses}
            code={this.state.code}
            codeLength={this.props.codeLength}
          />
        </div>
      );
    }
  }
}

export default Game;
