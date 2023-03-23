import Form from "components/Form";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import { RemoveProductFormInterface } from "./RemoveProductForm.interface";
import { useRemoveProductForm } from "./useRemoveProductForm";

export function RemoveProductForm({
  onSubmit,
  setIsModalVisible,
}: RemoveProductFormInterface) {
  const { onCancel, onSubmitFromHook } = useRemoveProductForm({
    onSubmit,
    setIsModalVisible,
  });

  return (
    <>
      <Heading level={1}>Confirm product deletion</Heading>
      <Paragraph>Are you sure you want to remove selected product?</Paragraph>
      <Form
        fields={[]}
        onCancel={onCancel}
        onSubmit={onSubmitFromHook}
      />
    </>
  );
}
