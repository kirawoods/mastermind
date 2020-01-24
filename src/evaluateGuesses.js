import arrayEqual from "array-equal";

export const evaluateGuesses = (code, guesses) => {
  if (arrayEqual(code, guesses[guesses.length - 1])) {
    return "You Won!";
  } else if (guesses[guesses.length - 1] !== code && guesses.length >= 10) {
    return "You Lost :(";
  } else if (
    (code[0] === guesses[guesses.length - 1][0] &&
      code[1] !== guesses[guesses.length - 1][1] &&
      code[2] !== guesses[guesses.length - 1][2] &&
      code[3] !== guesses[guesses.length - 1][3]) ||
    (code[0] !== guesses[guesses.length - 1][0] &&
      code[1] === guesses[guesses.length - 1][1] &&
      code[2] !== guesses[guesses.length - 1][2] &&
      code[3] !== guesses[guesses.length - 1][3]) ||
    (code[0] !== guesses[guesses.length - 1][0] &&
      code[1] !== guesses[guesses.length - 1][1] &&
      code[2] === guesses[guesses.length - 1][2] &&
      code[3] !== guesses[guesses.length - 1][3]) ||
    (code[0] !== guesses[guesses.length - 1][0] &&
      code[1] !== guesses[guesses.length - 1][1] &&
      code[2] !== guesses[guesses.length - 1][2] &&
      code[3] === guesses[guesses.length - 1][3])
  ) {
    return "0 correct digits in incorrect position, 1 correct digit in correct position";
  } else {
    return "Try Again";
  }
};
