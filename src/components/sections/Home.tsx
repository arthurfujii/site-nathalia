'use client';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export function Home() {
  return (
    <section
      className='container mx-auto flex min-h-dvh flex-col items-center justify-center gap-6 px-6 pb-8 pt-24 sm:flex-row sm:gap-12 sm:py-0 lg:px-12'
      id='home'
    >
      <div className='flex w-full flex-col items-center justify-center sm:w-1/2 sm:items-start'>
        <Image
          src='/images/logo_vertical.png'
          alt='Nathalia Correia Física Logo'
          width={530}
          height={345}
          className='mb-4 h-auto w-full max-w-[220px] object-contain sm:mb-12 sm:max-w-xs lg:max-w-md'
          priority
        />
      </div>
      <div className='flex w-full flex-col items-center text-center sm:w-1/2 sm:items-start sm:text-left'>
        <h1 className='mb-4 font-["Federo"] text-[1.7rem] font-medium leading-tight text-[var(--color-purple)] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl'>
          Cuidado humanizado para reabilitação motora e neurológica
        </h1>
        <p className='mb-6 text-[1rem] leading-snug text-[var(--color-text)] sm:mb-8 sm:text-lg lg:text-xl'>
          Atendimento especializado para crianças e adultos, focado na recuperação e bem-estar integral.
        </p>
        <ScrollLink
          to='contato'
          smooth={true}
          duration={200}
          offset={-80}
          className='cursor-pointer rounded-full bg-[var(--color-yellow)] px-6 py-3 font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-[#eab308] hover:shadow-xl sm:px-8 sm:py-4'
        >
          Agende sua Consulta
        </ScrollLink>
      </div>
    </section>
  );
}
