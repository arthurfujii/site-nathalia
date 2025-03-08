'use client';

import { especialidades } from '@/lib/especialidades';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';

export function Galeria() {
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
      loop={true}
      autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      modules={[Autoplay]}
    >
      {especialidades.map((item) => (
        <SwiperSlide key={item.id}>
          <div className='mx-auto mb-5 overflow-hidden rounded-2xl shadow-md sm:max-w-120'>
            <Image
              src={item.img.path}
              width={600}
              height={300}
              alt={item.img.alt}
              className='h-full w-full object-cover sm:h-90 sm:w-full'
            />
            <div className='p-5'>
              <h2 className='mt-2 block text-[#F2969E]'>{item.title}</h2>
              <p className='mt-2 block text-left'>{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
