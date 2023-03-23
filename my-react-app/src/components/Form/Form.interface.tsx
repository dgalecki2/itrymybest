export interface FormFieldInterface {
  elementType: string;
  format?: (value: string) => string;
  formatOnBlur?: boolean;
  label: string;
  name: string;
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => string;
  options?: {
    icon?: React.ReactNode;
    text: string;
    value: string;
  }[];
  required: boolean;
  validatorName?: string;
}

export interface FormInitialValueInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}

export interface FormInterface {
  fields: FormFieldInterface[];
  initialValues?: FormInitialValueInterface;
  onCancel: () => void;
  onSubmit: (values: ProductInterface) => void;
}

export interface ProductInterface {
  categoryId: number;
  id: number;
  isBought: number;
  measureUnitId: number;
  name: string;
  quantity: number;
}
