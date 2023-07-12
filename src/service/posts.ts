import path from 'path';
import { readFile } from 'fs/promises';

export interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  path: string;
  featured: boolean;
}

export async function getFeaturedPosts() : Promise<Post[]> {
  return getAllPosts()
    .then((posts) => posts.filter((post) => post.featured));
}
export async function getAllPosts() : Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a,b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostItem(id: string): Promise<Post | undefined> {
  const postList = await getAllPosts();
  return postList.find((item) => item.id === id);
}
