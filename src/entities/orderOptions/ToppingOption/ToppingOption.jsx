import { OrderOption } from "../OrderOption/OrderOption";

export const ToppingOption = ({ name, imagePath }) => (
  <OrderOption name={name} imagePath={imagePath} optionTypeText="topping" />
);
