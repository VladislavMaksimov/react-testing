import { ScoopOption } from "../../ScoopOption/ScoopOption";

export const getOptionComponent = (optionType) => {
  switch (optionType) {
    case "scoops":
      return ScoopOption;
    default:
      throw new Error("option doesn't exist");
  }
};
