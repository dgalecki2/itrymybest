import ErrorBoundary from "components/ErrorBoundary";
import { Dropdown } from "./Dropdown";
import { DropdownInterface } from "./Dropdown.interface";

export default function DropdownIndex(props: DropdownInterface) {
  return (
    <ErrorBoundary>
      <Dropdown {...props} />
    </ErrorBoundary>
  );
}
