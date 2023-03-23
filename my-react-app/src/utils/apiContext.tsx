import {
  createContext,
  type Dispatch,
  useContext,
  useState,
  SetStateAction,
} from "react";
import {
  ApiContextProviderInterface,
  MeasureUnitsListInterface,
  ProductCategoryDetailsInterface,
  ProductInterface,
} from "./apiContext.interface";

const initialContext = {
  categoriesList: [
    { icon: <>🍎</>, text: "Fruits", value: "1" },
    { icon: <>💦</>, text: "Dairy", value: "2" },
    { icon: <>🍞</>, text: "Bread", value: "3" },
  ],
  measureUnitsList: [
    { text: "kilogram(s)", value: "1" },
    { text: "liter(s)", value: "2" },
    { text: "piece(s)", value: "3" },
  ],
  productToEditId: 0,
  productsList: [
    {
      categoryId: 1,
      id: 1,
      isBought: 0,
      measureUnitId: 1,
      name: "Apples",
      quantity: 3,
    },
    {
      categoryId: 2,
      id: 2,
      isBought: 0,
      measureUnitId: 2,
      name: "Milk",
      quantity: 1,
    },
    {
      categoryId: 3,
      id: 3,
      isBought: 1,
      measureUnitId: 3,
      name: "Bread",
      quantity: 2,
    },
    {
      categoryId: 3,
      id: 4,
      isBought: 0,
      measureUnitId: 3,
      name: "Rolls",
      quantity: 6,
    },
    {
      categoryId: 3,
      id: 5,
      isBought: 0,
      measureUnitId: 3,
      name: "Baguette",
      quantity: 2,
    },
    {
      categoryId: 3,
      id: 6,
      isBought: 1,
      measureUnitId: 3,
      name: "Pita",
      quantity: 3,
    },
  ],
  removeProduct: (productId: number) => {},
  setCategoriesList: (() => {}) as Dispatch<
    SetStateAction<ProductCategoryDetailsInterface[]>
  >,
  setMeasureUnitsList: (() => {}) as Dispatch<
    SetStateAction<MeasureUnitsListInterface[]>
  >,
  setProductToEditId: (() => {}) as Dispatch<SetStateAction<number>>,
  setProductsList: (() => {}) as Dispatch<SetStateAction<ProductInterface[]>>,
  toggleProductBoughtStatus: (productId: number) => {},
};

const ApiContext = createContext(initialContext);

export function ApiContextProvider({ children }: ApiContextProviderInterface) {
  const [categoriesList, setCategoriesList] = useState(
    initialContext.categoriesList,
  );
  const [measureUnitsList, setMeasureUnitsList] = useState(
    initialContext.measureUnitsList,
  );
  const [productToEditId, setProductToEditId] = useState(0);
  const [productsList, setProductsList] = useState(initialContext.productsList);

  const removeProduct = (productId: number) => {
    setProductsList((products: ProductInterface[]) =>
      products.filter((product) => product.id !== productId),
    );
  };
  const toggleProductBoughtStatus = (productId: number) => {
    setProductsList((products: ProductInterface[]) => {
      const foundProductIndex = products.findIndex(
        (product) => +product.id === +productId,
      );
      let newProductsList = [...products];
      newProductsList[foundProductIndex] = {
        ...products[foundProductIndex],
        isBought: +products[foundProductIndex].isBought === 1 ? 0 : 1,
      };
      newProductsList
        .sort((item1, item2) => item1.name.localeCompare(item2.name))
        .sort((item1, item2) => +item1.isBought - +item2.isBought);
      return newProductsList;
    });
  };

  return (
    <ApiContext.Provider
      value={{
        categoriesList,
        measureUnitsList,
        productToEditId,
        productsList,
        removeProduct,
        setCategoriesList,
        setMeasureUnitsList,
        setProductToEditId,
        setProductsList,
        toggleProductBoughtStatus,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider!");
  }
  return context;
}
