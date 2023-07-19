import { getAllPosts } from "@/service/posts";
import React from "react";
import PostCard from "../postCard";
import MultiCarousel from "../multiCarousel";

export default async function CarouselPosts() {
  const posts = await getAllPosts();

  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold m-2"> You may like </h2>
      <MultiCarousel>
        {posts.map((post, index) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </MultiCarousel>
    </section>
  );
}
