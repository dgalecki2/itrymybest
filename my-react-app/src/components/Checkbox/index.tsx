import ErrorBoundary from "components/ErrorBoundary";
import { Checkbox } from "./Checkbox";

export default function CheckboxIndex(props: any) {
  return (
    <ErrorBoundary>
      <Checkbox {...props} />
    </ErrorBoundary>
  );
}
