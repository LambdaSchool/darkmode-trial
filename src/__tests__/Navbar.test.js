import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("Clicks on the toggle", () => {
  const { container, rerender } = render(
    <Navbar darkMode={false} setDarkMode={jest.fn()} />
  );

  fireEvent.click(screen.getByTestId("toggle"));

  rerender(<Navbar darkMode={true} setDarkMode={jest.fn()} />);

  expect(container.querySelector(".toggled")).toBeTruthy();
});
