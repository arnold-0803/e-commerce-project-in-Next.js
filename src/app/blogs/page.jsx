import React from 'react';
import Blogs from './Blogs';
import image from "../.././../public/photos/Banner9.png"

async function getBlogs() {
  
}

export default async function blogs() {
  const blogs = getBlogs();
  return (
    <div className='blogs-wrapper'>
      <div className='flex flex-wrap max-[640px]:flex-col'>
        <div className='relative flex-1 w-full h-[30%]'>
          <img className='w-full h-full'
            src="https://cdn.pixabay.com/photo/2021/01/01/21/09/challenger-5880009_640.jpg" alt=""
          />
          <div className='absolute top-0 left-0 w-full h-full flex justify-center
            items-center'>
              <h3 className='heading'>
                Automotive News
              </h3>
            </div>
        </div>
        <div className='relative flex-1'>
          <img className='w-full'
            src="/photos/5abc50acafa29cb8c81f69a89c22e499.jpg" alt=""
          />
          <div className='absolute top-0 left-0 w-full h-full flex justify-center
            items-center'>
              <p className='text-red-800
                '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, 
                facilis minima quae nobis dolore repellat consequuntur amet, enim 
                doloribus labore commodi in! Ipsum earum similique libero quaerat! Cum, 
                perferendis id. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
      </div>
      <Blogs/>
    </div>
  )
}
