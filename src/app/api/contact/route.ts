import { FormSchema } from "@/service/contact";
import { sendEmail } from "@/service/email";

export async function POST(req: Request) {
  const body = await req.json();
  if (!FormSchema.safeParse(body).success) {
    return new Response(JSON.stringify({ message: "유효하지 않은 포맷" }), {
      status: 400,
    });
  }

  return sendEmail(body)
    .then(() => {
      return new Response(JSON.stringify({ message: "메일 전송 성공" }), {
        status: 200,
      });
    })
    .catch((err) => {
      console.error(err);
      return new Response(JSON.stringify({ message: "메일 전송 실패!" }), {
        status: 500,
      });
    });
}
