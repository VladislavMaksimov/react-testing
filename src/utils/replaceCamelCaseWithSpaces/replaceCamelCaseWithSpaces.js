export const replaceCamelCaseWithSpaces = (camelCaseText) => {
  return camelCaseText.replace(/\B([A-Z])\B/g, " $1");
};
