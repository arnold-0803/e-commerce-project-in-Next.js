"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import PagePagination from './PagePagination';

export default function PopularProducts({popularData}) {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const specificIndexes = [3, 5, 11, 20, 24, 25, 38, 41, 45, 50, 55, 64]
  const popularItems = specificIndexes.map(index => popularData[index]).filter(Boolean);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = popularItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(popularItems.length / itemsPerPage);
  return (
    <div className='list-holder'>
      <h2 className='heading'>POPULAR SALES</h2>
      <ul className='card-list'>
        {currentItems.map(popular => (
          <li key={popular.id}>
            <ProductCard customHref="product-details" data={popular}/>
          </li>
        ))}
      </ul>
      <PagePagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
