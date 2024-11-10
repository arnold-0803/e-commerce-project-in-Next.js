"use client";
import React, { useState } from 'react'
import GalleryCard from './GalleryCard';

export default function HomeGallery({galleryData}) {

  const [visibleItems, setVisibleItems] = useState(8);

  const loadMoreItems = () => {
    setVisibleItems(preVisibleItems => preVisibleItems + 8);
  }

  return (
    <div className='galleries md:px-12 py-10 bg-red-50'>
      <h1 className='heading'>GALLERY</h1>
      <ul className='card-list'>
        {galleryData && galleryData.slice(0, visibleItems).map(gallery => (
          <li key={gallery.id}>
            <GalleryCard data={gallery}/>
          </li>
        ))}
      </ul>
      {galleryData && visibleItems < galleryData.length && (
        <button className='btn mt-5 ml-[50%] translate-x-[-50%]' onClick={loadMoreItems}>Show more</button>
      )}
    </div>
  )
}
