import { Post } from '@/service/posts';


export default function extractCategories(posts: Post[]): string[] {
  return posts.reduce((acc: string[], post: Post) => {
    const { category } = post;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
