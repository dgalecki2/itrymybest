import ErrorBoundary from "components/ErrorBoundary";
import { ProductIcon } from "./ProductIcon";
import { ProductIconInterface } from "./ProductIcon.interface";

export default function ProductIconIndex(props: ProductIconInterface) {
  return (
    <ErrorBoundary>
      <ProductIcon {...props} />
    </ErrorBoundary>
  );
}
