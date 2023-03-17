import { useButton } from "./useButton";
import "./Button.scss";

export function Button({ className, disabled, onClick, text, type }: any) {
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
