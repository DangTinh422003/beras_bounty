'use client';
import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const swiperConfig: SwiperOptions = {
  spaceBetween: 20,
  slidesPerView: 3.7,
};

const HomePartnersSection = () => {
  const sliderRef = useRef<SwiperType>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slideNext();
  }, []);

  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <p className='purple-gradient font-monument mt-28 text-center text-5xl uppercase'>
          partners
        </p>
      </div>
      <p className='my-6 w-full text-center text-2xl'>
        Gain a potential commitmentto funding from ouresteemed partners.
      </p>

      <div className='relative select-none text-3xl'>
        <button
          onClick={handlePrev}
          className='absolute left-0 top-1/2 z-50 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white opacity-80 hover:opacity-90'
        >
          <FaChevronLeft className='relative -translate-x-[2px]' />
        </button>
        <button
          onClick={handleNext}
          className='absolute right-0 top-1/2 z-50 flex h-16 w-16 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white opacity-80 hover:opacity-90'
        >
          <FaChevronRight className='relative translate-x-[2px]' />
        </button>
        <Swiper
          {...swiperConfig}
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-48 bg-white opacity-10'></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePartnersSection;
