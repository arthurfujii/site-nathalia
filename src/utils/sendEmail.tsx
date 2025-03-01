"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(from: string, subject: string, text: string) {
  const mailOptions = {
    from,
    to: process.env.EMAIL_TO,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado:", info.messageId);
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
}

export default sendEmail;
