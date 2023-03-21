import ErrorBoundary from "components/ErrorBoundary";
import { Button } from "./Button";

export default function ButtonIndex(props: any) {
  return (
    <ErrorBoundary>
      <Button {...props} />
    </ErrorBoundary>
  );
}
