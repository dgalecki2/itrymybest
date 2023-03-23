import ErrorBoundary from "components/ErrorBoundary";
import { Image } from "./Image";
import { ImageInterface } from "./Image.interface";

export default function ImageIndex(props: ImageInterface) {
  return (
    <ErrorBoundary>
      <Image {...props} />
    </ErrorBoundary>
  );
}
