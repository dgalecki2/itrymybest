import ErrorBoundary from "components/ErrorBoundary";
import { Layout } from "./Layout";
import { LayoutInterface } from "./Layout.interface";

export default function LayoutIndex(props: LayoutInterface) {
  return (
    <ErrorBoundary>
      <Layout {...props} />
    </ErrorBoundary>
  );
}
