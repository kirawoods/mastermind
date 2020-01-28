import React from "react";
import { render } from "@testing-library/react";

import { evaluateGuesses, evaluateGuess } from "./evaluateGuesses";

test("returns 'XXXX' when the last guess is equal to the code", () => {
  const code = [1, 2, 3, 4];
  const guesses = [1, 2, 3, 4];
  const codeLength = 4;
  expect(evaluateGuess(code, guesses, codeLength)).toBe("XXXX");
});

test("returns 0 correct digits in correct position and 1 correct digit in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [0, 1, 5, 6];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("O---");
});

test("returns 0 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [0, 1, 2, 6];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("OO--");
});

test("returns 0 correct digits in correct position and 3 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [5, 1, 2, 3];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("OOO-");
});

test("returns 0 correct digits in correct position and 4 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [4, 1, 2, 3];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("OOOO");
});

test("returns 1 correct digit in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 5, 6, 7];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("X---");
});

test("returns 2 correct digits in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 5, 6];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XX--");
});

test("returns 3 correct digits in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 3, 5];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XXX-");
});

test("returns 2 correct digits in correct position and 1 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 5, 3];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XXO-");
});

test("returns 1 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 3, 2, 5];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XOO-");
});

test("returns 1 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 4, 3];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XXOO");
});

test("returns 1 correct digits in correct position and 3 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guess = [3, 1, 2, 4];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XOOO");
});

test("returns 1 correct digits in correct position and 1 correct digits in incorrect position in case of double digits in code", () => {
  const code = [2, 2, 4, 1];
  const guess = [1, 2, 1, 3];
  const codeLength = 4;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XO--");
});

test("returns 1 correct digits in correct position and 1 correct digits in incorrect position in case of 3 digit code", () => {
  const code = [2, 4, 1];
  const guess = [0, 2, 1];
  const codeLength = 3;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XO-");
});

test("returns 1 correct digits in correct position and 1 correct digits in incorrect position in case of 5 digit code", () => {
  const code = [2, 4, 1, 5, 7];
  const guess = [0, 2, 1, 0, 0];
  const codeLength = 5;
  expect(evaluateGuess(code, guess, codeLength)).toBe("XO---");
});
