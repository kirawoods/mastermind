import arrayEqual from "array-equal";

export const evaluateGuesses = (code, guesses) => {
  if (arrayEqual(code, guesses[guesses.length - 1])) {
    return "You Won!";
  } else if (code !== guesses[guesses.length - 1] && guesses.length >= 10) {
    return "You Lost :(";
  } else {
    return "Try Again";
  }
};
