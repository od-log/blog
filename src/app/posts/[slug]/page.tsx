import PostContent from "@/components/postContent";
import PostPagination from "@/components/postPagination";
import { getFeaturedPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const postData = await getPostData(slug);
  const { next, prev } = postData;

  return (
    <article>
      <PostContent postData={postData} />
      <section className="flex shadow-md">
        {prev && <PostPagination post={prev} type={"prev"} />}
        {next && <PostPagination post={next} type={"next"} />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
