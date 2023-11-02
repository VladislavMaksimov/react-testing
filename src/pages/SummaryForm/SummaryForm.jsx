import { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import styles from "./SummaryForm.module.scss";

export const SummaryForm = () => {
  const [accepted, setAccepted] = useState(false);

  const popover = (
    <Popover>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const termsAndConditionsLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span className={styles.termsAndConditions}>Terms and conditions</span>
      </OverlayTrigger>
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
