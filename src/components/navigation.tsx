import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-4 border-green-500 mx-4 my-8 p-5">
      <ul className="flex">
        <li className="flex-none mr-2">
          <Link href="/">Home</Link>
        </li>
        <li className="flex-none mr-2">
          <Link href="/about">About</Link>
        </li>
        <li className="flex-none mr-2">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="flex-none ml-auto mr-2">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
