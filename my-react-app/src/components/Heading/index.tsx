import ErrorBoundary from "components/ErrorBoundary";
import { Heading } from "./Heading";
import { HeadingInterface } from "./Heading.interface";

export default function HeadingIndex(props: HeadingInterface) {
  return (
    <ErrorBoundary>
      <Heading {...props} />
    </ErrorBoundary>
  );
}
