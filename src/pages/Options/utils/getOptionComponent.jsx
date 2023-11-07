import { ScoopOption } from "../../../entities/orderOptions/ScoopOption/ScoopOption";
import { ToppingOption } from "../../../entities/orderOptions/ToppingOption/ToppingOption";

export const getOptionComponent = (optionType) => {
  switch (optionType) {
    case "scoops":
      return ScoopOption;
    case "toppings":
      return ToppingOption;
    default:
      throw new Error("option doesn't exist");
  }
};
