import ErrorBoundary from "components/ErrorBoundary";
import { ProductsList } from "./ProductsList";

export default function ProductsListIndex(props: any) {
  return (
    <ErrorBoundary>
      <ProductsList {...props} />
    </ErrorBoundary>
  );
}
