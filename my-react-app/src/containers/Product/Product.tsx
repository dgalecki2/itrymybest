import { Image } from "components/Image/Image";
import { Modal } from "components/Modal/Modal";
import { Paragraph } from "components/Paragraph/Paragraph";
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
