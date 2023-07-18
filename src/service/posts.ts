import path from "path";
import { readFile } from "fs/promises";
import { cache } from "react";

export interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  path: string;
  featured: boolean;
}

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getPostItem(path: string): Promise<Post | undefined> {
  const postList = await getAllPosts();
  return postList.find((item) => item.id === path);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  const content = await readFile(filePath, "utf-8");
  if (!post) throw new Error(`${fileName}을 찾을 수 없음.`);

  const index = posts.indexOf(post);
  const next = index < posts.length - 1 ? posts[index + 1] : null;
  const prev = index > 0 ? posts[index - 1] : null;

  return { ...post, content, next, prev };
}
