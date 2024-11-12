"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import SkeletonLoader1 from './SkeletonLoader1';

export default function GalleryCard({data}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative min-[532px]:h-[330px] border-[1.5px] p-3 rounded-2xl 
      hover:shadow-none shadow-md text-red-950 bg-[#fff]'>
      {loading ? (
        <SkeletonLoader1/>
      ) : (
        <>
          <div className='overflow-hidden rounded-[8px]'>
            <img className='w-full' src={data.src} alt={data.title} />
          </div>
          <h4 className='min-[532px]:absolute min-[532px]:bottom-[45px] font-black pt-4'>
            {data.title}
          </h4>
          <Link className='min-[532px]:absolute min-[532px]:bottom-[15px] block pt-4
            hover:font-semibold hover:tracking-[1px] transition-[0.3s] flex justify-center
            items-center' 
            href={`/gallery-details/${data.id}`}
          >
            Read more
            <FontAwesomeIcon className='ml-1 text-[1.2rem]'
              icon={faChevronCircleRight}
            />
          </Link>
        </>
      )}
    </div>
  )
}
