import ErrorBoundary from "components/ErrorBoundary";
import { ProductCategory } from "./ProductCategory";

export default function ProductCategoryIndex(props: any) {
  return (
    <ErrorBoundary>
      <ProductCategory {...props} />
    </ErrorBoundary>
  );
}
