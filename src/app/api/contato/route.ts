import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.formData();
  const nome = formData.get('nome');
  const email = formData.get('email');
  const mensagem = formData.get('mensagem');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: `${email}`,
      subject: `Contato de ${email}`,
      html: `
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Mensagem: ${mensagem}</p>
      `,
    });
    return NextResponse.json({ message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: 'Erro ao enviar email' });
  }
}
