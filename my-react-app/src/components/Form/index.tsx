import ErrorBoundary from "components/ErrorBoundary";
import { Form } from "./Form";
import { FormInterface } from "./Form.interface";

export default function FormIndex(props: FormInterface) {
  return (
    <ErrorBoundary>
      <Form {...props} />
    </ErrorBoundary>
  );
}
