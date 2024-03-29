import { FORM_MODE } from "constants/formMode";
import { useMemo } from "react";
import { useApiContext } from "utils/apiContext";
import {
  categoryId,
  imageUrl,
  isBought,
  measureUnitId,
  name,
  quantity,
} from "utils/formField";
import {
  ProductInterface,
  UseAddEditProductApiContextFormInterface,
  UseAddEditProductFormInterface,
} from "./AddEditProductForm.interface";

export function useAddEditProductForm({
  setIsModalVisible,
}: UseAddEditProductFormInterface) {
  const {
    categoriesList,
    measureUnitsList,
    productToEditId,
    productsList,
    setProductToEditId,
    setProductsList,
  }: UseAddEditProductApiContextFormInterface = useApiContext();

  const mode = useMemo(() => {
    return +productToEditId > 0 ? FORM_MODE.EDIT : FORM_MODE.ADD;
  }, [productToEditId]);
  const renderFormFields = () => {
    const formFields = [];
    formFields.push(
      categoryId({ categoriesList }),
      name(),
      quantity(),
      measureUnitId({ measureUnitsList }),
      imageUrl(),
    );
    if (mode === FORM_MODE.EDIT) {
      formFields.push(isBought());
    }
    return formFields;
  };
  const headingText = `${mode === FORM_MODE.EDIT ? "Edit" : "Add new"} product`;
  const initialValues =
    mode === FORM_MODE.EDIT
      ? productsList.find((item) => +item.id === +productToEditId)
      : undefined;

  const onCancel = () => {
    setProductToEditId(0);
    setIsModalVisible && setIsModalVisible(false);
  };
  const onSubmit = (values: ProductInterface) => {
    if (mode === FORM_MODE.ADD) {
      setProductsList((list) => {
        const newList = [
          ...list,
          {
            ...values,
            id: Math.floor(Math.random() * 1000000),
            isBought: values?.isBought || 0,
          },
        ];
        newList
          .sort((item1, item2) => item1.name.localeCompare(item2.name))
          .sort((item1, item2) => +item1.isBought - +item2.isBought);
        return newList;
      });
      setProductToEditId(0);
      setIsModalVisible && setIsModalVisible(false);
      return;
    }
    setProductsList((list) => {
      const foundProductIndex = list.findIndex(
        (product) => +product.id === +values.id,
      );
      let newList = [...list];
      newList[foundProductIndex] = values;
      newList
        .sort((item1, item2) => item1.name.localeCompare(item2.name))
        .sort((item1, item2) => +item1.isBought - +item2.isBought);
      return newList;
    });
    setProductToEditId(0);
    setIsModalVisible && setIsModalVisible(false);
  };

  return {
    fields: renderFormFields(),
    headingText,
    initialValues,
    onCancel,
    onSubmit,
  };
}
