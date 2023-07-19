import ContactForm from "@/components/contactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "오디에게 메일 보내기",
};

const Links = [{ icon: "", url: "" }];
const titleStyle = "text-3xl font-bold pt-2";

export default function ContactPage() {
  return (
    <section className="flex flex-col justify-center items-center m-4">
      <h3 className={titleStyle}>contact me</h3>
      {/* <ul>
        {Links.map((link) => {
          return (
            <li key={link.icon}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul> */}
      <h3 className={titleStyle}>메일 보내기</h3>
      <ContactForm />
    </section>
  );
}
