import React from "react";
import "./Header.css";
import Logo from "./MastermindLogo.PNG";

export function Header() {
  return (
    <div className="Header">
      <img className="logo" src={Logo}></img>
      <div className="rules">
        <p>
          Rules: The computer has chosen a secret 4 digit code that you must
          guess. Each digit of the code will be between 0 and 7. You are allowed
          10 guesses. For each guess, you will be told:
        </p>
        <ul className="rules-bullet-list">
          <li className="rules-bullet">
            how many digits are correct and in the correct position (denoted by
            an X)
          </li>
          <li className="rules-bullet">
            how many digits are correct and in an incorrect position (denoted by
            an O)
          </li>
          <li className="rules-bullet">
            how many digits are incorrect (denoted by a -)
          </li>
        </ul>
      </div>
    </div>
  );
}
