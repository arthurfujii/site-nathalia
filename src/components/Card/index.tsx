import Image from "next/image";

type ImageProps = {
  path: string;
  alt: string;
};

type CardProps = {
  img: ImageProps;
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ img, title, description }) => {
  return (
    <article className="flex flex-col gap-5 w-[280px]">
      <Image src={img.path} alt={img.alt} width={280} height={280} />
      <section className="flex flex-col gap-2.5">
        <h2 className="text-[#F2969E] text-center h-[60px] place-content-center">
          {title}
        </h2>
        <p className="w-full text-center">{description}</p>
      </section>
    </article>
  );
};
