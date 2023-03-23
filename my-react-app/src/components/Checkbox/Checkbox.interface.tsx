import { FieldMetaState } from "react-final-form";

export interface CheckboxInterface {
  checked: boolean;
  id: string;
  label: string;
  meta: FieldMetaState<any>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  required: boolean;
}

export interface UseCheckboxInterface {
  error: string;
  touched: boolean;
}
