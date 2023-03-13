import { Heading } from "components/Heading/Heading";
import { Product } from "containers/Product/Product";
import useProductsList from "./useProductsList";
import "./ProductsList.scss";

export function ProductsList() {
  const {
    categoriesList,
    measureUnitsList,
    productsList,
    removeProduct,
    setProductToEditId,
    toggleProductBoughtStatus,
  } = useProductsList();

  return categoriesList.map((category: { text: string; value: number }) => {
    return (
      <div key={category.value}>
        <Heading level={2}>{category.text}:</Heading>
        <div className="productsList__container">
          {productsList
            .filter((product: any) => +product.categoryId === +category.value)
            .map((product: any) => {
              const measureUnitName = measureUnitsList.find(
                (measureUnit: any) =>
                  +product.measureUnitId === +measureUnit.value,
              ).text;
              return (
                <Product
                  key={product.name}
                  measureUnitName={measureUnitName}
                  product={product}
                  removeProduct={removeProduct}
                  setProductToEditId={setProductToEditId}
                  toggleProductBoughtStatus={toggleProductBoughtStatus}
                />
              );
            })}
        </div>
        <br />
      </div>
    );
  });
}
