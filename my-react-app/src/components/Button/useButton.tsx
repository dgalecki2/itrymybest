import { renderClassName } from "utils/className";

export function useButton({ className }: any) {
  const classNameFromHook = renderClassName({
    constant: "button__button",
    variable: {
      [className]: className,
    },
  });

  return {
    classNameFromHook,
  };
}
