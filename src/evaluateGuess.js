export const evaluateGuess = (code, guesses) => {
  if (code === guesses[guesses.length - 1]) {
    return "You Won!";
  } else if (code !== guesses[guesses.length - 1] && guesses.length >= 10) {
    return "You Lost :(";
  }
};
