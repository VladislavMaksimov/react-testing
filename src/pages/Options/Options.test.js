import { render, screen } from "@testing-library/react";
import { Options } from "./Options";

const renderScoops = () => render(<Options optionType="scoops" />);

test("displays image for each scoop option from server", async () => {
  renderScoops();

  const scoopImages = await screen.findAllByRole("img", { name: /scoop/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((image) => image.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

const renderToppings = () => render(<Options optionType="toppings" />);

test("displays image for each topping option from server", async () => {
  renderToppings();

  const toppingImages = await screen.findAllByRole("img", { name: /topping/i });
  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map((image) => image.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
