import ErrorBoundary from "components/ErrorBoundary";
import { ProductsList } from "./ProductsList";

export default function ProductsListIndex() {
  return (
    <ErrorBoundary>
      <ProductsList />
    </ErrorBoundary>
  );
}
