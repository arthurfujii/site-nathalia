import Image from 'next/image';
import Contato from './contato/page';
import Especialidades from './especialidades/page';
import Home from './home/page';
import QuemSou from './quemsou/page';

export default function Page() {
  return (
    <main>
      <div className='container mx-auto'>
        <div className='fixed -z-10 max-w-[1536px] sm:-top-20'>
          <Image
            src='/images/conexoes.png'
            alt='conexões'
            width={1920}
            height={937}
          />
        </div>
        <div className='fixed top-45 -left-30 -z-10 max-w-2xs sm:top-50 sm:-left-50 sm:max-w-lg md:top-90 xl:top-90'>
          <Image
            src='/images/movimento.png'
            alt='conexões'
            width={1231}
            height={1920}
          />
        </div>
        <div className='fixed -right-30 -bottom-20 -z-10 max-w-2xs scale-x-[-1] sm:-right-50 sm:-bottom-70 sm:max-w-lg xl:-bottom-90'>
          <Image
            src='/images/movimento.png'
            alt='conexões'
            width={1231}
            height={1920}
          />
        </div>
      </div>

      <div className='flex flex-col sm:px-0'>
        <div className='py-20'>
          <Home />
        </div>
        <div className='bg-[#5EC0D1]/20 px-10 py-20'>
          <QuemSou />
        </div>
        <div className='bg-[#F2969E]/20 px-10 py-20'>
          <Especialidades />
        </div>
        <div className='bg-[#FBC971]/20 px-10 py-20'>
          <Contato />
        </div>
      </div>
    </main>
  );
}
