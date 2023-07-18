import FilterablePosts from "@/components/filterablePosts";
import { getAllPosts } from "@/service/posts";
import extractCategories from "@/utils/extractCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "블로그 글들",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = extractCategories(posts);

  return <FilterablePosts posts={posts} categories={categories} />;
}
