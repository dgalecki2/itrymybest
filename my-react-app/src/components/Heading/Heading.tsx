import { HeadingInterface } from "./Heading.interface";
import { useHeading } from "./useHeading";
import "./Heading.scss";

export function Heading({
  children,
  className = "",
  level,
  onClick,
}: HeadingInterface) {
  const { classNameFromHook, HeadingTag } = useHeading({ className, level });

  return (
    // @ts-ignore
    <HeadingTag
      className={classNameFromHook}
      onClick={onClick}
    >
      {children}
    </HeadingTag>
  );
}
