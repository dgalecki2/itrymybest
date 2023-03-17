import { Form } from "components/Form/Form";
import { Heading } from "components/Heading/Heading";
import { Paragraph } from "components/Paragraph/Paragraph";

export function RemoveProductForm({
  displayCancelButton = false,
  onSubmit,
  setIsModalVisible,
}: any) {
  return (
    <>
      <Heading level={1}>Confirm product deletion</Heading>
      <Paragraph>Are you sure you want to remove selected product?</Paragraph>
      <Form
        displayCancelButton={displayCancelButton}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onSubmit={() => {
          onSubmit();
          setIsModalVisible(false);
        }}
      />
    </>
  );
}
