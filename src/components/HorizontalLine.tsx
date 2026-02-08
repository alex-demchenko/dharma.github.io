import ExportedImage from "next-image-export-optimizer";
import horizontalLine from "../assets/horizontal-line.png";

export function HorizontalLine() {
  return (
    <ExportedImage
      src={horizontalLine}
      alt="horizontal line"
      width={400}
      preload={true}
    />
  );
}
