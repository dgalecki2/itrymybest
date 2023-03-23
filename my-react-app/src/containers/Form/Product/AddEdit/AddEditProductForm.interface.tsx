import { Dispatch, SetStateAction } from "react";

export interface AddEditProductFormInterface {
  setIsModalVisible?: () => void;
}

export interface ProductInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}

export interface CategoriesListInterface {
  icon?: React.ReactNode;
  text: string;
  value: string;
}

export interface MeasureUnitsListInterface {
  text: string;
  value: string;
}

export interface ProductsListInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}

export interface UseAddEditProductApiContextFormInterface {
  categoriesList: CategoriesListInterface[];
  measureUnitsList: MeasureUnitsListInterface[];
  productToEditId: number;
  productsList: ProductsListInterface[];
  setProductToEditId: (productId: number) => void;
  setProductsList: Dispatch<SetStateAction<ProductInterface[]>>;
}

export interface UseAddEditProductFormInterface {
  setIsModalVisible?: (newValue: boolean) => void;
}
