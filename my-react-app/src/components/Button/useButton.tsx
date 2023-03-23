import { renderClassName } from "utils/className";
import { UseButtonInterface } from "./Button.interface";

export function useButton({ className }: UseButtonInterface) {
  const classNameFromHook = renderClassName({
    constant: "button__button",
    variable: {
      [className]: !!className,
    },
  });

  return {
    classNameFromHook,
  };
}
