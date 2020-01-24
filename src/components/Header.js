import React from "react";
import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <h1 class="header-text">Mastermind</h1>
      <p class="rules">
        Rules: The computer has chosen a secret 4 digit code that you must
        guess. Each digit of the code will be between 0 and 7. You are allowed
        ten guesses. For each guess, you will be told how many digits are:
        <ul>
          <li>correct and in the correct position</li>
          <li>correct and in the incorrect position</li>
        </ul>
      </p>
    </div>
  );
}
