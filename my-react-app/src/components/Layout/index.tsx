import ErrorBoundary from "components/ErrorBoundary";
import { Layout } from "./Layout";

export default function LayoutIndex(props: any) {
  return (
    <ErrorBoundary>
      <Layout {...props} />
    </ErrorBoundary>
  );
}
