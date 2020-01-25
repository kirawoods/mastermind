import arrayEqual from "array-equal";

let guessCount = 10;
let codeLengthMinusOne = 3;
let allowedDigits = 7;

export const evaluateGuesses = (code, guesses) => {
  let codeCopy = code;
  let guessCopy = guesses[guesses.length - 1];
  let digitAndPositionCorrect = 0;
  let onlyDigitCorrect = 0;

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
    for (let i = 0; i <= allowedDigits; i++) {
      onlyDigitCorrect += Math.min(
        codeCopy.filter(function(number) {
          return number === i;
        }).length,
        guessCopy.filter(function(number) {
          return number === i;
        }).length
      );
    }
    return (
      "Correct Digit and Position: " +
      digitAndPositionCorrect +
      " Correct Digit and Incorrect Position: " +
      onlyDigitCorrect
    );
  }
};
