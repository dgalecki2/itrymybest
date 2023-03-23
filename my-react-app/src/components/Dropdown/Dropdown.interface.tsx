import { FieldMetaState } from "react-final-form";

export interface DropdownOptionInterface {
  text: string;
  value: string;
}

export interface DropdownInterface {
  id: string;
  label: string;
  meta: FieldMetaState<any>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: (value: string) => void;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  options: DropdownOptionInterface[];
  required: boolean;
  value: string;
}

export interface UseDropdownInterface {
  meta: FieldMetaState<any>;
  onChange: (value: string) => void;
  options: DropdownOptionInterface[];
  value: string;
}
