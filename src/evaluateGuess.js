import arrayEqual from "array-equal";

export const evaluateGuess = (code, guess) => {
  if (arrayEqual(code, guess)) {
    return "You Won!";
  } else if (code !== guesses[guesses.length - 1] && guesses.length >= 10) {
    return "You Lost :(";
  } else {
    return "Try Again, Loserino";
  }
};
