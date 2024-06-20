import Image from 'next/image';
import React from 'react';

const HomeHeroSection = () => {
  return (
    <div className='container relative mx-auto grid grid-cols-2 pb-10'>
      <div className='font-monument absolute top-1/2 z-50 -translate-y-1/2 uppercase'>
        <p className='text-5xl'>Welcome To</p>
        <p className='purple-gradient text-9xl'>
          BERAS <br /> BOUNTY.
        </p>
      </div>
      <div className='relative col-start-2 h-[700px] w-full'>
        <Image
          className='object-contain'
          src='/images/hero.png'
          sizes='auto'
          alt=''
          fill
        />
      </div>
    </div>
  );
};

export default HomeHeroSection;
