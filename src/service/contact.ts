import { z } from "zod";

export const MAX_MESSAGE_LENGTH = 1000;

export const FormSchema = z.object({
  companyName: z.string().min(1, {
    message: "업체명을 입력해주세요.",
  }),
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  contactNumber: z.string().regex(/^\d+-\d+-\d+$/, {
    message: "연락처는 000-0000-0000 형태로 입력해주세요.",
  }),
  message: z
    .string()
    .min(1, {
      message: "문의 내용을 입력해주세요.",
    })
    .max(MAX_MESSAGE_LENGTH, {
      message: `최대 ${MAX_MESSAGE_LENGTH}자까지 입력 가능합니다.`,
    }),
});

export type FormData = z.infer<typeof FormSchema>;

export async function sendEmail(data: FormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message || "서버 요청 실패!");
  }
  return json;
}
