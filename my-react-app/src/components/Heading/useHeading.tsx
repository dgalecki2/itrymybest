import { renderClassName } from "utils/className";

export function useHeading({ className, level }: any) {
  const classNameFromHook = renderClassName({
    constant: "heading__heading",
    variable: {
      [`heading__heading--level${level}`]: level,
      [className]: className,
    },
  });
  const HeadingTag: any = `h${level}`;

  return {
    classNameFromHook,
    HeadingTag,
  };
}
