import { renderClassName } from "utils/className";

export function useHeading({ level }: any) {
  const className = renderClassName({
    constant: "heading__heading",
    variable: {
      [`heading__heading--level${level}`]: level,
    },
  });
  const HeadingTag: any = `h${level}`;

  return {
    className,
    HeadingTag,
  };
}
