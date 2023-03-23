import Heading from "components/Heading";
import { ProductCategoryInterface } from "./ProductCategory.interface";
import { useProductCategory } from "./useProductCategory";
import "./ProductCategory.scss";

export function ProductCategory({ category }: ProductCategoryInterface) {
  const {
    categoryProducts,
    currentCategoryAllProductsQuantity,
    currentCategoryUnboughtProductsQuantity,
    handleHeadingClick,
    isCategoryVisible,
  } = useProductCategory({ category });

  return (
    <div>
      <Heading
        className="productCategory__heading"
        level={2}
        onClick={handleHeadingClick}
      >
        {category.text} ({currentCategoryUnboughtProductsQuantity}/
        {currentCategoryAllProductsQuantity}) {category.icon}
      </Heading>
      {isCategoryVisible && (
        <div className="productCategory__container">{categoryProducts}</div>
      )}
    </div>
  );
}
