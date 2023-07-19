import Image from "next/image";
import profileImage from "../../../public/images/profile.jpg";
import React from "react";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="profile image"
        width={250}
        height={250}
      />
      <h2 className="text=3xl font-bold mt-2">{`Hi, I'm OD`}</h2>
      <h3 className="text-xl font-semibold">Frontend Engineer</h3>
      <p className="mb-2"></p>
      <Link href="/contact" className="rounded-3xl px-4 py-1 mt-2 bg-black text-white">
        Contact Me
      </Link>
    </section>
  );
}
