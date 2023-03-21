import ErrorBoundary from "components/ErrorBoundary";
import { RemoveProductForm } from "./RemoveProductForm";

export default function RemoveProductFormIndex(props: any) {
  return (
    <ErrorBoundary>
      <RemoveProductForm {...props} />
    </ErrorBoundary>
  );
}
