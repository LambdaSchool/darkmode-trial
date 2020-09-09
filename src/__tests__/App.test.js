import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Clicks on the toggle", async () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("toggle"));
  expect(await screen.findByTestId("dark-mode")).toHaveClass("dark-mode");
});
