import { UseCheckboxInterface } from "./Checkbox.interface";

export function useCheckbox({ error, touched }: UseCheckboxInterface) {
  const withError = error && touched;

  return {
    withError,
  };
}
