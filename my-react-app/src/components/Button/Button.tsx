export function Button({ disabled, onClick, text, type }: any) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
