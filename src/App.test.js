import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { evaluateGuess } from "./evaluateGuess";

test("returns 'You Won!' when the last guess is equal to the code", () => {
  const code = [1, 2, 3, 4];
  const guess = [1, 2, 3, 4];
  expect(evaluateGuess(code, guess)).toBe("You Won!");
});
