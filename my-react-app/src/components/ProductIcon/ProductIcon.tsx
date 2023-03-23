import { ProductIconInterface } from "./ProductIcon.interface";
import "./ProductIcon.scss";

export function ProductIcon({ children, onClick }: ProductIconInterface) {
  return (
    <span
      className="productIcon__icon"
      onClick={onClick}
    >
      {children}
    </span>
  );
}
