"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SkeletonLoader2 from './SkeletonLoader2';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useFavourite } from '../context/FavouriteProvider';

export default function ProductCard({data, customHref}) {

  const [loading, setLoading] = useState(true);
  const {favouriteItems, addToFavourites, removeFromFavourites} = useFavourite();
  const isFavourite = favouriteItems.some(item => item.id === data.id)

  useEffect(() => {
    setTimeout(() => {setLoading(false);}, 2000)
  }, []);

  const handleFavourite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if(isFavourite){
      removeFromFavourites(data.id);
    }else{
      addToFavourites(data);
    }
  }

  return (
    <Link className='product-card' 
      href={`/${customHref}/${data.id}`}>
      <div className='border border-[1.5px solid #E3E3E6] p-5 md:h-[430px] flex flex-col
        shadow-[0_8px_16px_#8c99a750]'>
        {loading ? (
          <SkeletonLoader2/>
        ) : (
        <>
          <div className='flex-1'>
            <img className="w-full scale-[.75]" src={data.src} alt="" />
          </div>
          <div className='flex-1 relative flex flex-col justify-end items-center'>
            <h3 className='text-center font-black text-red-900 pb-1'>
              {data.title}
            </h3>
            <h4 className='text-center text-gray-600 pb-4'>
              {data.subtitle}
            </h4>
            <div className='flex justify-between px-[80px] w-full'>
              <span className='flex justify-center items-center gap-x-1 py-1'>
                <FontAwesomeIcon className='text-yellow-300' icon={faStar}/>
                <b className=''>
                  {data.rating}
                </b>
              </span>
              <span className='flex justify-center items-center text-[1.3rem]'>
                <FontAwesomeIcon className={`heart px-1 py-0 
                  ${isFavourite ? "text-red-500 bg-none" : "text-gray-300"}`}
                  onClick={handleFavourite}
                  icon={faHeart}
                />
              </span>
            </div>
            <p className='text-center font-black'>
              KES {data.price}
            </p>
          </div>
          <p className='click-me py-1 text-center text-gray-400 font-bold'>
            <b>Click me</b>
          </p>
        </>
        )}
      </div>
    </Link>
  )
}
