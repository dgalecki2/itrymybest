import { LayoutInterface } from "./Layout.interface";
import "./Layout.scss";

export function Layout({ children }: LayoutInterface) {
  return <div className="layout__container">{children}</div>;
}
