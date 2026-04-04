
import Image from 'next/image';
import { Contato } from '@/components/sections/Contato';
import { Especialidades } from '@/components/sections/Especialidades';
import { Home } from '@/components/sections/Home';
import { QuemSou } from '@/components/sections/QuemSou';

export default function Page() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Image
        className='fixed -z-10 max-w-[1536px] sm:-top-20'
        src='/images/conexoes.png'
        alt='conexões'
        width={1920}
        height={937}
      />
      <Image
        className='fixed top-45 -left-30 -z-10 max-w-2xs sm:top-50 sm:-left-50 sm:max-w-lg md:top-90 xl:top-90'
        src='/images/movimento.png'
        alt='conexões'
        width={1231}
        height={1920}
      />
      <Image
        className='fixed -right-30 -bottom-20 -z-10 max-w-2xs scale-x-[-1] sm:-right-50 sm:-bottom-70 sm:max-w-lg xl:-bottom-90'
        src='/images/movimento.png'
        alt='conexões'
        width={1231}
        height={1920}
      />

      <Home />
      <QuemSou />
      <Especialidades />
      <Contato />
    </main>
  );
}
