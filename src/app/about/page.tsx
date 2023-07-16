import Profile from "@/components/profile";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <Profile />
      <section className="text-center m-4">
        <h3 className="text-2xl font-bold">소개</h3>
        <p>사려 깊은 인터페이스를 만듭니다.</p>
        <h3 className="text-2xl font-bold">스킬</h3>
        <ul>
          <li>react</li>
          <li>nextjs</li>
        </ul>
      </section>
    </div>
  );
}
