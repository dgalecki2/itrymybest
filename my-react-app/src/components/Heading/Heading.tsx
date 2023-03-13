import { HeadingInterface } from "./Heading.interface";
import { useHeading } from "./useHeading";
import "./Heading.scss";

export const Heading = ({ children, level }: HeadingInterface) => {
  const { className, HeadingTag } = useHeading({ level });

  return <HeadingTag className={className}>{children}</HeadingTag>;
};
