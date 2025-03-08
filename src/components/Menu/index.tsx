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
        <a href='#' onClick={toggleOpen}>
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
      <aside></aside>
    </div>
  );
}
