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
  newest = true,
  tags = [] as string[] | undefined,
} = {}) {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "content"));

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const { frontmatter } = await getPost(fileName);

      return { frontmatter, slug: fileName.replace(".mdx", "") };
    })
  );

  let filteredPosts = posts;

  if (tags && tags.length > 0) {
    filteredPosts = filteredPosts.filter((post) =>
      post.frontmatter.tags.some((tag) => tags.includes(tag))
    );
  }

  if (newest) {
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);

      return dateB.getTime() - dateA.getTime();
    });
  } else {
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);

      return dateA.getTime() - dateB.getTime();
    });
  }
  return filteredPosts;
}
