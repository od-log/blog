import { EmailData } from "./email";

export async function sendContactEmail(form: EmailData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청 실패");
  }
  return data;
}
