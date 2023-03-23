import { useEffect } from "react";
import { useApiContext } from "utils/apiContext";
import { UseStartUseApiContextInterface } from "./Start.interface";

export function useStart() {
  const { setProductsList }: UseStartUseApiContextInterface = useApiContext();

  useEffect(() => {
    setProductsList((list) => {
      const newList = [...list];
      newList
        .sort((item1, item2) => item1.name.localeCompare(item2.name))
        .sort((item1, item2) => +item1.isBought - +item2.isBought);
      return newList;
    });
  }, [setProductsList]);

  return {};
}
