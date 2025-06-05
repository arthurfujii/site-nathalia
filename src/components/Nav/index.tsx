'use client';

import { scroller } from 'react-scroll';

type NavProps = {
  toggleOpen?: () => void;
};

export function Nav({ toggleOpen }: NavProps) {
  const scrollToSection = (id: string) => {
    scroller.scrollTo(id, {
      duration: 200,
      smooth: true, // Smooth scroll
      offset: -80, // Offset to account for the fixed header
    });
  };
  function action(id: string) {
    if (toggleOpen) {
      toggleOpen();
    }
    scrollToSection(id);
  }

  return (
    <nav>
      <ul className='flex flex-col items-center gap-10 font-[Federo] text-[#9785BD] sm:flex-row'>
        <li className='cursor-pointer'>
          <h2 onClick={() => action('quemsou')}>Quem sou</h2>
        </li>
        <li className='cursor-pointer'>
          <h2 onClick={() => action('especialidades')}>Especialidades</h2>
        </li>
        <li className='cursor-pointer'>
          <h2 onClick={() => action('contato')}>Contato</h2>
        </li>
      </ul>
    </nav>
  );
}
