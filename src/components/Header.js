import React from "react";
import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <h1 className="header-text">Mastermind</h1>
      <div className="rules">
        <p>
          Rules: The computer has chosen a secret 4 digit code that you must
          guess. Each digit of the code will be between 0 and 7. You are allowed
          ten guesses. For each guess, you will be told:
        </p>
        <ul className="rules-bullet-list">
          <li className="rules-bullet">
            how many digits are correct and in the correct position (denoted by
            an X)
          </li>
          <li className="rules-bullet">
            how many digits are correct and in the incorrect position (denoted
            by an O)
          </li>
          <li className="rules-bullet">
            how many digits are incorrect (denoted by an -)
          </li>
        </ul>
      </div>
    </div>
  );
}
