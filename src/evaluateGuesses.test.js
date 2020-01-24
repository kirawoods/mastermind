import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { evaluateGuesses } from "./evaluateGuesses";

test("returns 'You Won!' when the last guess is equal to the code", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 3, 4]
  ];
  expect(evaluateGuesses(code, guesses)).toBe("You Won!");
});

test("returns 'You Lost :(' when the user has used up all their guesses and their final guess is incorrect", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [2, 3, 4, 5],
    [0, 1, 2, 3],
    [2, 3, 4, 5],
    [0, 1, 2, 3],
    [2, 3, 4, 5],
    [0, 1, 2, 3],
    [2, 3, 4, 5],
    [0, 1, 2, 3],
    [0, 1, 2, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe("You Lost :(");
});
