import { Heading } from "components/Heading/Heading";
import { useApiContext } from "utils/apiContext";

export default function useProductsList() {
  const {
    categoriesList,
    measureUnitsList,
    productsList,
    removeProduct,
    setProductToEditId,
    toggleProductBoughtStatus,
  }: any = useApiContext();

  const preparedProductsList = categoriesList.map(
    (category: { text: string; value: number }) => {
      return (
        <div key={category.value}>
          <Heading level={2}>{category.text}:</Heading>
          {productsList
            .filter((product: any) => +product.categoryId === +category.value)
            .map((product: any) => {
              const measureUnitName = measureUnitsList.find(
                (measureUnit: any) =>
                  +product.measureUnitId === +measureUnit.value,
              )?.text;
              return (
                <>
                  <p
                    key={product.name}
                    onClick={() => {
                      toggleProductBoughtStatus(product.id);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      style={
                        product.isBought
                          ? { textDecorationLine: "line-through" }
                          : {}
                      }
                    >{`${product.name} - ${product.quantity} ${measureUnitName}`}</span>{" "}
                    <span
                      onClick={(event: any) => {
                        event.stopPropagation();
                        setProductToEditId(product.id);
                      }}
                      style={{ cursor: "pointer", display: "inline" }}
                    >
                      ✏️
                    </span>
                    <span
                      onClick={(event: any) => {
                        event.stopPropagation();
                        removeProduct(product.id);
                      }}
                      style={{ cursor: "pointer", display: "inline" }}
                    >
                      🗑️
                    </span>
                  </p>
                </>
              );
            })}
          <br />
        </div>
      );
    },
  );

  return {
    preparedProductsList,
  };
}
