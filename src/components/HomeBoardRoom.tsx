import Image from 'next/image';
import React from 'react';

const HomeBoardRoom = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <p className='font-monument purple-gradient mt-28 text-center text-5xl uppercase'>
          THE BERAS
        </p>
      </div>
      <p className='my-6 w-full text-center text-2xl'>The Binary Boardroom</p>

      <div className='grid grid-cols-4 gap-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className='rounded-3xl border-2 border-solid border-[#5c46b9] bg-[#1c1c1c] p-4'
          >
            <div className='relative mx-auto h-44 w-44 overflow-hidden rounded-full'>
              <Image src='/images/avatar.png' alt='' fill sizes='auto' />
            </div>
            <div className='text-center'>
              <div className='my-4'>
                <p className='text-2xl font-bold'>Lorem ipsum</p>
                <p className='text-green italic'>dolar sit amet</p>
              </div>
              <p>
                consectetur adipisicing elit. possimus beatae eos officiis
                labore culpa, eius commodi vitae soluta quibusdam corrupti
                aliquam optio quaeratea
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className='font-monument mt-16 text-center text-3xl'>
        READY TO IMPRESS?
      </p>
    </div>
  );
};

export default HomeBoardRoom;
