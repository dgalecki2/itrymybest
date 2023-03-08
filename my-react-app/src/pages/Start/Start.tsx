import { Heading } from "components/Heading/Heading";
import { ProductsList } from "components/ProductsList/ProductsList";

export function StartPage() {
  return (
    <>
      <Heading level={1}>Shopping list</Heading>
      <br />
      <ProductsList />
    </>
  );
}
