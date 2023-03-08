import { Heading } from "components/Heading/Heading";
import { useApiContext } from "utils/apiContext";

export default function useProductsList() {
  const { categoriesList, measureUnitsList, productsList }: any =
    useApiContext();

  const preparedProductsList = categoriesList.map(
    (category: { id: number; name: string }) => {
      return (
        <div key={category.id}>
          <Heading level={2}>{category.name}:</Heading>
          {productsList
            .filter((product: any) => +product.categoryId === +category.id)
            .map((product: any) => {
              const measureUnitName = measureUnitsList.find(
                (measureUnit: any) =>
                  +product.measureUnitId === +measureUnit.id,
              )?.name;
              return (
                <p
                  key={product.id}
                  style={
                    product.isBought
                      ? { textDecorationLine: "line-through" }
                      : {}
                  }
                >{`${product.name} - ${product.quantity} ${measureUnitName}`}</p>
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
