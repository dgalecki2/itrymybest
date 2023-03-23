import ErrorBoundary from "components/ErrorBoundary";
import { ProductName } from "./ProductName";
import { ProductNameInterface } from "./ProductName.interface";

export default function ProductNameIndex(props: ProductNameInterface) {
  return (
    <ErrorBoundary>
      <ProductName {...props} />
    </ErrorBoundary>
  );
}
