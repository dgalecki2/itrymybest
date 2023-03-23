import ErrorBoundary from "components/ErrorBoundary";
import { Checkbox } from "./Checkbox";
import { CheckboxInterface } from "./Checkbox.interface";

export default function CheckboxIndex(props: CheckboxInterface) {
  return (
    <ErrorBoundary>
      <Checkbox {...props} />
    </ErrorBoundary>
  );
}
