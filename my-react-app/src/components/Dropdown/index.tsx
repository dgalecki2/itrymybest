import ErrorBoundary from "components/ErrorBoundary";
import { Dropdown } from "./Dropdown";

export default function DropdownIndex(props: any) {
  return (
    <ErrorBoundary>
      <Dropdown {...props} />
    </ErrorBoundary>
  );
}
