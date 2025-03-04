import Image from 'next/image';

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
    <article className='flex w-[280px] flex-col gap-5 rounded-[20px] border border-[#DDD] bg-white p-2.5 drop-shadow-md'>
      <Image src={img.path} alt={img.alt} width={280} height={280} />
      <section className='flex flex-col gap-2.5'>
        <h2 className='h-[60px] place-content-center text-center text-[#F2969E]'>
          {title}
        </h2>
        <p className='w-full text-center'>{description}</p>
      </section>
    </article>
  );
};
