export function Nav() {
  return (
    <nav>
      <ul className='flex flex-col gap-10 font-[Federo] text-[#9785BD] sm:flex-row'>
        <li>
          <a href={'#quemsou'}>
            <h2>Quem sou</h2>
          </a>
        </li>
        <li>
          <h2>
            <a href={'#especialidades'}>Especialidades</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href={'#contato'}>Contato</a>
          </h2>
        </li>
      </ul>
    </nav>
  );
}
