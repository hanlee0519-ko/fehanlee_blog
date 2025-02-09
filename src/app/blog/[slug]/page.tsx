import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <>Hello! {slug}</>;
}
