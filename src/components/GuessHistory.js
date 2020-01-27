import React, { Component } from "react";
import "./GuessHistory.css";
import uniqueID from "uniqid";
import arrayEqual from "array-equal";
import { evaluateGuess, guessesAllowed } from "../evaluateGuesses";

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
}

export default GuessHistory;
