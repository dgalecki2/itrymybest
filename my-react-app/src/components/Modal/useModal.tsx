import { useState } from "react";
import { useApiContext } from "utils/apiContext";
import { UseModalInterface } from "./Modal.interface";

export function useModal({ onTriggerClick }: UseModalInterface) {
  const { setProductToEditId } = useApiContext();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseIconClick = () => {
    setProductToEditId(0);
    setIsModalVisible(false);
  };
  const handleTriggerClick = () => {
    setIsModalVisible(true);
    onTriggerClick && onTriggerClick();
  };

  return {
    handleCloseIconClick,
    handleTriggerClick,
    isModalVisible,
    setIsModalVisible,
  };
}
