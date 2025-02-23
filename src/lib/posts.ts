import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export function loadPost(slug: string) {
  const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "src", "content", fileName));
}

export async function getPost(
  slug: string
): Promise<{ frontmatter: Frontmatter; content: React.ReactNode }> {
  const source = loadPost(slug);

  return await compileMDX({
    source: source,
    options: { parseFrontmatter: true },
  });
}

export async function getPosts({
  sortByData = false,
  page = 1,
  limit = 10,
  tags = [],
} = {}) {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "content"));

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const { frontmatter } = await getPost(fileName);

      return { frontmatter, slug: fileName.replace(".mdx", "") };
    })
  );

  let filteredPosts = posts;

  if (tags) {
    filteredPosts = filteredPosts.filter((post) =>
      post.frontmatter.tags.some((tag) => post.frontmatter.tags.includes(tag))
    );
  }

  return filteredPosts;
}
