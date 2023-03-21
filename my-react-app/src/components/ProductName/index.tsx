import ErrorBoundary from "components/ErrorBoundary";
import { ProductName } from "./ProductName";

export default function ProductNameIndex(props: any) {
  return (
    <ErrorBoundary>
      <ProductName {...props} />
    </ErrorBoundary>
  );
}
