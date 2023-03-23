import Image from "components/Image";
import Modal from "components/Modal";
import Paragraph from "components/Paragraph";
import ProductIcon from "components/ProductIcon";
import ProductName from "components/ProductName";
import AddEditProductForm from "containers/Form/Product/AddEdit";
import RemoveProductForm from "containers/Form/Product/Remove";
import { ProductInterface } from "./Product.interface";
import "./Product.scss";

export function Product({
  measureUnitName,
  product,
  removeProduct,
  setProductToEditId,
  toggleProductBoughtStatus,
}: ProductInterface) {
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
          {product.imageUrl && (
            <Modal trigger={<ProductIcon>👀</ProductIcon>}>
              <Image
                alt={`Image of ${product.name}`}
                src={product.imageUrl}
              />
              <Paragraph>{product.name} ☝️</Paragraph>
            </Modal>
          )}
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
