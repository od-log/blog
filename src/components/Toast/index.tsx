export type ToastType = {
  message: string;
  state: "success" | "error";
};

export default function Toast({ toast: { message, state } }: { toast: ToastType }) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🚨";
  return (
    <p className={`p-2 rounded-md ${isSuccess ? "bg-green-300" : "bg-red-300"}`}>
      {icon} {message}
    </p>
  );
}
