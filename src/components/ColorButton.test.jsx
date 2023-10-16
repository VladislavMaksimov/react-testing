import { render, screen, fireEvent } from "@testing-library/react";
import { ColorButton } from "./ColorButton";

test("button has correct initial color", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ "background-color": "red" });
});

test("button turns blue when clicked", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});
