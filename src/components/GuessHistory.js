import React, { Component } from "react";
import "./GuessHistory.css";
import uniqueID from "uniqid";
import arrayEqual from "array-equal";
import { evaluateGuess, guessesAllowed } from "../evaluateGuesses";
import { WinPage } from "./WinPage";
import { LosePage } from "./LosePage";

const displayGuess = (code, guess) => {
  return (
    <div key={uniqueID()} className="each-guess">
      <div className="guess">{guess.join("")}</div>
      <div className="feedback">{evaluateGuess(code, guess)}</div>
    </div>
  );
};

class GuessHistory extends Component {
  render() {
    console.log(this.props.guesses);
    console.log(this.props.code);

    if (this.props.guesses.length !== 0) {
      if (
        arrayEqual(
          this.props.code,
          this.props.guesses[this.props.guesses.length - 1]
        )
      ) {
        return <WinPage />;
      } else if (
        this.props.guesses[this.props.guesses.length - 1] !== this.props.code &&
        this.props.guesses.length >= guessesAllowed
      ) {
        return <LosePage />;
      } else {
        return (
          <div className="GuessHistory">
            <p className="guesses-remaining">
              Guesses Remaining: {guessesAllowed - this.props.guesses.length}
            </p>
            <div className="guess-history-container">
              <div className="guess-header">
                <div className="guess">Guess</div>
                <div className="feedback">Feedback</div>
              </div>
              {this.props.guesses.map(guess =>
                displayGuess(this.props.code, guess)
              )}
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="GuessHistory">
          <p className="guesses-remaining">
            Guesses Remaining: {guessesAllowed - this.props.guesses.length}
          </p>
          <div className="guess-history-container">
            <div className="guess-header">
              <div className="guess">Guess</div>
              <div className="feedback">Feedback</div>
            </div>
            {this.props.guesses.map(guess => displayGuess(guess))}
          </div>
        </div>
      );
    }
  }
}

export default GuessHistory;
