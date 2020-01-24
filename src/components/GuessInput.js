import React from "react";
import "./GuessInput.css";

export function GuessInput() {
  return (
    <div className="GuessInput">
      <input className="digitInput"></input>
      <input className="digitInput"></input>
      <input className="digitInput"></input>
      <input className="digitInput"></input>
      <button>Make Guess</button>
    </div>
  );
}
