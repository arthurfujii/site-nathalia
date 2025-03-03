import { Card } from "@/components/Card";
import axios from "axios";

type ImageProps = {
  path: string;
  alt: string;
};

type Especialidade = {
  id: number;
  img: ImageProps;
  title: string;
  description: string;
};

export default async function Especialidades() {
  const especialidades: Especialidade[] = await axios(
    "http://localhost:3000/api/especialidades"
  ).then((response) => response.data.especialidades);
  return (
    <section
      className="flex flex-col gap-10 py-32 items-center"
      id="especialidades"
    >
      <h1 className="text-[#5EC0D1]">Especialidades</h1>
      <section className="flex justify-center flex-wrap gap-4">
        {especialidades.map((especialidade: Especialidade) => (
          <Card
            key={especialidade.id}
            img={especialidade.img}
            title={especialidade.title}
            description={especialidade.description}
          />
        ))}
      </section>
    </section>
  );
}
