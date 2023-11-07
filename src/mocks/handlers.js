import { handleScoops } from "./handlers/scoops";
import { handleToppings } from "./handlers/toppings";

export const handlers = [handleScoops(), handleToppings()];
