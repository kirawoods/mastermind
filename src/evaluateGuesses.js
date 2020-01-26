import arrayEqual from "array-equal";

const guessCount = 10;
export const codeLength = 4;
export const codeLengthMinusOne = codeLength - 1;
export const allowedDigits = 7;

export const evaluateGuess = (code, guess) => {
  let digitAndPositionCorrect = 0;
  let onlyDigitCorrect = 0;
  let codeCopy = code;
  let guessCopy = guess;
  for (let i = 0; i <= codeLengthMinusOne; i++) {
    if (code[i] === guess[i]) {
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
};

export const evaluateGuesses = (code, guesses) => {
  if (arrayEqual(code, guesses[guesses.length - 1])) {
    return "You Won!";
  } else if (
    guesses[guesses.length - 1] !== code &&
    guesses.length >= guessCount
  ) {
    return "You Lost :(";
  } else {
    //render page and do evaluate guess function
  }
};
