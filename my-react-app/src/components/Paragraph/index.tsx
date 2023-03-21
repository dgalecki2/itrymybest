import ErrorBoundary from "components/ErrorBoundary";
import { Paragraph } from "./Paragraph";

export default function ParagraphIndex(props: any) {
  return (
    <ErrorBoundary>
      <Paragraph {...props} />
    </ErrorBoundary>
  );
}
