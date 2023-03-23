import { renderClassName } from "utils/className";
import { UseHeadingInterface } from "./Heading.interface";

export function useHeading({ className, level }: UseHeadingInterface) {
  const classNameFromHook = renderClassName({
    constant: "heading__heading",
    variable: {
      [`heading__heading--level${level}`]: !!level,
      [className]: !!className,
    },
  });
  const HeadingTag = `h${level}`;

  return {
    classNameFromHook,
    HeadingTag,
  };
}
