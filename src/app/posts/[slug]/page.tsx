import { getPostData, getPostItem } from '@/service/posts';
import React from 'react'

type Props = {
  params: {
    slug: string;
  }
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <section>
      <h3>{post?.title}</h3>
      <pre>{post.content}</pre>
    </section>
  )
}

