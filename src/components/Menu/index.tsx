'use client';

import { Nav } from '../Nav';
import { useState } from 'react';

import Image from 'next/image';
import clsx from 'clsx';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className='block sm:hidden'>
        <a href='#menu' onClick={toggleOpen}>
          {isOpen ? (
            <Image
              src='/images/icon/icon_close.png'
              alt='menu'
              width={30}
              height={30}
            />
          ) : (
            <Image
              src='/images/icon/icon_menu.png'
              alt='menu'
              width={30}
              height={30}
            />
          )}
        </a>
      </div>
      <div className='hidden sm:block'>
        <Nav />
      </div>
      <aside
        className={`menu animate-fade-down animate-once animate-duration-200 animate-delay-300 animate-normal fixed top-[76] left-0 z-49 h-screen w-full bg-[#F0F8F9] ${clsx({ hidden: !isOpen })}`}
      >
        <section className='flex items-center justify-center overflow-hidden py-30'>
          <Nav toggleOpen={toggleOpen} />
        </section>
      </aside>
    </div>
  );
}
