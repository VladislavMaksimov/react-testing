import { render, screen, fireEvent } from "@testing-library/react";
import { ColorButton } from "./ColorButton";

const renderComponent = () => render(<ColorButton />);

test("button has correct initial color", () => {
  renderComponent();
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ "background-color": "red" });
});

test("button turns blue when clicked", () => {
  renderComponent();

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ "background-color": "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions for disabling and enabling button", () => {
  renderComponent();

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("clicks on checkbox disables and enables the button", () => {
  renderComponent();

  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
