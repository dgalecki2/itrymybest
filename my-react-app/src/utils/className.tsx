import { clsx } from "clsx";
import { RenderClassNameInterface } from "./className.interface";

export function renderClassName({
  constant,
  variable,
}: RenderClassNameInterface) {
  return clsx(constant, variable);
}
