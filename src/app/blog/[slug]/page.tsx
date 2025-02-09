import type { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: Promise<{ slug: string }>;
};

const titles: { [key: string]: string } = {
  first: "First Blog",
  second: "Second Blog",
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const description = (await parent).description ?? "Description Blog";

  return {
    title: titles[slug] || "Blog Post",
    description: description,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={"# Hello Word"} />
    </article>
  );
}
