import { ELEMENT_TYPE } from "constants/elementType";
import { VALIDATOR_NAME } from "constants/validatorName";
import { trimValue } from "./formatValue";

export const categoryId = ({ categoriesList = [] }: any) => ({
  elementType: ELEMENT_TYPE.DROPDOWN,
  label: "Category",
  name: "categoryId",
  options: categoriesList,
  required: true,
});

export const isBought = () => ({
  elementType: ELEMENT_TYPE.CHECKBOX,
  label: "Is bought?",
  name: "isBought",
  required: false,
  validatorName: VALIDATOR_NAME.IS_BOUGHT,
});

export const measureUnitId = ({ measureUnitsList = [] }: any) => ({
  elementType: ELEMENT_TYPE.DROPDOWN,
  label: "Measure Unit",
  name: "measureUnitId",
  options: measureUnitsList,
  required: true,
});

export const name = () => ({
  elementType: ELEMENT_TYPE.INPUT,
  format: (value = "") => trimValue(value),
  formatOnBlur: true,
  label: "Name",
  name: "name",
  required: true,
  validatorName: VALIDATOR_NAME.PRODUCT_NAME,
});

export const quantity = () => ({
  elementType: ELEMENT_TYPE.INPUT,
  format: (value = "") => trimValue(value),
  formatOnBlur: false,
  label: "Quantity",
  name: "quantity",
  onChange: (event: any) => event.target.value,
  required: true,
  validatorName: VALIDATOR_NAME.PRODUCT_QUANTITY,
});
