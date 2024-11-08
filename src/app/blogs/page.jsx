import React from 'react';
import Blogs from './Blogs';
import { blogsBannerData, blogsData } from '../../../data/data';

async function getBlogs() {
  // logic for fetching data goes here
  return blogsData;
}

export default async function blogs() {
  const blogs = await getBlogs();
  return (
    <div className='blogs-wrapper'>
      <div>
        {blogsBannerData.map(blogBannerData => (
          <div className='flex flex-wrap max-[640px]:flex-col'
            key={blogBannerData.id}>
            <div className='relative flex-1 w-full h-[30%]'>
              <img className='w-full h-full'
                src={blogBannerData.imageBanner1} alt=""
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center
                items-center'>
                  <h3 className='heading'>
                    {blogBannerData.heading}
                  </h3>
                </div>
            </div>
            <div className='relative flex-1'>
              <img className='w-full'
                src={blogBannerData.imageBanner2} alt=""
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center
                items-center'>
                <p className='text-[#fff] font-medium max-[640px]:px-2 sm:px-5 
                  max-[640px]:text-[0.9rem]'>
                  {blogBannerData.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className='text-center pt-4 text-red-900 font-extrabold sm:text-[1.5rem]'>
          BE IN THE KNOW 
        </h2>
        <h3 className='text-center pb-10 text-red-950 font-bold'>
          ABOUT WHAT&apos;S HAPPENING IN THE WORLD OF AUTOMOTIVES
        </h3>
        <ul className='lg:px-[120px] max-[1024px]:px-[15px] flex flex-col gap-[2rem]
          pb-16'>
          {(blogs).map(blog => (
            <li key={blog.id}>
              <Blogs blog={blog}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
