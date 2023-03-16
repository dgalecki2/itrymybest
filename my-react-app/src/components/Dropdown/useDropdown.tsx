import { useEffect, useState } from "react";
import { renderClassName } from "utils/className";

export function useDropdown({ meta, onChange, options, value }: any) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ text: "", value: "" });

  useEffect(() => {
    if (value) {
      setSelectedOption(
        options.find((option: any) => +option.value === +value),
      );
    }
  }, [options, value]);

  const dropdownClassName = renderClassName({
    constant: "dropdown__dropdown",
    variable: {
      "dropdown__dropdown--withValue": selectedOption.value,
    },
  });
  const iconClassName = renderClassName({
    constant: "dropdown__icon",
    variable: {
      "dropdown__icon--rotated": areOptionsVisible,
    },
  });
  const withError = meta.error && meta.touched;

  const handleDropdownClick = () =>
    setAreOptionsVisible((visible: boolean) => !visible);
  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setAreOptionsVisible(false);
    onChange(option.value);
  };

  return {
    areOptionsVisible,
    dropdownClassName,
    handleDropdownClick,
    handleOptionClick,
    iconClassName,
    selectedOption,
    withError,
  };
}
