import React from 'react'
import SlideCarousel from './SlideCarousel';
import { partnersData } from '../../../data/data';


export default function PartnerLogoSlide() {

  const breakpoints = {
    0:{
      slidesPerView: 2,
    },
    640:{
      slidesPerView: 3,
    },
    760:{
      slidesPerView: 4,
    },
    1024:{
      slidesPerView: 6,
    }
  }

  return (
    <div className='partner-banner'>
      <h2 className='heading'>OUR PARTNERS</h2>
      <SlideCarousel 
        info={partnersData}
        slidesPerView={6}
        spaceBetween={10}
        navigation={false}
        pagination={false}
        loop={true}
        speed={3000}
        autoplay={true}
        customClass="partner-swiper"
        breakpoints={breakpoints}
      />
    </div>
  )
}
