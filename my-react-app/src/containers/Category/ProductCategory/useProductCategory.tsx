import Product from "containers/Product";
import { useEffect, useState } from "react";
import { useApiContext } from "utils/apiContext";

export function useProductCategory({ category }: any) {
  const {
    measureUnitsList,
    productsList,
    removeProduct,
    setProductToEditId,
    toggleProductBoughtStatus,
  }: any = useApiContext();

  const currentCategoryProducts = productsList.filter(
    (product: any) => +product.categoryId === +category.value,
  );
  const currentCategoryAllProductsQuantity = currentCategoryProducts.length;
  const currentCategoryUnboughtProductsQuantity =
    currentCategoryProducts.filter(
      (product: any) => +product.isBought === 0,
    ).length;

  const [isCategoryVisible, setIsCategoryVisible] = useState(true);

  const handleHeadingClick = () => setIsCategoryVisible((v) => !v);
  const hideCategoryProducts = () => setIsCategoryVisible(false);

  const categoryProducts = productsList
    .filter((product: any) => +product.categoryId === +category.value)
    .map((product: any) => {
      const measureUnitName = measureUnitsList.find(
        (measureUnit: any) => +product.measureUnitId === +measureUnit.value,
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
