import ErrorBoundary from "components/ErrorBoundary";
import { AddEditProductForm } from "./AddEditProductForm";
import { AddEditProductFormInterface } from "./AddEditProductForm.interface";

export default function AddEditProductFormIndex(
  props: AddEditProductFormInterface,
) {
  return (
    <ErrorBoundary>
      <AddEditProductForm {...props} />
    </ErrorBoundary>
  );
}
