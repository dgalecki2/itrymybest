import ErrorBoundary from "components/ErrorBoundary";
import { ProductIcon } from "./ProductIcon";

export default function ProductIconIndex(props: any) {
  return (
    <ErrorBoundary>
      <ProductIcon {...props} />
    </ErrorBoundary>
  );
}
