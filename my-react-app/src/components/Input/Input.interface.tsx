import { FieldMetaState } from "react-final-form";

export interface InputInterface {
  id: string;
  label: string;
  meta: FieldMetaState<any>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  required: boolean;
  value: string;
}

export interface UseInputInterface {
  error: string;
  touched: boolean;
  value: string;
}
