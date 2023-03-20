import { useEffect } from "react";
import { useApiContext } from "utils/apiContext";

export function useStart() {
  const { setProductsList }: any = useApiContext();

  useEffect(() => {
    setProductsList((list: any) => {
      const newList = [...list];
      newList
        .sort((item1, item2) => item1.name.localeCompare(item2.name))
        .sort((item1, item2) => +item1.isBought - +item2.isBought);
      return newList;
    });
  }, [setProductsList]);

  return {};
}
