import { useApiContext } from "utils/apiContext";

export function useProductsList() {
  const { categoriesList, productsList }: any = useApiContext();

  return {
    categoriesList,
    productsList,
  };
}
