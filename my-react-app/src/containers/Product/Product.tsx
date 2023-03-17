import { Modal } from "components/Modal/Modal";
import { ProductIcon } from "components/ProductIcon/ProductIcon";
import { ProductName } from "components/ProductName/ProductName";
import { RemoveProductForm } from "containers/Form/Product/Remove/RemoveProductForm";
import "./Product.scss";

export function Product({
  measureUnitName,
  product,
  removeProduct,
  setProductToEditId,
  toggleProductBoughtStatus,
}: any) {
  return (
    <>
      <div className="product__container">
        <div className="product__leftContainer">
          <Modal trigger={<>🗑️</>}>
            <RemoveProductForm
              displayCancelButton
              onSubmit={() => removeProduct(product.id)}
            />
          </Modal>
          <ProductName
            measureUnitName={measureUnitName}
            product={product}
          />
          <ProductIcon onClick={() => setProductToEditId(product.id)}>
            ✏️
          </ProductIcon>
        </div>
        <div className="product__rightContainer">
          <ProductIcon onClick={() => toggleProductBoughtStatus(product.id)}>
            {product.isBought ? <>❌</> : <>✅</>}
          </ProductIcon>
        </div>
      </div>
    </>
  );
}
