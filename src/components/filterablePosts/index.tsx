'use client';
import { Post } from '@/service/posts';
import filterPosts from '@/utils/filterPosts';
import React, { useState } from 'react'
import PostsGrid from '../postsGrid';
import Categories from '../categories';

type Props = {
  posts: Post[];
  categories: string[];
}

export const ALL_POSTS = '전체';

export default function FilterablePosts({ posts, categories }: Props) {
  const [filterCategory, setFilterCategory] = useState<string>(ALL_POSTS);
  const filteredPosts = filterPosts(posts, {
    filterCategory
  });
  return (
    <section className='flex'>
      <PostsGrid posts={filteredPosts} />
      <aside>
        <Categories categories={[ALL_POSTS, ...categories]} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      </aside>
    </section>
  )
}
