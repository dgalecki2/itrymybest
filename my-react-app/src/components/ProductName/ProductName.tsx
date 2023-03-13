import { useProductName } from "./useProductName";
import "./ProductName.scss";

export function ProductName({ measureUnitName, product }: any) {
  const { className, productDetails } = useProductName({
    measureUnitName,
    product,
  });

  return <span className={className}>{productDetails}</span>;
}
