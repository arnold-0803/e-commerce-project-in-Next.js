"use client"
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFavourite } from '../context/FavouriteProvider';

export default function Favourite() {

  const {favouriteItems} = useFavourite();

  return (
    <div className='list-holder px-10'>
      <h2 className='heading'>FAVOURITE PRODUCTS</h2>
      <ul className='w-full grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-y-[2rem] gap-x-[10px]
        justify-center items-center mt-5'>
        {favouriteItems.length > 0 ? (
          favouriteItems.map(product => (
            <li className='md:max-w-[300px]'
              key={product.id}>
              <ProductCard data={product} customHref="product-details"/>
            </li>
          ))
        ) : (
          <li className='empty-page'>No Favourite Product Added</li>
        )}
      </ul>
    </div>
  )
}
