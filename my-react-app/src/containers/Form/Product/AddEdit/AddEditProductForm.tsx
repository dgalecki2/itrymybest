import { Form } from "components/Form/Form";
import { Heading } from "components/Heading/Heading";
import { useAddEditProductForm } from "./useAddEditProductForm";

export function AddEditProductForm({ setIsModalVisible }: any) {
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
