"use client"
import React, { useEffect, useState } from 'react'
import SlideCarousel from './SlideCarousel'
import Image from 'next/image';

export default function TestimonialReviews({data}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleReadMore = (review) => {
    setIsModalOpen(true);
    setSelectedReview(review);
  }

  const handleCloseReadMore = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  }

  const breakpoints = {
    0:{
      slidesPerView: 1
    },
    640:{
      slidesPerView: 2
    },
    768:{
      slidesPerView: 3
    }
  }

  return (
    <div className='reviews-wrapper py-[40px] px-[30px]'>
      <h3 className='heading'>REVIEWS FROM HAPPY CLIENTS</h3>
      <div className='py'>
        <SlideCarousel
          info={data}
          slidesPerView={5}
          spaceBetween={20}
          pagination={true}
          navigation={false}
          autoplay={false}
          loop={true}
          customClass="reviews-swiper"
          breakpoints={breakpoints}
          handleReadMore={handleReadMore}
        />
      </div>
      <div>
        {isModalOpen && (
          <div className='enlarge-review'>
            <div className='md:w-[600px] p-5 bg-[#fff] mt-[240px] rounded-lg
              flex flex-col justify-center items-center max-[713px]:mt-[550px]'>
              <div className='rounded-lg overflow-hidden'>
                <Image className='w-full'
                  src={selectedReview.src} alt=""
                  width={500}
                  height={300}
                />
              </div>
              <h4 className='font-bold text-[1.2rem] text-red-900 py-3'>
                {selectedReview.title}
              </h4>
              <p className='pb-4 text-center'>
                {selectedReview.testimony}
              </p>
              <div>
                <button
                  onClick={handleCloseReadMore}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
