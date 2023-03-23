import ErrorBoundary from "components/ErrorBoundary";
import { FormFieldValidationError } from "./FormFieldValidationError";
import { FormFieldValidationErrorInterface } from "./FormFieldValidationError.interface";

export default function FormFieldValidationErrorIndex(
  props: FormFieldValidationErrorInterface,
) {
  return (
    <ErrorBoundary>
      <FormFieldValidationError {...props} />
    </ErrorBoundary>
  );
}
