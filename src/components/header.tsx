import Link from "next/link";
import Navigation from "./navigation";
import ThemeToggle from "./theme-toggle";

export default async function Header() {
  return (
    <header className="flex justify-between mt-4 py-4 md:items-center">
      <div className="flex items-center md:space-x-12">
        <article className="hidden md:block">
          <Link className="text-xl" href="/">
            {"Han's Blog"}
          </Link>
        </article>
        <Navigation />
      </div>
      <article>
        <ThemeToggle />
      </article>
    </header>
  );
}
