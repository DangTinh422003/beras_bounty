import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='pt-20'>
      <div className='container mx-auto'>
        <div className='relative h-14 w-72'>
          <Image
            src='/images/BerasLogo.png'
            className='object-contain'
            sizes='auto'
            alt=''
            fill
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
