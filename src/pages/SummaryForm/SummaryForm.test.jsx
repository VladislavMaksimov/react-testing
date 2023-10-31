import { fireEvent, render, screen } from "@testing-library/react";
import { SummaryForm } from "./SummaryForm";

const renderComponent = () => render(<SummaryForm />);

test("initial conditions", () => {
  renderComponent();

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const submitButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});

test("checkbox enables sumbit button when checked and disables when unchecked", () => {
  renderComponent();

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const submitButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});
