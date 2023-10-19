import { useState } from "react";
import styles from "./ColorButton.module.scss";

export const ColorButton = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const buttonBackgroundColor = disabled ? "grey" : isChanged ? "blue" : "red";

  return (
    <div className={styles.wrapper}>
      <button
        style={{ backgroundColor: buttonBackgroundColor }}
        onClick={() => setIsChanged((prev) => !prev)}
        disabled={disabled}
      >
        Change to {isChanged ? "red" : "blue"}
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
