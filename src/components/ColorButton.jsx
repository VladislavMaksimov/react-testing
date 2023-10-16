import { useState } from "react";

export const ColorButton = () => {
  const [isChanged, setIsChanged] = useState(false);
  return (
    <button
      style={{ backgroundColor: isChanged ? "blue" : "red" }}
      onClick={() => setIsChanged((prev) => !prev)}
    >
      Change to {isChanged ? "red" : "blue"}
    </button>
  );
};
