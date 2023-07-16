import PostContent from "@/components/postContent";
import PostPagination from "@/components/postPagination";
import { getPostData } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const postData = await getPostData(slug);
  const { next, prev } = postData;

  return (
    <>
      <PostContent postData={postData} />
      <section className="flex shadow-md">
        {prev && <PostPagination post={prev} type={"prev"} />}
        {next && <PostPagination post={next} type={"next"} />}
      </section>
    </>
  );
}
