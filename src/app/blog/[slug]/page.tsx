import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  try {
    const { frontmatter } = await getPost((await params).slug);
    return frontmatter;
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  let post;

  try {
    post = await getPost(slug);
  } catch (error) {
    console.log(error);
    notFound();
  }

  return <article className="prose dark:prose-invert">{post.content}</article>;
}
