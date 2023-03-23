export interface CategoriesListInterface {
  icon?: React.ReactNode;
  text: string;
  value: string;
}

export interface ProductCategoryDetailsInterface {
  icon?: React.ReactNode;
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

export interface UseProductsListApiContextInterface {
  categoriesList: CategoriesListInterface[];
  productsList: ProductsListInterface[];
}
