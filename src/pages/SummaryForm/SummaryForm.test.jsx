import { render, screen } from "@testing-library/react";
import { SummaryForm } from "./SummaryForm";
import userEvent from "@testing-library/user-event";

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

test("checkbox enables sumbit button when checked and disables when unchecked", async () => {
  renderComponent();
  const user = userEvent.setup();

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const submitButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  await user.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});
