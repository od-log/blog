import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Props = {
  post: Post;
  type: "prev" | "next";
};

export default function PostPagination({ post: { path, title, description }, type }: Props) {
  return (
    <section className="group grid grid-cols-2 relative w-full bg-black max-h-28">
      <Link href={`/posts/${path}`}>
        <Image
          className="w-full opacity-40 max-h-28"
          src={`/images/${path}.jpg`}
          alt={title}
          width={150}
          height={100}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around itens-center text-white">
          {type === "prev" && (
            <div>
              <FiArrowLeft className="group-hover:animate-left-bounce" />
              이전 포스트
            </div>
          )}
          <div>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p>{description}</p>
          </div>
          {type === "next" && (
            <div>
              다음 포스트
              <FiArrowRight className="group-hover:animate-right-bounce" />
            </div>
          )}
        </div>
      </Link>
    </section>
  );
}
