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
    <section id='especialidades' className='container mx-auto'>
      <div className='flex flex-col gap-10'>
        <h1 className='block text-[#5EC0D1]'>Especialidades</h1>
        <div className='block'>
          <GaleriaV2 />
        </div>
      </div>
    </section>
  );
}
