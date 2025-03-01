"use server";
import Image from "next/image";
import sendEmail from "@/utils/sendEmail";

export default async function Contato() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const nome = formData.get("nome");
    const mensagem = formData.get("mensagem");
    if (!email || !nome || !mensagem) {
      return;
    }
    sendEmail(
      JSON.stringify(email),
      `Contato pelo site de ${nome}`,
      JSON.stringify(mensagem)
    )
      .then(() => alert("E-mail enviado com sucesso!"))
      .catch((error) => alert(`Erro ao enviar e-mail: ${error}`));
  }

  return (
    <section className="flex gap-16 py-32 justify-center" id="contato">
      <article className="flex flex-col items-center gap-5">
        <h1 className="text-[#BCD079]">Contato</h1>
        <p className="place-self-start">
          Caso queira marcar uma avaliação ou atendimento, envie-me uma
          mensagem:
        </p>
        <section className="grid grid-cols-2 gap-5">
          <form
            className="flex flex-col gap-2.5 w-md col-auto"
            action={handleSubmit}
          >
            <label htmlFor="nome" className="hidden">
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              className="block w-full bg-white border border-gray-500 rounded-[20px] px-5 py-2.5"
              name="nome"
            />

            <label htmlFor="email" className="hidden">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="block w-full bg-white border border-gray-500 rounded-[20px] px-5 py-2.5"
              name="email"
            />

            <label htmlFor="mensagem" className="hidden">
              Mensagem
            </label>

            <textarea
              id="message"
              placeholder="Mensagem"
              className="w-full bg-white border border-gray-500 rounded-[20px] px-5 py-2.5 h-60 resize-none"
              name="mensagem"
            />

            <button
              type="submit"
              className="bg-[#9785BD] text-white border px-5 py-2.5 rounded-[20px] w-32"
            >
              Enviar
            </button>
          </form>
          <section className="flex flex-col gap-3 col-auto">
            <a
              href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/images/icon/icon_whatsapp.png"
                  alt="whatsapp"
                  width={30}
                  height={30}
                />
                <p>+ 55 11 98765-4321</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/nathaliacorreia.fisio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/images/icon/icon_linkedin.png"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
                <p>/nathaliacorreia.fisio</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/nathaliacorreia.fisio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/images/icon/icon_instagram.png"
                  alt="instagram"
                  width={30}
                  height={30}
                />
                <p>@nathaliacorreia.fisio</p>
              </div>
            </a>
          </section>
        </section>
      </article>
    </section>
  );
}
