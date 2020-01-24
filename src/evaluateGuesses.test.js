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

test("returns 0 correct digits in correct position and 1 correct digit in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [0, 1, 5, 6]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 0 Correct Digit and Incorrect Position: 1"
  );
});

test("returns 0 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [0, 1, 2, 6]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 0 Correct Digit and Incorrect Position: 2"
  );
});

test("returns 0 correct digits in correct position and 3 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [5, 1, 2, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 0 Correct Digit and Incorrect Position: 3"
  );
});

test("returns 0 correct digits in correct position and 4 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [4, 1, 2, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 0 Correct Digit and Incorrect Position: 4"
  );
});

test("returns 1 correct digit in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 5, 6, 7]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 1 Correct Digit and Incorrect Position: 0"
  );
});

test("returns 2 correct digits in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 5, 6]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 2 Correct Digit and Incorrect Position: 0"
  );
});

test("returns 3 correct digits in correct position and 0 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 3, 5]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 3 Correct Digit and Incorrect Position: 0"
  );
});

test("returns 2 correct digits in correct position and 1 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 5, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 2 Correct Digit and Incorrect Position: 1"
  );
});

test("returns 1 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 3, 2, 5]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 1 Correct Digit and Incorrect Position: 2"
  );
});

test("returns 1 correct digits in correct position and 2 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 4, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 2 Correct Digit and Incorrect Position: 2"
  );
});

test("returns 1 correct digits in correct position and 3 correct digits in incorrect position", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [3, 1, 2, 4]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "Correct Digit and Position: 1 Correct Digit and Incorrect Position: 3"
  );
});
