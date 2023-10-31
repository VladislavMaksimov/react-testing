import { useState } from "react";
import { Button, Form, NavLink } from "react-bootstrap";

export const SummaryForm = () => {
  const [accepted, setAccepted] = useState(false);

  const termsAndConditionsLabel = (
    <span>
      I agree to <NavLink href="#">Terms and conditions</NavLink>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          label={termsAndConditionsLabel}
        />
      </Form.Group>
      <Button type="submit" disabled={!accepted}>
        Confirm order
      </Button>
    </Form>
  );
};
