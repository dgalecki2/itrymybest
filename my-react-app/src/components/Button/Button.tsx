import { ButtonInterface } from "./Button.interface";
import { useButton } from "./useButton";
import "./Button.scss";

export function Button({
  className,
  disabled = false,
  onClick = () => {},
  text,
  type = "button",
}: ButtonInterface) {
  const { classNameFromHook } = useButton({ className });

  return (
    <button
      className={classNameFromHook}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
