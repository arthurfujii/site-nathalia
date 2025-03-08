import Contato from './contato/page';
import Especialidades from './especialidades/page';
import Home from './home/page';
import QuemSou from './quemsou/page';

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
