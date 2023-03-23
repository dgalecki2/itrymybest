import ErrorBoundary from "components/ErrorBoundary";
import { Input } from "./Input";
import { InputInterface } from "./Input.interface";

export default function InputIndex(props: InputInterface) {
  return (
    <ErrorBoundary>
      <Input {...props} />
    </ErrorBoundary>
  );
}
