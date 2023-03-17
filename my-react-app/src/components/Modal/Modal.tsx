import { useModal } from "./useModal";
import "./Modal.scss";

export function Modal({ children, trigger }: any) {
  const { handleCloseIconClick, handleTriggerClick, isModalVisible } =
    useModal();

  return (
    <>
      <div
        className="modal__trigger"
        onClick={handleTriggerClick}
      >
        {trigger}
      </div>
      {isModalVisible && (
        <div className="modal__containerExternal">
          <div className="modal__container">
            <span
              className="modal__closeIcon"
              onClick={handleCloseIconClick}
            >
              &times;
            </span>
            <div className="modal__content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
