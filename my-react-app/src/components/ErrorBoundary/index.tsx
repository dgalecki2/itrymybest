import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorBoundaryInterface } from "./ErrorBoundary.interface";

export default function ErrorBoundaryIndex({
  children,
}: ErrorBoundaryInterface) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
