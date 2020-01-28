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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="GuessHistory">
        <div className="guess-history-container">
          <div className="history-label-text">
            Guesses Remaining: {guessesAllowed - this.props.guesses.length}
          </div>
          <div className="history-label-text">
            Code Length: {this.props.codeLength}
          </div>
          <div className="guess-header">
            <div className="history-label-text">Guess</div>
            <div className="history-label-text">Feedback</div>
          </div>
          <div className="guess-and-feedback-container">
            {this.props.guesses.map(guess =>
              displayGuess(this.props.code, guess, this.props.codeLength)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GuessHistory;
