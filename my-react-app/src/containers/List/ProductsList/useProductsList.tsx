import { useApiContext } from "utils/apiContext";

export default function useProductsList() {
  const {
    categoriesList,
    measureUnitsList,
    productsList,
    removeProduct,
    setProductToEditId,
    toggleProductBoughtStatus,
  }: any = useApiContext();

  return {
    categoriesList,
    measureUnitsList,
    productsList,
    removeProduct,
    setProductToEditId,
    toggleProductBoughtStatus,
  };
}
