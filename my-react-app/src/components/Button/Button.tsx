import "./Button.scss";

export function Button({ disabled, onClick, text, type }: any) {
  return (
    <button
      className="button__button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
