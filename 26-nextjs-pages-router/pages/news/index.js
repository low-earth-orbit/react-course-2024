import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">News 1</Link>
        </li>
        <li>
          <Link href="/news/2">News 2</Link>
        </li>
        <li>
          <Link href="/news/3">News 3</Link>
        </li>
      </ul>
    </>
  );
}
