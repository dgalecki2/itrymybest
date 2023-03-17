import { Children, cloneElement, isValidElement, ReactElement } from "react";
import { useModal } from "./useModal";
import "./Modal.scss";

export function Modal({ children, onTriggerClick, trigger }: any) {
  const {
    handleCloseIconClick,
    handleTriggerClick,
    isModalVisible,
    setIsModalVisible,
  } = useModal({ onTriggerClick });

  return (
    <>
      <div onClick={handleTriggerClick}>{trigger}</div>
      {isModalVisible && (
        <div className="modal__containerExternal">
          <div className="modal__container">
            <span
              className="modal__closeIcon"
              onClick={handleCloseIconClick}
            >
              &times;
            </span>
            <div className="modal__content">
              {Children.map(children, (child) =>
                isValidElement(child)
                  ? cloneElement(child as ReactElement, { setIsModalVisible })
                  : child,
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
