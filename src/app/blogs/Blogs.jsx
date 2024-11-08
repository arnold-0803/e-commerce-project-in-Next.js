"use client"
import React from 'react'

export default function Blogs({blog}) {
  return (
    <div className='blog-card border-[1.5px] p-3 rounded-2xl shadow-md'>
      <div className='blog-container flex md:gap-[2rem] justify-center items-center
        max-[768px]:gap-[1rem]'>
        <div className='flex-[40%]'>
          <img className='w-full h-full md:scale-[0.8] rounded-[10px]'
            src={blog.image} alt=""
          />
        </div>
        <div className='flex-[60%] h-full flex flex-col justify-center items-center border-[1.5px] 
          border-red-900 rounded-[10px] pb-2'>
          <h3 className='sm:text-[1.6rem] max-[640px]:text-[1.2rem] font-semibold text-red-900 
            text-center sm:pb-[20px] max-[768px]:py-[10px]'>
            {blog.heading}
          </h3>
          <p className='px-5 pb-[20px] text-red-950 font-medium'>
            {blog.paragraph}
          </p>
            <a className='text-[#fff] font-semibold bg-red-900 p-[10px_15px] rounded-[5px]
              hover:bg-[#fff] hover:text-red-900 border-[2px] hover:border-red-900'
              href="#">Learn more
            </a>
        </div>
      </div>
    </div>
  )
}
