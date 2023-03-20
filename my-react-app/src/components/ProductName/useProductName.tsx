import { renderClassName } from "utils/className";

export function useProductName({ measureUnitName, product }: any) {
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
