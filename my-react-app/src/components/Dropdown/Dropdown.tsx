import FormFieldValidationError from "components/FormFieldValidationError";
import { DropdownInterface } from "./Dropdown.interface";
import { useDropdown } from "./useDropdown";
import "./Dropdown.scss";

export function Dropdown({
  id,
  label,
  meta,
  onBlur,
  onChange,
  onFocus,
  options = [],
  required,
  value,
}: DropdownInterface) {
  const {
    areOptionsVisible,
    dropdownClassName,
    handleDropdownClick,
    handleOptionClick,
    iconClassName,
    ref,
    selectedOption,
    withError,
  } = useDropdown({ meta, onChange, options, value });

  return (
    <div
      className="dropdown__container"
      ref={ref}
    >
      <input
        className={dropdownClassName}
        id={id}
        onBlur={onBlur}
        onChange={() => ""}
        onClick={handleDropdownClick}
        onFocus={onFocus}
        type="text"
        value={selectedOption.text || ""}
      />
      {areOptionsVisible && (
        <div className="dropdown__optionsContainer">
          {options.map((option) => {
            return (
              <div
                className="dropdown__option"
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </div>
            );
          })}
        </div>
      )}
      <span className={iconClassName}>🔻</span>
      <label
        className="dropdown__label"
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
