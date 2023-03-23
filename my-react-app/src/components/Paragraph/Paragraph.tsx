import { ParagraphInterface } from "./Paragraph.interface";
import "./Paragraph.scss";

export function Paragraph({ children }: ParagraphInterface) {
  return <p className="paragraph__paragraph">{children}</p>;
}
