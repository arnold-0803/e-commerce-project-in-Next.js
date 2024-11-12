"use client";
import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '../components/ProductCard';
import PagePagination from '../components/PagePagination';

export default function ShopProducts({products}) {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const componentRef = useRef(null);
  const isInitialLoading = useRef(true);

  // SCROLLING EFFECT TO THE TOP OF ENTIRE PAGE
  useEffect(() => {
    if(isInitialLoading.current){
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
      isInitialLoading.current = false;
    }
  }, []);

  // ONLY TO THE TOP OF THIS COMPONENT
  useEffect(() => {

    if(!isInitialLoading.current && componentRef.current){
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
   
  }, [currentPage]);

  return (
    <div>
      <ul className='card-list' ref={componentRef}>
        {currentItems.map(product => (
          <li key={product.id}>
            <ProductCard customHref="product-details" data={product}/>
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
