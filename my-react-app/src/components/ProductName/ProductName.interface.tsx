export interface ProductInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}

export interface ProductNameInterface {
  measureUnitName: string;
  product: ProductInterface;
}

export interface UseProductNameInterface {
  measureUnitName: string;
  product: ProductInterface;
}
