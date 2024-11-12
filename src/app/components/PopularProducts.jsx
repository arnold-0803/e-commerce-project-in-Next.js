"use client";
import React, { useEffect, useRef, useState } from 'react';
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


  const componentRef = useRef(null);
  const isInitialLoading = useRef(true);

  // SCROLLING EFFECT TO THE TOP OF ENTIRE PAGE
  useEffect(() => {

    if(isInitialLoading.current){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      isInitialLoading.current = false;
    }
  }, []);

  // ONLY TO THE TOP OF THIS COMPONENT
  useEffect(() => {
    if(!isInitialLoading.current && window.innerWidth <= 1180 && componentRef.current){
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [currentPage])

  return (
    <div className='list-holder' ref={componentRef}>
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
