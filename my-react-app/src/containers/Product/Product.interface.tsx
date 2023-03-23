export interface ProductDetailsInterface {
  categoryId: number;
  id: number;
  imageUrl?: string;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}

export interface ProductInterface {
  measureUnitName: string;
  product: ProductDetailsInterface;
  removeProduct: (productId: number) => void;
  setProductToEditId: (productId: number) => void;
  toggleProductBoughtStatus: (productId: number) => void;
}
