import React from "react";
import "./GuessHistory.css";
import { guesses } from "./GuessInput";
import { evaluateGuesses } from "../evaluateGuesses";

const displayGuess = guess => {
  return (
    <div className="each-guess">
      <div className="guess">{guess}</div>
    </div>
  );
};

export function GuessHistory() {
  return (
    <div className="GuessHistory">
      <p className="guesses-remaining">Guesses Remaining: 10</p>
      <div className="guess-history-container">
        <div className="guess-header">
          <div className="guess">Guess</div>
          <div className="feedback">Feedback</div>
        </div>
        {guesses.map(guess => (
          <div>{displayGuess(guess)} </div>
        ))}
      </div>
    </div>
  );
}
