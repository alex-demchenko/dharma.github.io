import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Разновидности Буддизма",
};

export default function Page() {
  return <Content />;
}
