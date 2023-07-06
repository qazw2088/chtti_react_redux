import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { test, expect } from "@jest/globals";

test("increments counter", () => {
  const { getByTestId } = render(<Counter />);
  const counter = getByTestId("counter");
  const button = getByTestId("button");
  expect(counter.textContent).toBe("0");
  fireEvent.click(button);
  expect(counter.textContent).toBe("1");
  fireEvent.click(button);
  expect(counter.textContent).toBe("2");
});
