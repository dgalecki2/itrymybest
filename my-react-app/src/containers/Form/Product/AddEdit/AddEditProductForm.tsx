import Form from "components/Form";
import Heading from "components/Heading";
import { AddEditProductFormInterface } from "./AddEditProductForm.interface";
import { useAddEditProductForm } from "./useAddEditProductForm";

export function AddEditProductForm({
  setIsModalVisible,
}: AddEditProductFormInterface) {
  const { fields, headingText, initialValues, onCancel, onSubmit } =
    useAddEditProductForm({ setIsModalVisible });

  return (
    <>
      <Heading level={2}>{headingText}</Heading>
      <Form
        fields={fields}
        initialValues={initialValues}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    </>
  );
}
