import { useEffect, useMemo, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { renderClassName } from "utils/className";
import {
  DropdownOptionInterface,
  UseDropdownInterface,
} from "./Dropdown.interface";

export function useDropdown({
  meta,
  onChange,
  options,
  value,
}: UseDropdownInterface) {
  const emptyOption = useMemo(
    () => ({
      text: "",
      value: "",
    }),
    [],
  );

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(emptyOption);

  useEffect(() => {
    if (value) {
      setSelectedOption(
        options.find((option) => +option.value === +value) || emptyOption,
      );
    }
  }, [emptyOption, options, value]);

  const dropdownClassName = renderClassName({
    constant: "dropdown__dropdown",
    variable: {
      "dropdown__dropdown--withValue": !!selectedOption.value,
    },
  });
  const iconClassName = renderClassName({
    constant: "dropdown__icon",
    variable: {
      "dropdown__icon--rotated": areOptionsVisible,
    },
  });
  const withError = meta.error && meta.touched;

  const handleClickOutside = () => setAreOptionsVisible(false);
  const handleDropdownClick = () => setAreOptionsVisible((visible) => !visible);
  const handleOptionClick = (option: DropdownOptionInterface) => {
    setSelectedOption(option);
    setAreOptionsVisible(false);
    onChange(option.value);
  };

  const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

  return {
    areOptionsVisible,
    dropdownClassName,
    handleClickOutside,
    handleDropdownClick,
    handleOptionClick,
    iconClassName,
    ref,
    selectedOption,
    withError,
  };
}
