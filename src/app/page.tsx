import { readFileSync } from "node:fs";

export default function Home() {
  const content = readFileSync(
    "D:/Work/GitHub/dharma.github.io/src/app/content.html"
  ).toString();

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

