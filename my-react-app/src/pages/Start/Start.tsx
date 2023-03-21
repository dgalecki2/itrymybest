import FloatingButton from "components/FloatingButton";
import Heading from "components/Heading";
import Modal from "components/Modal";
import AddEditProductForm from "containers/Form/Product/AddEdit";
import ProductsList from "containers/List/ProductsList";
import { useStart } from "./useStart";

export function Start() {
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
