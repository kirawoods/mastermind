import React, { Component } from "react";
import "./GuessHistory.css";
import uniqueID from "uniqid";
import axios from "axios";
import { evaluateGuess, guessesAllowed } from "../evaluateGuesses";

let code = [];
axios
  .get(
    `https://www.random.org/integers/?num=4&min=0&max=7&col=4&base=10&format=plain&rnd=new`
  )
  .then(response => {
    const codeInfo = response.data;
    code = codeInfo
      .replace(/\s/g, "")
      .split("")
      .map(el => parseInt(el));
  })
  .catch(error => {
    console.log(error);
  });

const displayGuess = guess => {
  return (
    <div key={uniqueID()} className="each-guess">
      <div className="guess">{guess.join("")}</div>
      <div className="feedback">{evaluateGuess(code, guess)}</div>
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

export default GuessHistory;
