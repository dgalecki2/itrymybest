import ProductCategory from "containers/Category/ProductCategory";
import { useProductsList } from "./useProductsList";

export function ProductsList() {
  const { categoriesList, productsList } = useProductsList();

  return categoriesList.map(
    (category: { icon: any; text: string; value: number }) => {
      return (
        <ProductCategory
          category={category}
          key={category.value}
          productsList={productsList}
        />
      );
    },
  );
}
