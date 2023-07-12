import { ALL_POSTS } from '@/components/filterablePosts';
import { Post } from '@/service/posts';

type FilterConditions = {
  filterCategory: string;
}

export default function filterPosts(
  posts: Post[],
  { filterCategory }: FilterConditions,
): Post[] {
  const match = (post: Post) => (post.category === filterCategory);

  const filteredPosts = filterCategory === ALL_POSTS
    ? posts
    : posts.filter(match);

  return filteredPosts;
}
