import ErrorBoundary from "components/ErrorBoundary";
import { Form } from "./Form";

export default function FormIndex(props: any) {
  return (
    <ErrorBoundary>
      <Form {...props} />
    </ErrorBoundary>
  );
}
