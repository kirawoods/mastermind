export const guessesAllowed = 10;
export const codeLength = 4;
export const codeLengthMinusOne = codeLength - 1;
export const allowedDigits = 7;

export const evaluateGuess = (code, guess) => {
  let digitAndPositionCorrect = 0;
  let onlyDigitCorrect = 0;
  let incorrectDigits = 0;
  let codeCopy = code.slice(0, code.length);
  let guessCopy = guess.slice(0, guess.length);
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
  incorrectDigits = codeLength - digitAndPositionCorrect - onlyDigitCorrect;

  let feedback = "";
  for (let i = 0; i <= digitAndPositionCorrect - 1; i++) {
    feedback += "X";
  }
  for (let i = 0; i <= onlyDigitCorrect - 1; i++) {
    feedback += "O";
  }
  for (let i = 0; i <= incorrectDigits - 1; i++) {
    feedback += "-";
  }
  return feedback;
};
