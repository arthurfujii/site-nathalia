import Image from "next/image";

export default function QuemSou() {
  return (
    <section className="flex gap-4 p-32" id="quemsou">
      <Image
        src="/fake_profile_pic.jpg"
        alt="foto de perfil"
        width={380}
        height={506}
      />
      <article className="flex flex-col justify-evenly items-left">
        <h1 className="text-[#FBC971]">Quem sou</h1>
        <section className="flex flex-col gap-0.75">
          <p>
            Meu nome é Ana Paula, sou fisioterapeuta com especialização em
            reabilitação motora e neurológica de crianças e adultos.
          </p>
          <p>
            Atuo há 20 anos na área, com foco em cuidado humanizado e
            atendimento personalizado para cada paciente.
          </p>
          <p>
            Minha missão é ajudar você a recuperar a qualidade de vida e a
            autonomia, por meio de tratamentos eficazes e inovadores.
          </p>
        </section>
      </article>
    </section>
  );
}
