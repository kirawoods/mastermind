import React, { useState } from "react";
import "./GuessInput.css";

export function GuessInput() {
  let [guesses, setGuesses] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    const guess = document.getElementById("input").value;
    const guessArray = Array.from(guess).map(el => parseInt(el));
    console.log(guessArray);
    setGuesses(guesses => [...guesses, guessArray]);
    console.log(guesses);
    let form = document.getElementById("input-form");
    form.reset();
  };

  return (
    <div className="GuessInput">
      <form id="input-form" autoComplete="off">
        <input id="input" type="text" className="digit-input" required></input>

        <br></br>
        <button onClick={handleClick} className="guess-button">
          Make Guess
        </button>
      </form>
    </div>
  );
}

export default GuessInput;
