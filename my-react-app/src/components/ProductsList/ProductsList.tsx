import useProductsList from "./useProductsList";

export function ProductsList() {
  const { preparedProductsList } = useProductsList();

  return <>{preparedProductsList}</>;
}
