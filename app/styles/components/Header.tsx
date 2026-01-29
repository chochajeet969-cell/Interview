import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Interview</Link>
        <Link href="/interviews">Interviews</Link>
        <Link href="/about">About</Link>
        <Link href="/submit">Submit</Link>
      </nav>
    </header>
  );
}
