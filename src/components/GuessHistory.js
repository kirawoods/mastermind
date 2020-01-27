import React, { Component } from "react";
import "./GuessHistory.css";
import uniqueID from "uniqid";
import { evaluateGuess, guessesAllowed } from "../evaluateGuesses";

const displayGuess = (code, guess, codeLength) => {
  return (
    <div key={uniqueID()} className="each-guess">
      <div className="guess">{guess.join("")}</div>
      <div className="feedback">{evaluateGuess(code, guess, codeLength)}</div>
    </div>
  );
};

class GuessHistory extends Component {
  render() {
    console.log(this.props.guesses);
    console.log(this.props.code);

    return (
      <div className="GuessHistory">
        <div className="guess-history-container">
          <div className="history-label-text">
            Guesses Remaining: {guessesAllowed - this.props.guesses.length}
          </div>
          <div className="guess-header">
            <div className="history-label-text">Guess</div>
            <div className="history-label-text">Feedback</div>
          </div>
          {this.props.guesses.map(guess =>
            displayGuess(this.props.code, guess, this.props.codeLength)
          )}
        </div>
      </div>
    );
  }
}

export default GuessHistory;
