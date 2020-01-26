import React from "react";
import { render } from "@testing-library/react";

import { evaluateGuesses, evaluateGuess } from "./evaluateGuesses";

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

test("returns 0 correct digits in correct position and 1 correct digit in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [0, 1, 5, 6];
  expect(evaluateGuess(code, guess)).toBe("O---");
});

test("returns 0 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [0, 1, 2, 6];
  expect(evaluateGuess(code, guess)).toBe("OO--");
});

test("returns 0 correct digits in correct position and 3 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [5, 1, 2, 3];
  expect(evaluateGuess(code, guess)).toBe("OOO-");
});

test("returns 0 correct digits in correct position and 4 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [4, 1, 2, 3];
  expect(evaluateGuess(code, guess)).toBe("OOOO");
});

test("returns 1 correct digit in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 5, 6, 7];
  expect(evaluateGuess(code, guess)).toBe("X---");
});

test("returns 2 correct digits in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 5, 6];
  expect(evaluateGuess(code, guess)).toBe("XX--");
});

test("returns 3 correct digits in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 3, 5];
  expect(evaluateGuess(code, guess)).toBe("XXX-");
});

test("returns 2 correct digits in correct position and 1 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 5, 3];
  expect(evaluateGuess(code, guess)).toBe("XXO-");
});

test("returns 1 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 3, 2, 5];
  expect(evaluateGuess(code, guess)).toBe("XOO-");
});

test("returns 1 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 4, 3];
  expect(evaluateGuess(code, guess)).toBe("XXOO");
});

test("returns 1 correct digits in correct position and 3 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [3, 1, 2, 4];
  expect(evaluateGuess(code, guess)).toBe("XOOO");
});

test("returns 1 correct digits in correct position and 1 correct digits in incorrect position in case of double digits in code", () => {
  const code = [2, 2, 4, 1];
  const guess = [1, 2, 1, 3];
  expect(evaluateGuess(code, guess)).toBe("XO--");
});
