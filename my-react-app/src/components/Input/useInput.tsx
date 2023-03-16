import { renderClassName } from "utils/className";

export function useInput({ error, touched, value }: any) {
  const inputClassName = renderClassName({
    constant: "input__input",
    variable: {
      "input__input--withValue": value,
    },
  });
  const withError = error && touched;

  return {
    inputClassName,
    withError,
  };
}
