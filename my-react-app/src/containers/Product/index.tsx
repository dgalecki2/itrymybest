import ErrorBoundary from "components/ErrorBoundary";
import { Product } from "./Product";
import { ProductInterface } from "./Product.interface";

export default function ProductIndex(props: ProductInterface) {
  return (
    <ErrorBoundary>
      <Product {...props} />
    </ErrorBoundary>
  );
}
