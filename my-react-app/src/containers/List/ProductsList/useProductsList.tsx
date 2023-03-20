import { useApiContext } from "utils/apiContext";

export default function useProductsList() {
  const { categoriesList, productsList }: any = useApiContext();

  return {
    categoriesList,
    productsList,
  };
}
