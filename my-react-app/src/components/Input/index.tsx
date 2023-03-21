import ErrorBoundary from "components/ErrorBoundary";
import { Input } from "./Input";

export default function InputIndex(props: any) {
  return (
    <ErrorBoundary>
      <Input {...props} />
    </ErrorBoundary>
  );
}
