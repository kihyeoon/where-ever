import nodemailer from "nodemailer";
import { FormData } from "./contact";

const transporter = nodemailer.createTransport({
  host: "smtp.naver.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({
  howDidYouHear,
  monthlyBudget,
  problemDescription,
  companyName,
  region,
  contactNumber,
  email,
}: FormData) {
  const mailData = {
    to: process.env.AUTH_USER,
    from: process.env.AUTH_USER,
    subject: `[WHEREVER] ${companyName}`,
    html: `
      <h2>from: ${companyName}</h2>
      <br />
      <p>${problemDescription}</p>
      <br />
      <p>이메일: ${email}</p>
      <p>연락처: ${contactNumber}</p>
      <p>지역: ${region}</p>
      <p>월 예산: ${monthlyBudget}</p>
      <p>알게된 경로: ${howDidYouHear}</p>
    `,
  };
  return transporter.sendMail(mailData);
}
