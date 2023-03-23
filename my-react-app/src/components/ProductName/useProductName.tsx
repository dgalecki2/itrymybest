import { renderClassName } from "utils/className";
import { UseProductNameInterface } from "./ProductName.interface";

export function useProductName({
  measureUnitName,
  product,
}: UseProductNameInterface) {
  const className = renderClassName({
    constant: "productName__name",
    variable: {
      "productName__name--bought": +product.isBought === 1,
    },
  });
  const productDetails = `${product.name} - ${product.quantity} ${measureUnitName}`;

  return {
    className,
    productDetails,
  };
}
