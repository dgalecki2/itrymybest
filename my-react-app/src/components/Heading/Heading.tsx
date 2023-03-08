import { HeadingInterface } from "./Heading.interface";

export const Heading = ({ children, level }: HeadingInterface) => {
  const Element: any = `h${level}`;
  return <Element>{children}</Element>;
};
