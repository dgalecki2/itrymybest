import { HeadingInterface } from "./Heading.interface";
import { useHeading } from "./useHeading";
import "./Heading.scss";

export const Heading = ({ children, className, level }: HeadingInterface) => {
  const { classNameFromHook, HeadingTag } = useHeading({ className, level });

  return <HeadingTag className={classNameFromHook}>{children}</HeadingTag>;
};
