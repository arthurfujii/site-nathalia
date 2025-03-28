'use client';

import { Especialidade, especialidades } from '@/lib/especialidades';
import Image from 'next/image';
import clsx from 'clsx';

export function GaleriaV2() {
  return (
    <div className='space-y-10'>
      {especialidades.map((especialidade: Especialidade) => (
        <div
          key={especialidade.id}
          className='mx-auto max-w-[1024px] overflow-hidden rounded-xl bg-gray-50 shadow-md'
        >
          <div
            className={`sm:flex sm:gap-5 ${clsx({ 'sm:flex-row-reverse': especialidade.id % 2 === 0 })}`}
          >
            <div className='sm:shrink-0'>
              <Image
                src={especialidade.img.path}
                alt={especialidade.img.alt}
                width={600}
                height={300}
                className='h-48 w-full object-cover sm:h-60 sm:w-60'
              />
            </div>
            <div
              className={`flex flex-col justify-center p-6 ${clsx({ 'sm:text-right': especialidade.id % 2 === 0 })}`}
            >
              <h2 className='mt-2 text-[#F2969E]'>{especialidade.title}</h2>
              <p className='mt-2'>{especialidade.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
