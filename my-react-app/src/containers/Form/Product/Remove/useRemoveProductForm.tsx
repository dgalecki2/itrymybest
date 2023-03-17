export function useRemoveProductForm({ onSubmit, setIsModalVisible }: any) {
  const onCancel = () => {
    setIsModalVisible(false);
  };
  const onSubmitFromHook = () => {
    onSubmit();
    setIsModalVisible(false);
  };

  return {
    onCancel,
    onSubmitFromHook,
  };
}
