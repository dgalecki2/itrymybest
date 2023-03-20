import { Modal } from "components/Modal/Modal";
import { ProductIcon } from "components/ProductIcon/ProductIcon";
import { ProductName } from "components/ProductName/ProductName";
import { AddEditProductForm } from "containers/Form/Product/AddEdit/AddEditProductForm";
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
          <Modal trigger={<ProductIcon>🗑️</ProductIcon>}>
            <RemoveProductForm onSubmit={() => removeProduct(product.id)} />
          </Modal>
          <ProductName
            measureUnitName={measureUnitName}
            product={product}
          />
          <Modal
            onTriggerClick={() => setProductToEditId(product.id)}
            trigger={<ProductIcon>✏️</ProductIcon>}
          >
            <AddEditProductForm />
          </Modal>
        </div>
        <div className="product__rightContainer">
          <ProductIcon onClick={() => toggleProductBoughtStatus(product.id)}>
            {+product.isBought === 1 ? <>❌</> : <>✅</>}
          </ProductIcon>
        </div>
      </div>
    </>
  );
}
