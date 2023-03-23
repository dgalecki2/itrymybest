import { renderClassName } from "utils/className";
import { UseInputInterface } from "./Input.interface";

export function useInput({ error, touched, value }: UseInputInterface) {
  const inputClassName = renderClassName({
    constant: "input__input",
    variable: {
      "input__input--withValue": !!value,
    },
  });
  const withError = error && touched;

  return {
    inputClassName,
    withError,
  };
}
