import {
  createContext,
  type Dispatch,
  useContext,
  useState,
  SetStateAction,
} from "react";

const initialContext = {
  categoriesList: [
    { icon: <>🍎</>, text: "Fruits", value: 1 },
    { icon: <>💦</>, text: "Dairy", value: 2 },
    { icon: <>🍞</>, text: "Bread", value: 3 },
  ],
  measureUnitsList: [
    { text: "kilogram(s)", value: 1 },
    { text: "liter(s)", value: 2 },
    { text: "piece(s)", value: 3 },
  ],
  productToEditId: 0,
  productsList: [
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
      measureUnitId: 3,
      name: "Bread",
      quantity: 2,
    },
    {
      categoryId: 3,
      id: 4,
      isBought: false,
      measureUnitId: 3,
      name: "Rolls",
      quantity: 6,
    },
  ],
  removeProduct: (() => {}) as Dispatch<SetStateAction<any>>,
  setCategoriesList: (() => {}) as Dispatch<SetStateAction<any>>,
  setMeasureUnitsList: (() => {}) as Dispatch<SetStateAction<any>>,
  setProductToEditId: (() => {}) as Dispatch<SetStateAction<any>>,
  setProductsList: (() => {}) as Dispatch<SetStateAction<any>>,
  toggleProductBoughtStatus: (() => {}) as Dispatch<SetStateAction<any>>,
};

const ApiContext = createContext(initialContext);

export function ApiContextProvider({ children }: any) {
  const [categoriesList, setCategoriesList] = useState<any>(
    initialContext.categoriesList,
  );
  const [measureUnitsList, setMeasureUnitsList] = useState<any>(
    initialContext.measureUnitsList,
  );
  const [productToEditId, setProductToEditId] = useState<number>(0);
  const [productsList, setProductsList] = useState<any>(
    initialContext.productsList,
  );

  const removeProduct = (productId: any) => {
    setProductsList((products: any) =>
      products.filter((product: any) => product.id !== productId),
    );
  };
  const toggleProductBoughtStatus = (productId: any) => {
    setProductsList((products: any) => {
      const foundProductIndex = products.findIndex(
        (product: any) => +product.id === +productId,
      );
      let newProductsList = [...products];
      newProductsList[foundProductIndex] = {
        ...products[foundProductIndex],
        isBought: !products[foundProductIndex].isBought,
      };
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
