import Image from 'next/image';
import Contato from './contato/page';
import Especialidades from './especialidades/page';
import Home from './home/page';
import QuemSou from './quemsou/page';

export default function Page() {
  return (
    <main className='container mx-auto'>
      <div className='fixed -z-10 sm:-top-40'>
        <Image
          src='/images/conexoes.png'
          alt='conexões'
          width={1920}
          height={937}
        />
        <div className='fixed top-45 -left-30 -z-10 max-w-2xs sm:top-50 sm:-left-50 sm:max-w-md'>
          <Image
            src='/images/movimento.png'
            alt='conexões'
            width={1920}
            height={1231}
          />
        </div>
        <div className='sm: fixed -right-30 -bottom-30 -z-10 max-w-2xs scale-x-[-1] sm:-right-50 sm:-bottom-70 sm:max-w-md'>
          <Image
            src='/images/movimento.png'
            alt='conexões'
            width={1920}
            height={1231}
          />
        </div>
      </div>
      <div className='flex flex-col gap-15 px-10 sm:gap-30 sm:px-0'>
        <Home />
        <QuemSou />
        <Especialidades />
        <Contato />
      </div>
    </main>
  );
}
