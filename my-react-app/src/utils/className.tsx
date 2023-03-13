import { clsx } from "clsx";

export function renderClassName({ constant, variable }: any) {
  return clsx(constant, variable);
}
