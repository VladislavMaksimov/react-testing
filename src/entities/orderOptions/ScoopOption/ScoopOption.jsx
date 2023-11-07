import { OrderOption } from "../OrderOption/OrderOption";

export const ScoopOption = ({ name, imagePath }) => (
  <OrderOption name={name} imagePath={imagePath} optionTypeText="scoop" />
);
