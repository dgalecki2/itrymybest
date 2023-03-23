import ErrorBoundary from "components/ErrorBoundary";
import { Modal } from "./Modal";
import { ModalInterface } from "./Modal.interface";

export default function ModalIndex(props: ModalInterface) {
  return (
    <ErrorBoundary>
      <Modal {...props} />
    </ErrorBoundary>
  );
}
