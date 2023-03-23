import Product from "containers/Product";
import { useEffect, useState } from "react";
import { useApiContext } from "utils/apiContext";
import {
  UseProductCategoryInterface,
  UseProductCategoryUseApiContextInterface,
} from "./ProductCategory.interface";

export function useProductCategory({ category }: UseProductCategoryInterface) {
  const {
    measureUnitsList,
    productsList,
    removeProduct,
    setProductToEditId,
    toggleProductBoughtStatus,
  }: UseProductCategoryUseApiContextInterface = useApiContext();

  const currentCategoryProducts = productsList.filter(
    (product) => +product.categoryId === +category.value,
  );
  const currentCategoryAllProductsQuantity = currentCategoryProducts.length;
  const currentCategoryUnboughtProductsQuantity =
    currentCategoryProducts.filter((product) => +product.isBought === 0).length;

  const [isCategoryVisible, setIsCategoryVisible] = useState(true);

  const handleHeadingClick = () => setIsCategoryVisible((v) => !v);
  const hideCategoryProducts = () => setIsCategoryVisible(false);

  const categoryProducts = productsList
    .filter((product) => +product.categoryId === +category.value)
    .map((product) => {
      const measureUnitName =
        measureUnitsList.find(
          (measureUnit) => +product.measureUnitId === +measureUnit.value,
        )?.text || "";
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
    });

  useEffect(() => {
    if (currentCategoryUnboughtProductsQuantity === 0) {
      hideCategoryProducts();
    }
  }, [currentCategoryUnboughtProductsQuantity]);

  return {
    categoryProducts,
    currentCategoryAllProductsQuantity,
    currentCategoryUnboughtProductsQuantity,
    handleHeadingClick,
    isCategoryVisible,
  };
}
