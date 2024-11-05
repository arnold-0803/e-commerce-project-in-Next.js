"use client";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const SlideCarousel = ({
  info,
  SubscribeComponent,
  handleReadMore,
  spaceBetween = 20,
  slidesPerView = 1,
  navigation,
  pagination,
  loop,
  speed=500,
  autoplay,
  breakpoints={},
  customClass

}) => {
  return (
    <Swiper
      className={customClass}
      spaceBetween = {spaceBetween}
      slidesPerView = {slidesPerView}
      navigation = {navigation}
      pagination = {pagination ? {clickable: true} : false}
      loop = {loop}
      speed = {speed}
      autoplay = {autoplay}
      breakpoints={breakpoints}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {info.map(item => (
        <SwiperSlide className='swiper-slide' key={item.id}>
          {/* structure for general swiper */}
          <img src={item.src} alt="" />
          <div className='layer-content absolute top-0 left-0 w-full h-full text-white py-4 
            flex justify-center items-start lg:px-14 max-[769px]:flex-col'>
            <div className='flex-1 flex flex-col h-full justify-center items-center'>
              <h2 className='md:text-[3.5rem] max-[768px]:text-[1.5rem] font-bold text-center'>
                {item.heading}
              </h2>
              <h1 className='emblem md:text-[3rem] max-[768px]:text-[2rem] font-bold text-center pb-[20px]'>
                {item.subHeading}
              </h1>
              <p className='text-center lg:text-[1.2rem]'>
                {item.paragraph}
              </p>
            </div>
            <div className=' flex-1 max-[768px]:h-[150px] md:h-full w-full'>
              {SubscribeComponent && <SubscribeComponent/>}
            </div>
          </div>
          {/* structure for general swiper end */}

          {/* other structures */}
          <div>
            <h3>
              {item.title}
            </h3>
            <p>
              {item.testimony && item.testimony.slice(0, 100)}
              <span
                onClick={() => handleReadMore(item)}
              >
                {item.more}
              </span>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SlideCarousel;
