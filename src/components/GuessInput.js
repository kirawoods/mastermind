import React from "react";
import "./GuessInput.css";
import { codeLength, allowedDigits } from "../evaluateGuesses";

export function GuessInput() {
  return (
    <div className="GuessInput">
      <form autoComplete="off">
        <input
          id="0"
          type="text"
          className="digit-input"
          pattern={"[0-" + allowedDigits + "]{" + codeLength + "}"}
          required
        ></input>

        <br></br>
        <button type="submit" className="guess-button">
          Make Guess
        </button>
      </form>
    </div>
  );
}
