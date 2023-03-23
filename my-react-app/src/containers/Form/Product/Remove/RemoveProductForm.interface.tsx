export interface RemoveProductFormInterface {
  onSubmit: () => void;
  setIsModalVisible?: () => void;
}

export interface UseRemoveProductFormInterface {
  onSubmit: () => void;
  setIsModalVisible?: (newValue: boolean) => void;
}
