import ErrorBoundary from "components/ErrorBoundary";
import { Image } from "./Image";

export default function ImageIndex(props: any) {
  return (
    <ErrorBoundary>
      <Image {...props} />
    </ErrorBoundary>
  );
}
