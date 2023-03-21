import ErrorBoundary from "components/ErrorBoundary";
import { FloatingButton } from "./FloatingButton";

export default function FloatingButtonIndex(props: any) {
  return (
    <ErrorBoundary>
      <FloatingButton {...props} />
    </ErrorBoundary>
  );
}
