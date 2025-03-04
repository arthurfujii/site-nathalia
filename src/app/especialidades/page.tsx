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
  const data = await fetch("http://localhost:3000/api/especialidades");
  const { especialidades } = await data.json();
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
