import { render, screen } from "@testing-library/react";
import { Options } from "./Options";

const renderScoops = () => render(<Options optionType="scoops" />);

test("displays image for each scoop option from server", async () => {
  renderScoops();

  const scoopImages = await screen.findAllByRole("img", { name: /scoop/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
