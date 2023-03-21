import ErrorBoundary from "components/ErrorBoundary";
import { Modal } from "./Modal";

export default function ModalIndex(props: any) {
  return (
    <ErrorBoundary>
      <Modal {...props} />
    </ErrorBoundary>
  );
}
