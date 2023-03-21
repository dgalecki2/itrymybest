import ErrorBoundary from "components/ErrorBoundary";
import { Heading } from "./Heading";

export default function HeadingIndex(props: any) {
  return (
    <ErrorBoundary>
      <Heading {...props} />
    </ErrorBoundary>
  );
}
