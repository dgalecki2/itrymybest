export interface MeasureUnitsListInterface {
  text: string;
  value: string;
}

interface ProductCategoryDetailsInterface {
  icon?: React.ReactNode;
  text: string;
  value: string;
}

export interface ProductCategoryInterface {
  category: ProductCategoryDetailsInterface;
  productsList: ProductsListInterface[];
}

export interface ProductsListInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}

export interface UseProductCategoryInterface {
  category: ProductCategoryDetailsInterface;
}

export interface UseProductCategoryUseApiContextInterface {
  measureUnitsList: MeasureUnitsListInterface[];
  productsList: ProductsListInterface[];
  removeProduct: (productId: number) => void;
  setProductToEditId: (productId: number) => void;
  toggleProductBoughtStatus: (productId: number) => void;
}
