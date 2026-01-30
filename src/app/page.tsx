import { readFileSync } from "node:fs";

export default function Home() {
  const content = readFileSync("./src/app/content.html").toString();

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

