import { Heading } from "components/Heading/Heading";

export default function useProductsList() {
  const categoriesList = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Dairy" },
    { id: 3, name: "Bread" },
  ];
  const measureUnitsList = [
    { id: 1, name: "kilogram(s)" },
    { id: 2, name: "liter(s)" },
    { id: 3, name: "piece(s)" },
  ];
  const productsList = [
    {
      categoryId: 1,
      id: 1,
      isBought: false,
      measureUnitId: 1,
      name: "Apples",
      quantity: 3,
    },
    {
      categoryId: 2,
      id: 2,
      isBought: false,
      measureUnitId: 2,
      name: "Milk",
      quantity: 1,
    },
    {
      categoryId: 3,
      id: 3,
      isBought: true,
      measureUnitId: 1,
      name: "Bread",
      quantity: 2,
    },
    {
      categoryId: 3,
      id: 4,
      isBought: false,
      measureUnitId: 1,
      name: "Rolls",
      quantity: 6,
    },
  ];
  const preparedProductsList = categoriesList.map((category) => {
    return (
      <div key={category.id}>
        <Heading level={2}>{category.name}:</Heading>
        {productsList
          .filter((product) => +product.categoryId === +category.id)
          .map((product) => {
            const measureUnitName = measureUnitsList.find(
              (measureUnit) => +product.measureUnitId === +measureUnit.id,
            )?.name;
            return (
              <p
                key={product.id}
                style={
                  product.isBought ? { textDecorationLine: "line-through" } : {}
                }
              >{`${product.name} - ${product.quantity} ${measureUnitName}`}</p>
            );
          })}
        <br />
      </div>
    );
  });

  return {
    preparedProductsList,
  };
}
