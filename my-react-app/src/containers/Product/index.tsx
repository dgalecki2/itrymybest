import ErrorBoundary from "components/ErrorBoundary";
import { Product } from "./Product";

export default function ProductIndex(props: any) {
  return (
    <ErrorBoundary>
      <Product {...props} />
    </ErrorBoundary>
  );
}
