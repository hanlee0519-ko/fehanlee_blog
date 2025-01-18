import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="font-mono">
      <ul className="flex flex-col md:flex-row">
        <li className="md:mr-5">
          <Link href="/">Home</Link>
        </li>
        <li className="md:mr-5">
          <Link href="/about">About</Link>
        </li>
        <li className="md:mr-5">
          <Link href="/about/projects">Projects</Link>
        </li>
        <li className="md:flex-none md:ml-auto md:mr-5">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
