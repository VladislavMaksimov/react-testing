import { getOptionComponent } from "./utils/getOptionComponent";

export const mapOption = (optionType) => (option) => {
  const OptionComponent = getOptionComponent(optionType);
  const { name, imagePath } = option;
  return <OptionComponent key={name} name={name} imagePath={imagePath} />;
};
