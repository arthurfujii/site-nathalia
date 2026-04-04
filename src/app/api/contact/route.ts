import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, E-mail e Mensagem são obrigatórios.' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'A mensagem precisa ter pelo menos 10 caracteres.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const bodyHtml = `
      <h3>Nova mensagem de contato via Site</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject || 'Sem assunto'}</p>
      <p><strong>Mensagem:</strong><br/>${message}</p>
    `;

    await transporter.sendMail({
      from: `"Formulário do Site" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `[Contato Site] ${subject || 'Nova Mensagem'} de ${name}`,
      html: bodyHtml,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar envio de email: ', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro interno. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
