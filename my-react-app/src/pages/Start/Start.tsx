import { FloatingButton } from "components/FloatingButton/FloatingButton";
import { Heading } from "components/Heading/Heading";
import { Modal } from "components/Modal/Modal";
import { AddEditProductForm } from "containers/Form/Product/AddEdit/AddEditProductForm";
import { ProductsList } from "containers/List/ProductsList/ProductsList";
import { useStart } from "./useStart";

export function StartPage() {
  useStart();

  return (
    <>
      <Heading level={1}>Shopping list 🛒</Heading>
      <ProductsList />
      <Modal trigger={<FloatingButton />}>
        <AddEditProductForm />
      </Modal>
    </>
  );
}
