import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-4 border-green-500 mx-4 my-8 p-5">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
