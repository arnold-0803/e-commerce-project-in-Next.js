"use client";
import { faCartShopping, faGear, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useCart } from '../context/CartProvider';
import { useFavourite } from '../context/FavouriteProvider';

export default function HeaderSecondTop() {

  const {getTotalQuantity} = useCart();
  const totalQuantity = getTotalQuantity();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const router = useRouter();
  const {favouriteItems} = useFavourite();

  const isActive = (href) => {
    return pathname === href;
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(query.trim()){
      router.push(`/searched?query=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className='border-b border-gray-200 py-3'>
      <div className="container sm:flex justify-between items-center">
        <h1 className='bg-gray-100'>
          <Link className='font-bold flex justify-center items-center'
            href={"/"}>
            <p className='text-red-900 text-[2rem]'>
              The<FontAwesomeIcon icon={faGear}/>Carz
            </p>  
            <img className='w-[80px]'
              src="/photos/Logo.png" alt=""
            />
          </Link>
        </h1>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <form onSubmit={handleSubmit}>
            <input className='border-gray-200 border py-2 pl-4 pr-16 rounded-lg w-full
              focus:outline-1 focus:outline-red-900 text-red-900;'
              type="text"
              placeholder='Search Product...'
              value={query}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size=
            {20} icon={faSearch}
            />
          </form>
        </div>
        <div className="flex gap-4 text-gray-300 text-[28px]
          max-[768px]:absolute top-[4%] z-50 px-2">
          <Link className={`${isActive("/user") ? "active-icon-links" : ""}`} href={"/user"}>
            <FontAwesomeIcon className='middle-header-icons mt-[6px]' icon={faUser}/>
          </Link>
          <div className="relative">
            <Link className={`${isActive("/favourite") ? "active-icon-links" : ""}`} href={"/favourite"}>
              <FontAwesomeIcon className='middle-header-icons' icon={faHeart}/>
              <div className="bg-red-600 rounded-full absolute top-[2px] right-0 h-[18px] w-[18px]
                flex justify-center items-center text-[0.95rem] text-white translate-x-1 -translate-y-1">
                {favouriteItems.length}
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link className={`${isActive("/cart") ? "active-icon-links" : ""}`} href={"/cart"}>
              <FontAwesomeIcon className='middle-header-icons' icon={faCartShopping}/>
              <div className="bg-red-600 rounded-full absolute top-[2px] right-0 h-[18px] w-[18px]
                flex justify-center items-center text-[0.95rem] text-white translate-x-1 -translate-y-1">
                {totalQuantity}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
