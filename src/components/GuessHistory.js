import React, { Component } from "react";
import "./GuessHistory.css";

import arrayEqual from "array-equal";
import { evaluateGuess, guessesAllowed } from "../evaluateGuesses";
import { WinPage } from "./WinPage";
import { LosePage } from "./LosePage";

class GuessHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          {this.props.guesses.map(guess => this.props.displayGuess(guess))}
        </div>
      </div>
    );
  }
}

export default GuessHistory;
