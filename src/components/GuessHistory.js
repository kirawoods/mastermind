import React, { Component } from "react";
import "./GuessHistory.css";
import uniqueID from "uniqid";

import { evaluateGuess } from "../evaluateGuesses";

const displayGuess = guess => {
  console.log(guess);
  return (
    <div key={uniqueID()} className="each-guess">
      <div className="guess">{guess.join("")}</div>
      <div className="feedback">{evaluateGuess([0, 2, 2, 3], guess)}</div>
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
        <p className="guesses-remaining">Guesses Remaining: 10</p>
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

export default GuessHistory;
