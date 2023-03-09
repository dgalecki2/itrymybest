import { useCheckbox } from "./useCheckbox";

export function Checkbox({
  checked,
  label,
  meta,
  onBlur,
  onChange,
  onFocus,
  required,
}: any) {
  const { withError } = useCheckbox({
    error: meta.error,
    touched: meta.touched,
  });

  return (
    <div>
      <label>
        <input
          checked={checked}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          type="checkbox"
        />
        {label} {required && "*"}
      </label>
      {withError && <p>{meta.error}</p>}
    </div>
  );
}
