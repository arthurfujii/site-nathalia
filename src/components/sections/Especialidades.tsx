'use client';

import { GaleriaV2 } from '@/components/GaleriaV2';

export function Especialidades() {
  return (
    <section
      id='especialidades'
      className='container mx-auto flex flex-col items-center justify-center gap-16 px-6 py-20 lg:px-12'
    >
      <h2 className='font-["Federo"] text-3xl font-medium text-[var(--color-blue)] md:text-4xl'>
        Especialidades
      </h2>
      <GaleriaV2 />
    </section>
  );
}
