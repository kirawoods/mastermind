import React from "react";
import "./GuessInput.css";

export function GuessInput() {
  return (
    <div className="GuessInput">
      <input className="digit-input"></input>
      <input className="digit-input"></input>
      <input className="digit-input"></input>
      <input className="digit-input"></input>
      <br></br>
      <button className="guess-button">Make Guess</button>
    </div>
  );
}
