import ErrorBoundary from "components/ErrorBoundary";
import { AddEditProductForm } from "./AddEditProductForm";

export default function AddEditProductFormIndex(props: any) {
  return (
    <ErrorBoundary>
      <AddEditProductForm {...props} />
    </ErrorBoundary>
  );
}
