import Contato from './contato/page';
import Especialidades from './especialidades/page';
import Home from './home/page';
import QuemSou from './quemsou/page';

export default function Page() {
  return (
    <main className='mx-auto max-w-[900px]'>
      <Home />
      <QuemSou />
      <Especialidades />
      <Contato />
    </main>
  );
}
