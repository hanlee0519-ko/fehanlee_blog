import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function BlogPostsPage() {
  const posts = await getPosts();

  return (
    <article>
      <h1 className="mb-8 text-xl">Recent Posts</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Stay up to date with most recent posts
      </p>

      <hr />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
            >
              {post.frontmatter.title}
              <p className="text-gray-400 text-sm mt-2">
                {post.frontmatter.date}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
