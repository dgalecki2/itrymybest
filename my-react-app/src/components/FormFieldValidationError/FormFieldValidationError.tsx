import { FormFieldValidationErrorInterface } from "./FormFieldValidationError.interface";
import "./FormFieldValidationError.scss";

export function FormFieldValidationError({
  children,
}: FormFieldValidationErrorInterface) {
  return <p className="formFieldValidationError__errorMessage">{children}</p>;
}
