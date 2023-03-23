import { Dispatch, SetStateAction } from "react";

interface ProductInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}

export interface UseStartUseApiContextInterface {
  setProductsList: Dispatch<SetStateAction<ProductInterface[]>>;
}
