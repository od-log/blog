import { getAllPosts, getFeaturedPosts } from "@/service/posts";
import React from "react";
import PostsGrid from "../postsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="m-4">
      <h2 className="text-2xl font-bold my-2">featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
