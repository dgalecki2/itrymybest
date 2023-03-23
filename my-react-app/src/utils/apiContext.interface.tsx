export interface ApiContextProviderInterface {
  children: React.ReactNode;
}

export interface MeasureUnitsListInterface {
  text: string;
  value: string;
}

export interface ProductCategoryDetailsInterface {
  icon: React.ReactElement;
  text: string;
  value: string;
}

export interface ProductInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}
