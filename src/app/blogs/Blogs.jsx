"use client"
import React from 'react'

export default function Blogs({blog}) {
  return (
    <div className='blog-card p-3'>
      <div className='blog-container flex md:gap-[2rem] justify-center items-center
        max-[768px]:gap-[1rem]'>
        <div className='flex-[40%]'>
          <img className='w-full h-full md:scale-[0.8] rounded-[8px]'
            src={blog.image} alt=""
          />
        </div>
        <div className='flex-[60%] h-full flex flex-col justify-center items-center border-[2px] pb-2
          bg-[whitesmoke]'>
          <h3 className='sm:text-[2.2rem] max-[640px]:text-[1.4rem] font-light text-red-900 
            text-center sm:pb-[20px] max-[768px]:py-[10px] px-2'>
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
