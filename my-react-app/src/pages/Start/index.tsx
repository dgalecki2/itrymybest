import ErrorBoundary from "components/ErrorBoundary";
import { Start } from "./Start";

export default function StartIndex() {
  return (
    <ErrorBoundary>
      <Start />
    </ErrorBoundary>
  );
}
