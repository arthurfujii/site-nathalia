import EmblaCarousel from "@/components/EmblaCarousel";

export type ImageProps = {
  path: string;
  alt: string;
};

export type Especialidade = {
  id: number;
  img: ImageProps;
  title: string;
  description: string;
};

export default async function Especialidades() {
  // const data = await fetch("http://localhost:3000/api/cards");
  // const { especialidades } = await data.json();
  const especialidades = [
    {
      id: 1,
      img: {
        path: "/images/item1.png",
        alt: "Descrição da imagem 1",
      },
      title: "Reabilitação neurológica",
      description:
        "Tratamento especializado para recuperação de funções neurológicas, promovendo qualidade de vida e bem-estar.",
    },
    {
      id: 2,
      img: {
        path: "/images/item2.png",
        alt: "Descrição da imagem 2",
      },
      title: "Psicomotricidade",
      description:
        "A psicomotricidade trabalha a integração entre corpo e mente, promovendo o desenvolvimento motor, cognitivo e emocional de crianças e adultos.",
    },
    {
      id: 3,
      img: {
        path: "/images/item3.png",
        alt: "Descrição da imagem 3",
      },
      title: "Estimulação transcraniana de corrente contínua",
      description:
        "A estimulação transcraniana de corrente contínua é uma técnica que utiliza correntes elétricas para melhorar funções cerebrais e tratar distúrbios neurológicos.",
    },
    {
      id: 4,
      img: {
        path: "/images/item4.png",
        alt: "Descrição da imagem 4",
      },
      title: "Fisioterapia respiratória",
      description:
        "A fisioterapia respiratória visa melhorar a função pulmonar, tratando doenças respiratórias e promovendo a reabilitação das vias aéreas.",
    },
    {
      id: 5,
      img: {
        path: "/images/item5.png",
        alt: "Descrição da imagem 5",
      },
      title: "Bandagem funcional",
      description:
        "A bandagem funcional é uma técnica terapêutica que oferece suporte e estabilização às articulações, prevenindo lesões e auxiliando na recuperação.",
    },
    {
      id: 6,
      img: {
        path: "/images/item6.png",
        alt: "Descrição da imagem 6",
      },
      title: "Análise do comportamento aplicada (ABA)",
      description:
        "A Análise do Comportamento Aplicada modifica comportamentos, utilizando princípios científicos para promover mudanças em contextos específicos.",
    },
    {
      id: 7,
      img: {
        path: "/images/item7.png",
        alt: "Descrição da imagem 7",
      },
      title: "Método Bobath",
      description:
        "O Método Bobath é uma abordagem terapêutica utilizada no tratamento de distúrbios neurológicos, focando na reabilitação motor e funcional.",
    },
  ];

  return (
    <section
      className="flex flex-col gap-5 py-16 items-center"
      id="especialidades"
    >
      <h1 className="text-[#5EC0D1]">Especialidades</h1>
      <section className="flex justify-center flex-wrap gap-4">
        <EmblaCarousel slides={especialidades} options={{ loop: true }} />
      </section>
    </section>
  );
}
