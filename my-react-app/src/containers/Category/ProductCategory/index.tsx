import ErrorBoundary from "components/ErrorBoundary";
import { ProductCategory } from "./ProductCategory";
import { ProductCategoryInterface } from "./ProductCategory.interface";

export default function ProductCategoryIndex(props: ProductCategoryInterface) {
  return (
    <ErrorBoundary>
      <ProductCategory {...props} />
    </ErrorBoundary>
  );
}
