import FilterablePosts from '@/components/filterablePosts';
import { getAllPosts } from '@/service/posts';
import extractCategories from '@/utils/extractCategories';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = extractCategories(posts);

  return (
    <FilterablePosts posts={posts} categories={categories} />
  );
};


