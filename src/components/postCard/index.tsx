import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { post: Post };
export default function PostCard({ post: { title, description, date, path, category } }: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-2xl">
        <div className="overflow-hidden">
          <Image
            className="w-full h-48 hover:scale-110 ease-linear duration-300"
            src={`/images/${path}.jpg`}
            alt={title}
            width={272}
            height={165}
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-slate-600">{date}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-yellow-400 px-2 m-2">{category}</span>
        </div>
      </article>
    </Link>
  );
}
