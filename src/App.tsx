import { Header } from './components/Header.component';
import { Atuacao } from './pages/Atuacao.page';
import { Contato } from './pages/Contato.page';
import { Home } from './pages/Home.page';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Atuacao />
      <Contato />
    </>
  );
}

export default App;
