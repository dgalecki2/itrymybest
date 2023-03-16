import { ELEMENT_TYPE } from "constants/elementType";
import { FORM_MODE } from "constants/formMode";
import { VALIDATOR_NAME } from "constants/validatorName";
import { useApiContext } from "utils/apiContext";
import { trimValue } from "utils/formatValue";

export function useAddEditProductForm({ mode }: any) {
  const { categoriesList, measureUnitsList, setProductsList }: any =
    useApiContext();

  const fields: any[] = [
    {
      elementType: ELEMENT_TYPE.DROPDOWN,
      label: "Category",
      name: "categoryId",
      options: categoriesList,
      required: true,
    },
    {
      elementType: ELEMENT_TYPE.CHECKBOX,
      label: "Is bought?",
      name: "isBought",
      required: false,
      validatorName: VALIDATOR_NAME.IS_BOUGHT,
    },
    {
      elementType: ELEMENT_TYPE.DROPDOWN,
      label: "Measure Unit",
      name: "measureUnitId",
      options: measureUnitsList,
      required: true,
    },
    {
      elementType: ELEMENT_TYPE.INPUT,
      format: (value = "") => trimValue(value),
      formatOnBlur: true,
      label: "Name",
      name: "name",
      required: true,
      validatorName: VALIDATOR_NAME.PRODUCT_NAME,
    },
    {
      elementType: ELEMENT_TYPE.INPUT,
      format: (value = "") => trimValue(value),
      formatOnBlur: false,
      label: "Quantity",
      name: "quantity",
      onChange: (e: any) => e.target.value,
      required: true,
      validatorName: VALIDATOR_NAME.PRODUCT_QUANTITY,
    },
  ];

  const onSubmit = (values: any) => {
    if (mode === FORM_MODE.ADD) {
      setProductsList((list: any) => [
        ...list,
        {
          categoryId: values.categoryId,
          id: Math.floor(Math.random() * 1000000),
          isBought: values?.isBought || false,
          measureUnitId: values.measureUnitId,
          name: values.name,
          quantity: values.quantity,
        },
      ]);
      return;
    }
    setProductsList((list: any) => {
      const foundProductIndex = list.findIndex(
        (product: any) => +product.id === +values.id,
      );
      let newList = [...list];
      newList[foundProductIndex] = values;
      return newList;
    });
  };

  return {
    fields,
    onSubmit,
  };
}
