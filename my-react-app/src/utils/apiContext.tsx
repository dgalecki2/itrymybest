import {
  createContext,
  type Dispatch,
  useContext,
  useState,
  SetStateAction,
} from "react";

const initialContext = {
  categoriesList: [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Dairy" },
    { id: 3, name: "Bread" },
  ],
  measureUnitsList: [
    { id: 1, name: "kilogram(s)" },
    { id: 2, name: "liter(s)" },
    { id: 3, name: "piece(s)" },
  ],
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
  ],
  setCategoriesList: (() => {}) as Dispatch<SetStateAction<any>>,
  setMeasureUnitsList: (() => {}) as Dispatch<SetStateAction<any>>,
  setProductsList: (() => {}) as Dispatch<SetStateAction<any>>,
};

const ApiContext = createContext(initialContext);

export function ApiContextProvider({ children }: any) {
  const [categoriesList, setCategoriesList] = useState<any>(
    initialContext.categoriesList,
  );
  const [measureUnitsList, setMeasureUnitsList] = useState<any>(
    initialContext.measureUnitsList,
  );
  const [productsList, setProductsList] = useState<any>(
    initialContext.productsList,
  );

  return (
    <ApiContext.Provider
      value={{
        categoriesList,
        measureUnitsList,
        productsList,
        setCategoriesList,
        setMeasureUnitsList,
        setProductsList,
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
