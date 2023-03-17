import { useState } from "react";

export function useModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseIconClick = () => setIsModalVisible(false);
  const handleTriggerClick = () => setIsModalVisible(true);

  return {
    handleCloseIconClick,
    handleTriggerClick,
    isModalVisible,
  };
}
