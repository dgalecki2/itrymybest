import { ImageInterface } from "./Image.interface";
import "./Image.scss";

export function Image({ alt = "Image", src }: ImageInterface) {
  return (
    <img
      alt={alt}
      className="image__image"
      src={src}
    />
  );
}
