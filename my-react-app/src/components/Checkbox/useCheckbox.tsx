export function useCheckbox({ error, touched }: any) {
  const withError = error && touched;

  return {
    withError,
  };
}
