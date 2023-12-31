import { replaceCamelCaseWithSpaces } from "./replaceCamelCaseWithSpaces";

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });

  test("works for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red",
    );
  });
});
