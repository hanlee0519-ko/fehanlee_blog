import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className="font-mono">
      <ul className="flex flex-col md:flex-row md:space-x-4">
        <li className={styles.link}>
          <Link href="/blog">blog</Link>
        </li>
        <li className={styles.link}>
          <Link href="/resume">resume</Link>
        </li>
      </ul>
    </nav>
  );
}
