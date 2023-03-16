import "./FormFieldValidationError.scss";

export function FormFieldValidationError({ children }: any) {
  return <p className="formFieldValidationError__errorMessage">{children}</p>;
}
