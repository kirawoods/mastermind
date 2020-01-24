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

test("returns that the user has entered 1 correct digit in incorrect position and 0 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [0, 1, 5, 6]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "1 correct digit in incorrect position, 0 correct digits in correct position"
  );
});

test("returns that the user has entered 2 correct digits in incorrect position and 0 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [0, 1, 2, 6]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "2 correct digits in incorrect position, 0 correct digits in correct position"
  );
});

test("returns that the user has entered 3 correct digits in incorrect position and 0 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [5, 1, 2, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "3 correct digits in incorrect position, 0 correct digits in correct position"
  );
});

test("returns that the user has entered 4 correct digits in incorrect position and 0 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [4, 1, 2, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "4 correct digits in incorrect position, 0 correct digits in correct position"
  );
});

test("returns that the user has entered 0 correct digits in incorrect position and 1 number that is correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 5, 6, 7]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "0 correct digits in incorrect position, 1 correct digit in correct position"
  );
});

test("returns that the user has entered 0 correct digits in incorrect position and 2 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 5, 6]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "0 correct digits in incorrect position, 2 correct digits in correct position"
  );
});

test("returns that the user has entered 0 correct digits in incorrect position and 3 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 3, 5]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "0 correct digits in incorrect position, 3 correct digits in correct position"
  );
});

test("returns that the user has entered 1 correct digit in incorrect position and 1 number that is correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 5, 2, 6]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "1 correct digit in incorrect position, 1 correct digits in correct position"
  );
});

test("returns that the user has entered 1 correct digit in incorrect position and 2 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 5, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "1 correct digits in incorrect position, 2 correct digits in correct position"
  );
});

test("returns that the user has entered 2 correct digits in incorrect position and 1 number that is correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 3, 2, 5]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "2 correct digits in incorrect position, 1 correct digit in correct position"
  );
});

test("returns that the user has entered 2 correct digits in incorrect position and 2 numbers that are correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [1, 2, 4, 3]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "2 correct digits in incorrect position, 2 correct digits in correct position"
  );
});

test("returns that the user has entered 3 correct digits in incorrect position and 1 number that is correct and positioned correctly", () => {
  const code = [1, 2, 3, 4];
  const guesses = [
    [0, 1, 2, 3],
    [3, 1, 2, 4]
  ];
  expect(evaluateGuesses(code, guesses)).toBe(
    "3 correct digits in incorrect position, 1 correct digits in correct position"
  );
});
