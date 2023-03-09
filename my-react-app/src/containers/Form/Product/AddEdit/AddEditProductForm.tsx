import { Button } from "components/Button/Button";
import { Form } from "components/Form/Form";
import { Heading } from "components/Heading/Heading";
import { BUTTON_TYPE } from "constants/buttonType";
import { FORM_MODE } from "constants/formMode";
import { useEffect, useState } from "react";
import { useApiContext } from "utils/apiContext";
import { useAddEditProductForm } from "./useAddEditProductForm";

export function AddEditProductForm() {
  const { productToEditId, productsList, setProductToEditId }: any =
    useApiContext();

  const mode = +productToEditId > 0 ? FORM_MODE.EDIT : FORM_MODE.ADD;

  const { fields, onSubmit } = useAddEditProductForm({ mode });

  const [displayForm, setDisplayForm] = useState(false);

  const initialValues = productsList.find(
    (item: any) => +item.id === +productToEditId,
  );
  const headingText = `${productToEditId === 0 ? "Add new" : "Edit"} product`;

  useEffect(() => {
    setDisplayForm(productToEditId > 0);
  }, [productToEditId]);

  return (
    <>
      <br />
      <Heading level={2}>{headingText}</Heading>
      {displayForm ? (
        <>
          <br />
          <Form
            fields={fields}
            initialValues={mode === FORM_MODE.EDIT ? initialValues : {}}
            mode={mode}
            onCancel={() => {
              setDisplayForm(false);
              setProductToEditId(0);
            }}
            onSubmit={(values: any) => {
              onSubmit(values);
              setDisplayForm(false);
              setProductToEditId(0);
            }}
          />
        </>
      ) : (
        <Button
          onClick={() => {
            setDisplayForm(true);
          }}
          text="Show form"
          type={BUTTON_TYPE.BUTTON}
        />
      )}
    </>
  );
}
