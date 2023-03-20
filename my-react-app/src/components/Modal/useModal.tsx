import { useState } from "react";
import { useApiContext } from "utils/apiContext";

export function useModal({ onTriggerClick }: any) {
  const { setProductToEditId }: any = useApiContext();

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
