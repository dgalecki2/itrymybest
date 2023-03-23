import ErrorBoundary from "components/ErrorBoundary";
import { Paragraph } from "./Paragraph";
import { ParagraphInterface } from "./Paragraph.interface";

export default function ParagraphIndex(props: ParagraphInterface) {
  return (
    <ErrorBoundary>
      <Paragraph {...props} />
    </ErrorBoundary>
  );
}
