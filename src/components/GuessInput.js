import React from "react";
import "./GuessInput.css";

export function GuessInput() {
  return (
    <div className="GuessInput">
      <input type="number" className="digit-input" required></input>
      <input type="number" className="digit-input" required></input>
      <input type="number" className="digit-input" required></input>
      <input type="number" className="digit-input" required></input>
      <br></br>
      <button className="guess-button">Make Guess</button>
    </div>
  );
}
