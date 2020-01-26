import React, { Component } from "react";
import "./GuessHistory.css";

import arrayEqual from "array-equal";
import { evaluateGuess, guessesAllowed } from "../evaluateGuesses";

class GuessHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
<<<<<<< HEAD
    return (
      <div className="GuessHistory">
        <p className="guesses-remaining">
          Guesses Remaining: {guessesAllowed - this.props.guesses.length}
        </p>
        <div className="guess-history-container">
          <div className="guess-header">
            <div className="guess">Guess</div>
            <div className="feedback">Feedback</div>
=======
    console.log(this.props.guesses);
    if (this.props.guesses.length !== 0) {
      if (arrayEqual(code, this.props.guesses[this.props.guesses.length - 1])) {
        return "You Won!";
      } else if (
        this.props.guesses[this.props.guesses.length - 1] !== code &&
        this.props.guesses.length >= guessesAllowed
      ) {
        return "You Lost :(";
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
>>>>>>> parent of 8b261fe... add win page and lose page components
          </div>
          {this.props.guesses.map(guess => this.props.displayGuess(guess))}
        </div>
      </div>
    );
  }
}

export default GuessHistory;
