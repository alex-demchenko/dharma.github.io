import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Рекомедуемая последовательность изучения Буддизма:</p>
      <p>
        <Link href="/ru/articles/varieties-of-buddhism">
          Разновидности Буддизма
        </Link>
      </p>
    </div>
  );
}

