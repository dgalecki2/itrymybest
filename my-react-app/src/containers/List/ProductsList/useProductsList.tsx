import { useApiContext } from "utils/apiContext";
import { UseProductsListApiContextInterface } from "./ProductsList.interface";

export function useProductsList() {
  const { categoriesList, productsList }: UseProductsListApiContextInterface =
    useApiContext();

  return {
    categoriesList,
    productsList,
  };
}
