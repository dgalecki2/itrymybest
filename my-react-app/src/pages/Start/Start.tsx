import { Heading } from "components/Heading/Heading";
import { AddEditProductForm } from "containers/Form/Product/AddEdit/AddEditProductForm";
import { ProductsList } from "containers/List/ProductsList/ProductsList";

export function StartPage() {
  return (
    <>
      <Heading level={1}>Shopping list</Heading>
      <br />
      <ProductsList />
      <br />
      <AddEditProductForm />
    </>
  );
}
