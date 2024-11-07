"use client"
import React from 'react'

export default function Blogs({blog}) {
  return (
    <div className='blog-card'>
      <div className='blog-container flex gap-[2rem]'>
        <div className='flex-[40%]'>
          <img className='w-full h-full'
            src={blog.image} alt=""
          />
        </div>
        <div className='flex-[60%]'>
          <h3>
            {blog.heading}
          </h3>
          <p>
            {blog.paragraph}
          </p>
        </div>
      </div>
    </div>
  )
}
