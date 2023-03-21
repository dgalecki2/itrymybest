import FormFieldValidationError from "components/FormFieldValidationError";
import { useInput } from "./useInput";
import "./Input.scss";

export function Input({
  id,
  label,
  meta,
  onBlur,
  onChange,
  onFocus,
  required,
  value,
}: any) {
  const { inputClassName, withError } = useInput({
    error: meta.error,
    touched: meta.touched,
    value,
  });

  return (
    <div className="input__container">
      <input
        className={inputClassName}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        type="text"
        value={value || ""}
      />
      <label
        className="input__label"
        htmlFor={id}
      >
        {label}&nbsp;{required && "*"}
      </label>
      {withError && (
        <FormFieldValidationError>{meta.error}</FormFieldValidationError>
      )}
    </div>
  );
}
