import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#9785BD] w-full sticky top-[100vh] pt-15 pb-32">
      <article className="flex gap-10 justify-between mx-auto max-w-[900px]">
        <section className="flex flex-col gap-2">
          <a
            href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 items-center">
              <Image
                src="/images/icon/icon_whatsapp-branco.png"
                alt="whatsapp"
                width={24}
                height={24}
              />
              <span className="text-white font-[Montserrat]">
                + 55 11 98765-4321
              </span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/nathaliacorreia.fisio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 items-center">
              <Image
                src="/images/icon/icon_linkedin-branco.png"
                alt="linkedin"
                width={24}
                height={24}
              />
              <span className="text-white font-[Montserrat]">
                /nathaliacorreia.fisio
              </span>
            </div>
          </a>
          <a
            href="https://www.instagram.com/nathaliacorreia.fisio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 items-center">
              <Image
                src="/images/icon/icon_instagram-branco.png"
                alt="instagram"
                width={24}
                height={24}
              />
              <span className="text-white font-[Montserrat]">
                @nathaliacorreia.fisio
              </span>
            </div>
          </a>
        </section>
        <section className="flex flex-col gap-2">
          <a
            href="https://maps.app.goo.gl/YedRLB2PHNtzSfJW7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2 items-center">
              <Image
                src="/images/icon/icon_map-branco.png"
                alt="pin"
                width={24}
                height={24}
              />
              <span className="text-white font-[Montserrat]">
                Av. Lins de Vasconcelos, 1609 - Cambuci - São Paulo - SP
              </span>
            </div>
          </a>
          <Image src="/images/maps.png" alt="mapa" width={581} height={216} />
        </section>
      </article>
    </footer>
  );
}
