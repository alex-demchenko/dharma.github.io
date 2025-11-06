import Image from "next/image";
import horizontalLine from "../assets/horizontal-line.png";

export function HorizontalLine() {
  return (
    <Image
      src={horizontalLine}
      alt="horizontal line"
      quality={100}
      width={400}
    />
  );
}
