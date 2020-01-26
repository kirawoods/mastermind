import React from "react";
import "./GuessHistory.css";
import { guesses } from "./GuessInput";
import { evaluateGuess } from "../evaluateGuesses";

const displayGuess = guess => {
  console.log(guess);
  return (
    <div key={Date.now()} className="each-guess">
      <div className="guess">{guess.join("")}</div>
      <div className="feedback">{evaluateGuess([0, 2, 2, 3], guess)}</div>
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
        {guesses.map(guess => displayGuess(guess))}
      </div>
    </div>
  );
}
