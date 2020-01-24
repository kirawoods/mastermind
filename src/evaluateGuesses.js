import arrayEqual from "array-equal";
import React from "react";

let guessCount = 10;
let codeLengthMinusOne = 3;

export const evaluateGuesses = (code, guesses) => {
  let digitAndPositionCorrect = 0;
  let onlyDigitCorrect = 0;
  let codeCopy = code;
  let guessCopy = guesses[guesses.length - 1];

  if (arrayEqual(code, guesses[guesses.length - 1])) {
    return "You Won!";
  } else if (
    guesses[guesses.length - 1] !== code &&
    guesses.length >= guessCount
  ) {
    return "You Lost :(";
  } else {
    for (let i = 0; i <= codeLengthMinusOne; i++) {
      if (code[i] === guesses[guesses.length - 1][i]) {
        digitAndPositionCorrect++;
        codeCopy.splice(i, 1, null);
        guessCopy.splice(i, 1, null);
      }
    }
    for (let i = 0; i <= 7; i++) {
      let codeCopyCount = codeCopy.filter(function(number) {
        return number === i;
      }).length;

      let guessCopyCount = guessCopy.filter(function(number) {
        return number === i;
      }).length;

      onlyDigitCorrect += Math.min(codeCopyCount, guessCopyCount);
    }
    return (
      "Correct Digit and Position: " +
      digitAndPositionCorrect +
      " Correct Digit and Incorrect Position: " +
      onlyDigitCorrect
    );
  }
};
