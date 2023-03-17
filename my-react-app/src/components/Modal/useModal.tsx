import { useState } from "react";

export function useModal({ onTriggerClick }: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseIconClick = () => {
    setIsModalVisible(false);
  };
  const handleTriggerClick = () => {
    setIsModalVisible(true);
    onTriggerClick();
  };

  return {
    handleCloseIconClick,
    handleTriggerClick,
    isModalVisible,
    setIsModalVisible,
  };
}
