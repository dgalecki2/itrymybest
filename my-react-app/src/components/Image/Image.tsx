import "./Image.scss";

export function Image({ alt = "Image", src }: any) {
  return (
    <img
      alt={alt}
      className="image__image"
      src={src}
    />
  );
}
