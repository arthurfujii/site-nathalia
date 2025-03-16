import Image from 'next/image';
import { Menu } from '../Menu';

export function Header() {
  return (
    <header className='fixed z-50 w-full bg-[#F0F8F9] px-10 py-2'>
      <article className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <a href={'#home'}>
              <Image
                src='/images/logo_horizontal.png'
                alt='logo'
                width={135}
                height={60}
              />
            </a>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </article>
    </header>
  );
}
