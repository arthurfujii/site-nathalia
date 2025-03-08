import Image from 'next/image';
import { Nav } from '../Nav';

export function Header() {
  return (
    <header className='fixed z-50 w-full bg-[#F0F8F9] px-5 py-2 sm:px-0'>
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
          <div className='block sm:hidden'>
            <Image
              src='/images/icon/icon_menu.png'
              alt='menu'
              width={30}
              height={30}
            />
          </div>
          <div className='hidden sm:block'>
            <Nav />
          </div>
        </div>
      </article>
    </header>
  );
}
