import Contato from "./contato/page";
import Especialidades from "./especialidades/page";
import Home from "./home/page";
import QuemSou from "./quemsou/page";

export default function Page() {
  return (
    <main>
      <Home />
      <QuemSou />
      <Especialidades />
      <Contato />
    </main>
  );
}
