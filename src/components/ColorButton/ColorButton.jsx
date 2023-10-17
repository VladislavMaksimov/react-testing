import { useState } from "react";
import styles from "./ColorButton.module.scss";

export const ColorButton = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className={styles.wrapper}>
      <button
        style={{ backgroundColor: isChanged ? "blue" : "red" }}
        onClick={() => setIsChanged((prev) => !prev)}
        disabled={disabled}
      >
        Change to {isChanged ? "red" : "blue"}
      </button>
      <input type="checkbox" onClick={(e) => setDisabled(e.target.checked)} />
    </div>
  );
};
