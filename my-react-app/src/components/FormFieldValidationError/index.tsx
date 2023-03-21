import ErrorBoundary from "components/ErrorBoundary";
import { FormFieldValidationError } from "./FormFieldValidationError";

export default function FormFieldValidationErrorIndex(props: any) {
  return (
    <ErrorBoundary>
      <FormFieldValidationError {...props} />
    </ErrorBoundary>
  );
}
