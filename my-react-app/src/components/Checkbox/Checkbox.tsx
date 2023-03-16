import { useCheckbox } from "./useCheckbox";
import "./Checkbox.scss";

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
    <div className="checkbox__checkboxContainer">
      <label className="checkbox__label">
        <span className="checkbox__labelContent">
          {label} {required && "*"}
        </span>
        <input
          checked={checked}
          className="checkbox__input"
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          type="checkbox"
        />
        <span className="checkbox__slider"></span>
      </label>
      {withError && <p>{meta.error}</p>}
    </div>
  );
}
