import { useState } from "react";
import styles from "./ColorButton.module.scss";
import {
  CHANGED_BACKGROUND,
  INITIAL_BACKGROUND,
  DISABLED_BACKGROUND,
} from "./constants";
import { replaceCamelCaseWithSpaces } from "../../utils/replaceCamelCaseWithSpaces/replaceCamelCaseWithSpaces";

export const ColorButton = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const buttonBackgroundColor = disabled
    ? DISABLED_BACKGROUND
    : isChanged
    ? CHANGED_BACKGROUND
    : INITIAL_BACKGROUND;

  const buttonColorText = isChanged
    ? replaceCamelCaseWithSpaces(INITIAL_BACKGROUND)
    : replaceCamelCaseWithSpaces(CHANGED_BACKGROUND);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        style={{ backgroundColor: buttonBackgroundColor }}
        onClick={() => setIsChanged((prev) => !prev)}
        disabled={disabled}
      >
        Change to {buttonColorText}
      </button>
      <input
        id="disable-checkbox"
        type="checkbox"
        onClick={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-checkbox">Disable button</label>
    </div>
  );
};
