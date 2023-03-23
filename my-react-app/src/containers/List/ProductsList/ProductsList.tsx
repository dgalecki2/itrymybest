import ProductCategory from "containers/Category/ProductCategory";
import { ProductCategoryDetailsInterface } from "./ProductsList.interface";
import { useProductsList } from "./useProductsList";

export function ProductsList() {
  const { categoriesList, productsList } = useProductsList();

  return (
    <>
      {categoriesList.map((category: ProductCategoryDetailsInterface) => {
        return (
          <ProductCategory
            category={category}
            key={category.value}
            productsList={productsList}
          />
        );
      })}
    </>
  );
}
