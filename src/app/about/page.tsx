import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="border-4 border-red-500">
      <h1>Page: About</h1>
    </article>
  );
}
