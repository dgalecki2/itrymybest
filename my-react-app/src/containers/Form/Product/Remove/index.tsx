import ErrorBoundary from "components/ErrorBoundary";
import { RemoveProductForm } from "./RemoveProductForm";
import { RemoveProductFormInterface } from "./RemoveProductForm.interface";

export default function RemoveProductFormIndex(
  props: RemoveProductFormInterface,
) {
  return (
    <ErrorBoundary>
      <RemoveProductForm {...props} />
    </ErrorBoundary>
  );
}
