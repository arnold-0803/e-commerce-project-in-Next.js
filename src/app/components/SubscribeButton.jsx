"use client"
import React from 'react'

export default function SubscribeButton() {
  return (
    <div className="subscribe px-[10px] w-full h-full flex justify-center items-center">
      <form className='flex flex-col justify-center items-center lg:mt-40'>
        <h3 className='font-extrabold pb-1'>
          Subscribe for News Letters
        </h3>
        <div className='h-[55px] max-[580px]:h-[40px] md:w-[500px] flex justify-center items-center'>
          <input className='px-2 bg-[#fff] h-[53px] max-[580px]:h-[40px] w-[70%] text-black' 
            type="email" placeholder='enter email' required
          />
          <button className='btn md:w-[30%] h-full rounded-br-lg rounded-tr-lg'>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}
