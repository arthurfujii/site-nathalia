import Contato from '@/components/sections/Contato';
import Especialidades from '@/components/sections/Especialidades';
import Home from '@/components/sections/Home';
import QuemSou from '@/components/sections/QuemSou';

export default function Page() {
  return (
    <main className='container mx-auto'>
      <div className='flex flex-col gap-15 px-10 sm:gap-30 sm:px-0'>
        <Home />
        <QuemSou />
        <Especialidades />
        <Contato />
      </div>
    </main>
  );
}
