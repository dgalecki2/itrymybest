export function useInput({ error, touched }: any) {
  const withError = error && touched;

  return {
    withError,
  };
}
