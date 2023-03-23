import ErrorBoundary from "components/ErrorBoundary";
import { Button } from "./Button";
import { ButtonInterface } from "./Button.interface";

export default function ButtonIndex(props: ButtonInterface) {
  return (
    <ErrorBoundary>
      <Button {...props} />
    </ErrorBoundary>
  );
}
