import ErrorBoundary from "components/ErrorBoundary";
import { Start } from "./Start";

export default function StartIndex(props: any) {
  return (
    <ErrorBoundary>
      <Start {...props} />
    </ErrorBoundary>
  );
}
