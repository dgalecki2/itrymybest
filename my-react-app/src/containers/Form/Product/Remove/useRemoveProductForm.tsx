import { UseRemoveProductFormInterface } from "./RemoveProductForm.interface";

export function useRemoveProductForm({
  onSubmit,
  setIsModalVisible,
}: UseRemoveProductFormInterface) {
  const onCancel = () => {
    setIsModalVisible && setIsModalVisible(false);
  };
  const onSubmitFromHook = () => {
    onSubmit();
    setIsModalVisible && setIsModalVisible(false);
  };

  return {
    onCancel,
    onSubmitFromHook,
  };
}
