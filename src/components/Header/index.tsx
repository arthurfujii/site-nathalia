import Image from 'next/image';

export function Header() {
  return (
    <header className='fixed z-50 w-full bg-[#F0F8F9] py-2.5'>
      <article className='mx-auto flex max-w-[900px] items-center justify-between'>
        <a href={'#home'}>
          <Image
            src='/images/logo_horizontal.png'
            alt='logo'
            width={135}
            height={60}
          />
        </a>
        <div>
          <nav>
            <ul className='flex flex-row gap-10 font-[Federo] text-[#9785BD]'>
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
        </div>
      </article>
    </header>
  );
}
