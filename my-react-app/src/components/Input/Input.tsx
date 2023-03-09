import { useInput } from "./useInput";

export function Input({
  id,
  label,
  meta,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  value,
}: any) {
  const { withError } = useInput({ error: meta.error, touched: meta.touched });

  return (
    <div>
      <label htmlFor={id}>
        {label} {required && "*"}
      </label>
      <input
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        type="text"
        value={value || ""}
      />
      {withError && <p>{meta.error}</p>}
    </div>
  );
}
