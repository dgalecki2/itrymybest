import { HeadingInterface } from "./Heading.interface";
import { useHeading } from "./useHeading";
import "./Heading.scss";

export const Heading = ({
  children,
  className,
  level,
  onClick,
}: HeadingInterface) => {
  const { classNameFromHook, HeadingTag } = useHeading({ className, level });

  return (
    <HeadingTag
      className={classNameFromHook}
      onClick={onClick}
    >
      {children}
    </HeadingTag>
  );
};
