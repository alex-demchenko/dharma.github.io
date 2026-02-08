import { CircleAlert } from "lucide-react";
import { readFileSync } from "node:fs";

export default function Home() {
  const content = readFileSync("./src/app/content.html").toString();

  return (
    <div>
      <div className="p-4 border border-gray-200 rounded-lg bg-yellow-100">
        <div className="flex items-center gap-4">
          <CircleAlert />
          <div className="flex flex-col gap-2">
            <div>Content on this page is added every day.</div>
            <div>
              The algorithm of content arrangement is in development and will be
              improved.
            </div>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

