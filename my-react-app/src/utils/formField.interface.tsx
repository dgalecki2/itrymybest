import { DropdownOptionInterface } from "components/Dropdown/Dropdown.interface";

export interface CategoriesListInterface {
  icon?: React.ReactNode;
  text: string;
  value: string;
}

export interface CategoryIdInterface {
  categoriesList: CategoriesListInterface[];
}

export interface FormFieldInterface {
  elementType: string;
  label: string;
  name: string;
  options?: DropdownOptionInterface[];
  required: boolean;
}

export interface MeasureUnitIdInterface {
  measureUnitsList: MeasureUnitsListInterface[];
}

export interface MeasureUnitsListInterface {
  text: string;
  value: string;
}
