import arrayEqual from "array-equal";
import React from "react";

export const evaluateGuesses = (code, guesses) => {
  let digitAndPositionCorrect = 0;
  let onlyDigitCorrect = 0;

  if (arrayEqual(code, guesses[guesses.length - 1])) {
    return "You Won!";
  } else if (guesses[guesses.length - 1] !== code && guesses.length >= 10) {
    return "You Lost :(";
  } else {
    for (let i = 0; i <= 3; i++) {
      if (code[i] === guesses[guesses.length - 1][i]) {
        digitAndPositionCorrect++;
      }
    }
    return (
      "Correct Digit and Position: " +
      digitAndPositionCorrect +
      " Correct Digit and Incorrect Position: " +
      onlyDigitCorrect
    );
  }
};
