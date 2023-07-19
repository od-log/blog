import React from "react";
import MarkDownViewer from "../markDownViewer";
import Image from "next/image";
import { PostData } from "@/service/posts";

type Props = {
  postData: PostData;
};

export default function PostContent({ postData }: Props) {
  const { title, path, date, description, content } = postData;
  return (
    <article className="rounded-2xl overflow-hidden m-4">
      <Image
        className="w-full h-1/6 max-h-[350px]"
        src={`/images/${path}.jpg`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="p-4">
        <p className="flex items-center justify-end font-semibold ml-2">{date.toString()}</p>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold my-4">{description}</p>
        <MarkDownViewer content={content}></MarkDownViewer>
      </section>
    </article>
  );
}
