import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "История Буддизма в датах",
};

export default function Page() {
  return <Content />;
}
