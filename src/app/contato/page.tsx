import Image from "next/image";

export default function Contato() {
  return (
    <section
      className="flex justify-center items-center gap-16 p-40"
      id="contato"
    >
      <article className="flex flex-col gap-5">
        <h1>Contato</h1>
        <p>
          Caso queira marcar uma avaliação ou atendimento, envie-me uma
          mensagem:
        </p>
        <section className="grid grid-cols-2 gap-5">
          <form className="flex flex-col gap-2.5">
            <label htmlFor="nome" className="hidden">
              Nome
            </label>
            <input type="text" id="name" placeholder="Nome" />
            <label htmlFor="email" className="hidden">
              E-mail
            </label>
            <input type="email" id="email" placeholder="E-mail" />
            <label htmlFor="mensagem" className="hidden">
              Mensagem
            </label>
            <textarea id="message" placeholder="Mensagem" />
            <button type="submit">Enviar</button>
          </form>
          <section>
            <div>
              <Image
                src="/images/icon/icon_whatsapp.png"
                alt="whatsapp"
                width={30}
                height={30}
              />
              <p>+ 55 11 98765-4321</p>
            </div>
            <div>
              <Image
                src="/images/icon/icon_linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
              />
              <p>/nathaliacorreia.fisio</p>
            </div>
            <div>
              <Image
                src="/images/icon/icon_instagram.png"
                alt="instagram"
                width={30}
                height={30}
              />
              <p>@nathaliacorreia.fisio</p>
            </div>
          </section>
        </section>
      </article>
    </section>
  );
}
