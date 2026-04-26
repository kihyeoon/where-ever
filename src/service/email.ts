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
  companyName,
  email,
  contactNumber,
  message,
}: FormData) {
  const mailData = {
    to: process.env.AUTH_USER,
    from: process.env.AUTH_USER,
    subject: `[WHEREVER] ${companyName}`,
    html: `
      <h2>from: ${companyName}</h2>
      <br />
      <p>${message.replace(/\n/g, "<br />")}</p>
      <br />
      <p>이메일: ${email}</p>
      <p>연락처: ${contactNumber}</p>
    `,
  };
  return transporter.sendMail(mailData);
}
