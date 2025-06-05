'use client';

import { GaleriaV2 } from '@/components/GaleriaV2';

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

export default function Especialidades() {
  return (
    <section
      id='especialidades'
      className='container flex flex-col gap-10 p-10'
    >
      <h1 className='text-[#5EC0D1]'>Especialidades</h1>
      <GaleriaV2 />
    </section>
  );
}
