import { FormFieldValidationError } from "components/FormFieldValidationError/FormFieldValidationError";
import { ReactComponent as ArrowheadIcon } from "icons/arrowhead.svg";
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
}: any) {
  const {
    areOptionsVisible,
    dropdownClassName,
    handleDropdownClick,
    handleOptionClick,
    iconClassName,
    selectedOption,
    withError,
  } = useDropdown({ meta, onChange, options, value });

  return (
    <div className="dropdown__container">
      <input
        className={dropdownClassName}
        defaultValue={selectedOption.text || ""}
        id={id}
        onBlur={onBlur}
        onChange={undefined}
        onClick={handleDropdownClick}
        onFocus={onFocus}
        type="text"
      />
      {areOptionsVisible && (
        <div className="dropdown__optionsContainer">
          {options.map((option: any) => {
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
      <ArrowheadIcon className={iconClassName} />
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