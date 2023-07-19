import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import Toast, { ToastType } from "../toast";
import { sendContactEmail } from "@/service/contact";

const inputStyle = "border-2 rounded-xl border-solid border-slate-300 p-2";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({ from: "", subject: "", message: "" });
  const [toast, setToast] = useState<ToastType | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setToast({ message: "메일 전송 성공", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setToast({ message: "메일 전송 실패", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setToast(null);
        }, 3000);
      });
  };
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {toast && <Toast toast={toast} />}
      <form className="flex flex-col w-full max-w-md" onSubmit={onSubmit}>
        <label htmlFor="from">보내는 사람</label>
        <input
          className={inputStyle}
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          placeholder="보내는 사람 이메일 주소"
          onChange={onChange}
        />
        <label htmlFor="subject">제목</label>
        <input
          className={inputStyle}
          id="subject"
          name="subject"
          type="text"
          placeholder="이메일 제목"
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message">메시지</label>
        <textarea
          className={inputStyle}
          name="message"
          id="message"
          cols={30}
          rows={10}
          value={form.message}
          onChange={onChange}
        ></textarea>
        <button className="rounded bg-slate-950 text-white font-bold p-1 m-1" type="submit">
          전송
        </button>
      </form>
    </>
  );
}
