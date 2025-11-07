import { ScrollText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Рекомедуемая последовательность изучения Буддизма:</p>
      <p>
        <Link
          href="/ru/articles/varieties-of-buddhism"
          className="inline-flex items-center gap-2"
        >
          <ScrollText /> Разновидности Буддизма
        </Link>
      </p>
    </div>
  );
}

