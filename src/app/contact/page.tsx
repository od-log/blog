"use client";
import ContactForm from "@/components/contactForm";
import React from "react";

const Links = [{ icon: "깃허브", url: "" }];
const titleStyle = "text-3xl font-bold pt-2";

export default function ContactPage() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h3 className={titleStyle}>contact me</h3>
      <ul>
        {Links.map((link) => {
          return (
            <li key={link.icon}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <p>kg-te@naver.com</p>
      <h3 className={titleStyle}>메일 보내기</h3>
      <ContactForm />
    </section>
  );
}
