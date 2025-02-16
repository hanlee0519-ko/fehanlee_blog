import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

interface Frontmatter {
  title: string;
  description: string;
  date: string;
}

export function loadPost(slug: string) {
  const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "src", "content", fileName));
}

export async function getPost(
  slug: string
): Promise<{ frontmatter: Frontmatter }> {
  const source = loadPost(slug);

  return await compileMDX({
    source: source,
    options: { parseFrontmatter: true },
  });
}
