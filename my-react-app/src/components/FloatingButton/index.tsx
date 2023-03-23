import ErrorBoundary from "components/ErrorBoundary";
import { FloatingButton } from "./FloatingButton";

export default function FloatingButtonIndex() {
  return (
    <ErrorBoundary>
      <FloatingButton />
    </ErrorBoundary>
  );
}
