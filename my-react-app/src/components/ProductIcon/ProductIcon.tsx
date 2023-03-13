import "./ProductIcon.scss";

export function ProductIcon({ children, onClick }: any) {
  return (
    <span
      className="productIcon__icon"
      onClick={onClick}
    >
      {children}
    </span>
  );
}
