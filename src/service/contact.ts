import { z } from "zod";

export const MAX_DESCRIPTION_LENGTH = 500;

export const FormSchema = z.object({
  howDidYouHear: z.enum(["유튜브", "네이버블로그", "인스타그램"], {
    required_error: "경로를 선택해주세요.",
  }),
  monthlyBudget: z.enum(["1-50", "50-100", "100-300", "300-500"], {
    required_error: "월 예산을 선택해주세요.",
  }),
  problemDescription: z
    .string()
    .min(1, {
      message: "현재 고민 중인 문제를 입력해주세요.",
    })
    .max(MAX_DESCRIPTION_LENGTH, {
      message: `최대 ${MAX_DESCRIPTION_LENGTH}자까지 입력 가능합니다.`,
    }),
  companyName: z.string().min(1, {
    message: "업체명을 입력해주세요.",
  }),
  region: z.string().min(1, {
    message: "지역을 입력해주세요.",
  }),
  contactNumber: z.string().regex(/^\d+-\d+-\d+$/, {
    message: "연락처는 000-0000-0000 형태로 입력해주세요.",
  }),
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
});

export type FormData = z.infer<typeof FormSchema>;

export async function sendEmail(email: FormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "서버 요청 실패!");
  }
  return data;
}
