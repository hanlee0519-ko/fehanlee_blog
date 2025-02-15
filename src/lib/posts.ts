import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export function loadPost(slug: string) {
  return fs.readFileSync(
    path.join(process.cwd(), "src", "content", `${slug}.mdx`)
  );
}

export async function getPost(slug: string) {
  const source = loadPost(slug);

  return await compileMDX({
    source: source,
    options: { parseFrontmatter: true },
  });
}
