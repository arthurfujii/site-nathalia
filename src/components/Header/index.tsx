import Image from 'next/image';
import { Menu } from '../Menu';

export function Header() {
  return (
    <header className='fixed z-50 flex w-full items-center justify-between bg-[#F0F8F9] px-10 py-2.5'>
      <a href='#home'>
        <Image
          src='/images/logo_horizontal.png'
          alt='logo'
          width={135}
          height={60}
        />
      </a>
      <Menu />
    </header>
  );
}
